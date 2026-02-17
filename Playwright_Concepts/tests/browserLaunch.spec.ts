import {test} from "@playwright/test"

test("My first test case", async({page}) => {

//navigate to the url
    await page.goto("/")
    
//get title of the page
    const actualtitle = await page.title()
    console.log(actualtitle);
    
//get current URL
    const actualURL = page.url()
    console.log(actualURL);

//wait for 5 seconds
    await page.waitForTimeout(5000)

//navigate back to the previous page
    await page.goBack() 
    await page.waitForTimeout(5000) 

//navigate forward to the next page
await page.goForward()
await page.waitForTimeout(5000)

//refresh the page
await page.reload()
await page.waitForTimeout(5000)

//element locator
//const webAutomationEle = page.locator(".Home_title__ANWNn").first()
//await webAutomationEle.click()
//await page.waitForTimeout(5000) 

//nth element locator
const webAutomationEle2 = page.locator(".Home_title__ANWNn").nth(1)
await webAutomationEle2.click()
await page.waitForTimeout(5000)

})