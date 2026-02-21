import {test} from "@playwright/test"

test("Alerts handling", async({page}) => {
  
    await page.goto("/")

    const webAutomationEle = page.locator(".Home_title__ANWNn").first()
    await webAutomationEle.click()
    await page.waitForTimeout(3000)     

    const AlertEle = page.locator(".Sidebar_icon__wQ6Mc").nth(5)
    await AlertEle.click()
    await page.waitForTimeout(2000)

    //page.on is used to handle the alert every time it appears. If we use page.once, it will handle the alert only once.   
    //page.once is used to handle the alert only once. If we use page.on, it will handle the alert every time it appears.
    page.once("dialog", async(dialog) => {
        const alertMessage = dialog.message()

        if(alertMessage === "I AM AN ALERT BOX !")
        {
            await dialog.accept()
            console.log("Alert is accepted")
        }
        else if(alertMessage === "PRESS A BUTTON!"){
            await dialog.dismiss()
            console.log("Alert is dismissed")
        }
        else if(alertMessage === "PLEASE ENTER YOUR NAME"){
            const name = await dialog.accept("John Wick")
            console.log("Alert is accepted with name: " + name)
        }
        //Doubt: how to handle 4th alert?
        // else if(alertMessage === "")
        //     {
            
        // }
    })

    const alertButtonEle_1 = page.locator("//button[@id='bst_alert1']")
    await alertButtonEle_1.click()
    await page.waitForTimeout(2000)

    const alertButtonEle_2 = page.locator("//button[@id='bst_alert2']")
    await alertButtonEle_2.click()
    await page.waitForTimeout(2000)

    const alertButtonEle_3 = page.locator("//button[@id='bst_alert3']")
    await alertButtonEle_3.click()
    await page.waitForTimeout(2000)
})