import {test,chromium} from "@playwright/test"

test("Open multiple windows manually", async() => {

    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    const page1 = await context.newPage()
    const page2 = await context.newPage()

    await page1.goto("https://www.amazon.in/")
    await page2.goto("https://www.flipkart.com/")

    await page1.waitForTimeout(5000)
    await page2.waitForTimeout(5000)

})

test.only("Handle child window", async()=> {

    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://playground.bsparksoftwaretechnologies.com/windowhandle")

    const HomepageEle = page.locator("#bst_btn4")
    
    //main
    const childwindow = context.waitForEvent("page")
    await HomepageEle.click()

    const page2 = await childwindow
    console.log("Intract with child window", page2.url());
    console.log("Intract with parent window", page.url());
    await page.waitForTimeout(5000)
})