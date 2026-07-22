import { chromium } from 'playwright-core'

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
const OUT = process.env.OUT ?? './hero.png'
const W = Number(process.env.W ?? 1512)
const FULL = process.env.FULL === '1'
const SEC = process.env.SEC

const browser = await chromium.launch({ executablePath: EDGE })
const page = await browser.newPage({ viewport: { width: W, height: 900 } })
await page.goto('http://localhost:4178/', { waitUntil: 'networkidle' })
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
await page.waitForTimeout(600)
await page.evaluate(() => window.scrollTo(0, 0))
await page.waitForTimeout(5600)
const close = await page.$('.modal-close')
if (close) await close.click()
await page.waitForTimeout(400)

if (SEC) {
  const el = await page.$(SEC)
  await el.scrollIntoViewIfNeeded()
  await page.waitForTimeout(700)
  await el.screenshot({ path: OUT })
} else {
  await page.screenshot({ path: OUT, fullPage: FULL })
}
await browser.close()
