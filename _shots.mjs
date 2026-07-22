import { chromium } from 'playwright-core'
import fs from 'node:fs'

const URL = process.env.TARGET ?? 'https://ara-tech-organization.github.io/Kayo-Schl-Franchise/'
const OUT = process.env.OUT ?? './shots'
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'

const SIZES = [
  ['xs-320', 320, 720],
  ['xs-375', 375, 780],
  ['sm-425', 425, 800],
  ['md-768', 768, 900],
  ['lg-1024', 1024, 850],
  ['xl-1440', 1440, 900],
]

fs.mkdirSync(OUT, { recursive: true })
const browser = await chromium.launch({ executablePath: EDGE })
const report = []

for (const [label, w, h] of SIZES) {
  const ctx = await browser.newContext({
    viewport: { width: w, height: h },
    deviceScaleFactor: 1,
    isMobile: w < 820,
    hasTouch: w < 820,
  })
  const page = await ctx.newPage()
  const consoleErrors = []
  page.on('console', (m) => m.type() === 'error' && consoleErrors.push(m.text()))
  page.on('pageerror', (e) => consoleErrors.push(String(e)))

  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 })
  // Force every scroll-reveal element visible so screenshots aren't blank.
  await page.evaluate(() => {
    document.querySelectorAll('.reveal').forEach((n) => n.classList.add('is-in'))
  })
  await page.waitForTimeout(700)

  // Horizontal overflow: the single most common responsive defect.
  const metrics = await page.evaluate(() => {
    const de = document.documentElement
    const offenders = []
    document.querySelectorAll('*').forEach((el) => {
      const r = el.getBoundingClientRect()
      if (r.width === 0 || r.height === 0) return
      if (r.right > de.clientWidth + 1 || r.left < -1) {
        offenders.push({
          tag: el.tagName.toLowerCase(),
          cls: (el.className && String(el.className).slice(0, 45)) || '',
          left: Math.round(r.left),
          right: Math.round(r.right),
        })
      }
    })
    // Tap-target audit on interactive elements
    const small = []
    document.querySelectorAll('a,button,input,select').forEach((el) => {
      const r = el.getBoundingClientRect()
      if (r.width === 0 || r.height === 0) return
      if (r.height < 40) {
        small.push({
          tag: el.tagName.toLowerCase(),
          txt: (el.textContent || '').trim().slice(0, 26),
          h: Math.round(r.height),
        })
      }
    })
    return {
      scrollW: de.scrollWidth,
      clientW: de.clientWidth,
      docH: de.scrollHeight,
      offenders: offenders.slice(0, 12),
      small: small.slice(0, 10),
    }
  })

  await page.screenshot({ path: `${OUT}/${label}-top.png` })
  await page.screenshot({ path: `${OUT}/${label}-full.png`, fullPage: true })

  report.push({ label, w, ...metrics, consoleErrors })
  await ctx.close()
}

await browser.close()
fs.writeFileSync(`${OUT}/report.json`, JSON.stringify(report, null, 2))

for (const r of report) {
  const overflow = r.scrollW > r.clientW ? `OVERFLOW +${r.scrollW - r.clientW}px` : 'no overflow'
  console.log(`\n== ${r.label} (${r.w}px) == ${overflow} | page height ${r.docH}px`)
  if (r.offenders.length) {
    console.log('   elements past viewport:')
    r.offenders.forEach((o) => console.log(`     <${o.tag} class="${o.cls}"> L${o.left} R${o.right}`))
  }
  if (r.small.length) {
    console.log('   tap targets under 40px:')
    r.small.forEach((s) => console.log(`     <${s.tag}> "${s.txt}" h=${s.h}`))
  }
  if (r.consoleErrors.length) console.log('   console errors:', r.consoleErrors.slice(0, 3))
}
