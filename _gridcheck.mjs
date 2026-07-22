import { chromium } from 'playwright-core'

const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
const browser = await chromium.launch({ executablePath: EDGE })

for (const w of [700, 768, 880, 940, 1200]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 } })
  const p = await ctx.newPage()
  await p.goto('http://localhost:4173/', { waitUntil: 'networkidle', timeout: 60000 })
  await p.evaluate(() => document.querySelectorAll('.reveal').forEach((n) => n.classList.add('is-in')))
  await p.waitForTimeout(400)

  const rows = await p.evaluate(() => {
    const out = []
    document.querySelectorAll('.grid-3, .grid-2').forEach((g) => {
      const kids = [...g.children]
      const gr = g.getBoundingClientRect()
      const last = kids[kids.length - 1].getBoundingClientRect()
      const first = kids[0].getBoundingClientRect()
      const cols = getComputedStyle(g).gridTemplateColumns.split(' ').length
      out.push({
        cls: g.className,
        n: kids.length,
        cols,
        gridMid: Math.round(gr.left + gr.width / 2),
        lastMid: Math.round(last.left + last.width / 2),
        lastW: Math.round(last.width),
        firstW: Math.round(first.width),
      })
    })
    return out
  })

  console.log(`\n== ${w}px ==`)
  rows.forEach((x) => {
    const orphan = x.cols === 2 && x.n % 2 === 1
    if (!orphan) {
      console.log(`  ${x.cls.padEnd(8)} n=${x.n} cols=${x.cols}  - no orphan`)
      return
    }
    const off = x.lastMid - x.gridMid
    const centred = Math.abs(off) <= 2
    const sameW = Math.abs(x.lastW - x.firstW) <= 3
    console.log(
      `  ${x.cls.padEnd(8)} n=${x.n} cols=${x.cols}  last ${x.lastW}px vs first ${x.firstW}px  ` +
        `${centred ? 'CENTRED' : 'OFF by ' + off + 'px'}  ${sameW ? 'width-ok' : 'WIDTH-MISMATCH'}`,
    )
  })
  await ctx.close()
}
await browser.close()
