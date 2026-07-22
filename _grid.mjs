import { chromium } from 'playwright-core'
const EDGE='C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
const b=await chromium.launch({executablePath:EDGE})
for (const w of [700,768,880,940]) {
  const ctx=await b.newContext({viewport:{width:w,height:900}})
  const p=await ctx.newPage()
  await p.goto('http://localhost:4173/',{waitUntil:'networkidle'})
  await p.evaluate(()=>document.querySelectorAll('.reveal').forEach(n=>n.classList.add('is-in')))
  await p.waitForTimeout(400)
  const r=await p.evaluate(()=>{
    const out=[]
    document.querySelectorAll('.grid-3').forEach((g,gi)=>{
      const kids=[...g.children]
      const gr=g.getBoundingClientRect()
      const last=kids[kids.length-1].getBoundingClientRect()
      out.push({grid:gi,n:kids.length,
        gridMid:Math.round(gr.left+gr.width/2),
        lastMid:Math.round(last.left+last.width/2),
        lastW:Math.round(last.width),
        firstW:Math.round(kids[0].getBoundingClientRect().width)})
    })
    return out
  })
  console.log(`\n== ${w}px ==`)
  r.forEach(x=>{
    const centred = Math.abs(x.gridMid-x.lastMid)<=2
    const sameW = Math.abs(x.lastW-x.firstW)<=2
    console.log(`  grid#${x.grid} n=${x.n} lastWidth=${x.lastW} firstWidth=${x.firstW} `+
      (x.n%2 ? (centred?'CENTRED ok':'NOT centred (off by '+(x.lastMid-x.gridMid)+'px)')+(sameW?', width ok':', WIDTH MISMATCH') : 'even count - n/a'))
  })
  await ctx.close()
}
await b.close()
