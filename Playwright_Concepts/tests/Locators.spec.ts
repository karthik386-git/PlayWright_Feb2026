import{test} from "@playwright/test"

test("Locate using ID", async({page}) => {

    await page.goto("/")

    const webAutomationEle = page.locator(".Home_title__ANWNn").first()
    await webAutomationEle.click()
    await page.waitForTimeout(5000)

    const gotoHomepageEle = page.locator(".Sidebar_icon__wQ6Mc").first()
    await gotoHomepageEle.click()
    await page.waitForTimeout(2000)
//fill 
    const emailEle = page.locator("#email")
    await emailEle.fill("LavanyaGopal@gmail.com")
    await page.waitForTimeout(2000)

//get attribute value
//type - types the text in the input field one by one, simulating real user behavior. It also triggers the input events, which can be useful for testing autocomplete or validation features. On the other hand, fill simply sets the value of the input field without triggering any events. It is faster than type but may not work well for testing certain features that rely on user interactions.
    const appendEle = page.locator("#append")
    //await appendEle.fill("LoudGopal")
    //await page.waitForTimeout(2000)
    const defaultValue = await appendEle.getAttribute("value")
    console.log(defaultValue);
    await appendEle.type("LoudGopal")
    await page.waitForTimeout(2000)
    
})