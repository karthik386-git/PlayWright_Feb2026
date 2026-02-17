import test from "@playwright/test"

test("Assignment", async({page}) => {

   await page.goto("/")

   const webAutomationEle = page.locator(".Home_title__ANWNn").first()
   await webAutomationEle.click()
   await page.waitForTimeout(5000)

   const buttonEle = page.locator(".Sidebar_icon__wQ6Mc").nth(1)
   await buttonEle.click()
   await page.waitForTimeout(5000)

   const gotoHomepageEle = page.locator("bst_btn1")
   await gotoHomepageEle.click()
   await page.waitForTimeout(5000)  

   const currentTitle = await page.title()
   console.log("Current title");
   
   const currentURL = page.url()
   console.log("Current URL");

})
