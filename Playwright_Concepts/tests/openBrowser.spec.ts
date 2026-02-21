import {test, chromium, firefox, webkit} from "@playwright/test"

test("Open browser", async({}) => {
    //Launch the browser

    //browser, context, page are the three main components of Playwright.
    const browser = await chromium.launch({headless: false }) // open the browser in headed mode
    const context = await browser.newContext() // create a new browser context, private window
    const page = await context.newPage() // create a new page in the browser context, tab in the private window
    
    //navigate to the url
    await page.goto("https://playground.bsparksoftwaretechnologies.com")

    //wait for 5 seconds
    await page.waitForTimeout(5000)

    //close the browser
    await page.close()
})

test.only("Open browser using page fixture", async({page}) => {

await page.goto("https://playground.bsparksoftwaretechnologies.com")

await page.waitForTimeout(5000)

await page.close()
})