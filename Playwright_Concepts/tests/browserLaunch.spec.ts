import {test} from "@playwright/test"

test("My first test case", async({page}) => {

//navigate to the url
    await page.goto("https://playground.bsparksoftwaretechnologies.com/")

//wait for 5 seconds
    await page.waitForTimeout(5000)
})