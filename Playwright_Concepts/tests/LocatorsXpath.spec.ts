import {test} from "@playwright/test"

test("Xpath Loactor", async({page}) =>{
    await page.goto("/")
    const webAutomationEle = page.locator(".Home_title__ANWNn").first()
    await webAutomationEle.click()
    await page.waitForTimeout(3000) 

    const buttonEle = page.locator(".Sidebar_icon__wQ6Mc").nth(1)
    await buttonEle.click()
    await page.waitForTimeout(2000) 

    const gotoHomepageEle = page.locator("//button[@id='bst_btn1']")
    await gotoHomepageEle.click()
    await page.waitForTimeout(2000) 

})