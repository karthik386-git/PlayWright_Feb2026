import {test, expect} from"@playwright/test"

test("Frames Concept test", async({page}) =>{

    await page.goto("/")

    const webAutomationEle = page.locator(".Home_title__ANWNn").first()
    await webAutomationEle.click()
    await page.waitForTimeout(3000)

    const buttonEle = page.locator(".Sidebar_icon__wQ6Mc").nth(12)
    await buttonEle.click() 
    await page.waitForTimeout(5000)

    //const frame = page.frameLocator("#bst_frame1")

    // const inputEle = frame.getByPlaceholder("Type your name here")
    // await inputEle.fill("Thamil Amudhan")
    // await page.waitForTimeout(2000)

    // const submitButtonEle = frame.getByRole("button", {name: "submit"})
    // await submitButtonEle.click()
    // await page.waitForTimeout(2000)


    //NESTED FRAMES - Assignment
    const frame1 = page.frameLocator("#bst_frame2")
    const frame2 = page.frameLocator("bst_frame3")
    const inputEle1 = frame2.getByPlaceholder("Your name here")
    await inputEle1.fill("Karthik")
    
    const submitButtonEle1 = frame2.getByRole("button", {name: "submit"})
    await submitButtonEle1.click()
    await page.waitForTimeout(5000)

    const userNameEle = frame2.locator("#UsernameInput_message__Befhi")

    if(await userNameEle.textContent() == "Welcome, Karthik!")
        {
        console.log("User name is displayed in the second frame")
    }
    else{
        console.log("User name is not displayed in the second frame")
    }

    //multiple frames handled via for loop - page.frames() - mostly we won't use this approach because it is not reliable and it is not recommended by Playwright team. 
    // We will use frame locators instead of this approach.
    const frames = page.frames()
    for(const fr of frames){
        fr.locator("#id").fill("SK")
    }

})