import { chromium } from 'playwright-core'

const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
const browser = await chromium.launch({ executablePath: EDGE })
const ctx = await browser.newContext({ viewport: { width: 880, height: 900 } })
const p = await ctx.newPage()
await p.goto('http://localhost:4173/', { waitUntil: 'networkidle', timeout: 60000 })
await p.evaluate(() => document.querySelectorAll('.reveal').forEach((n) => n.classList.add('is-in')))
await p.waitForTimeout(400)

const info = await p.evaluate(() => {
  const grids = [...document.querySelectorAll('.grid-3')]
  return grids.map((g) => {
    const kids = [...g.children]
    return {
      gridWidth: Math.round(g.getBoundingClientRect().width),
      gridCols: getComputedStyle(g).gridTemplateColumns,
      gap: getComputedStyle(g).gap,
      kids: kids.map((k) => {
        const cs = getComputedStyle(k)
        return {
          cls: k.className.replace('reveal ', '').slice(0, 34),
          w: Math.round(k.getBoundingClientRect().width),
          maxW: cs.maxWidth,
          gridCol: cs.gridColumn,
          marginL: cs.marginLeft,
        }
      }),
    }
  })
})

info.forEach((g, i) => {
  console.log(`\ngrid#${i}  width=${g.gridWidth}  cols="${g.gridCols}"  gap=${g.gap}`)
  g.kids.forEach((k) => console.log(`   ${k.cls.padEnd(36)} w=${String(k.w).padStart(4)} maxW=${k.maxW.padEnd(10)} col=${k.gridCol.padEnd(10)} ml=${k.marginL}`))
})
await browser.close()
