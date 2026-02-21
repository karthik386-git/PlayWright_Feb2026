import {test} from"@playwright/test"    

test("Form Validation test case 1: Verify error message for empty email field", async({page}) => {

    await page.goto("/")
    const webAutomationEle = page.locator(".Home_title__ANWNn").first()
    await webAutomationEle.click()
    await page.waitForTimeout(3000)

    const buttonEle = page.locator(".Sidebar_icon__wQ6Mc").nth(14)
    await buttonEle.click()
    await page.waitForTimeout(2000) 


    const signupEle = page.locator("//button[@id='bst_007']")
    await signupEle.click()
    await page.waitForTimeout(2000)

    const errorMessageEle = page.locator("//p[text()='First name is required']")
    if(await errorMessageEle.isVisible()) {
        console.log("Error message is displayed for empty first name field")
    } else {
        console.log("Error message is not displayed for empty first name field")
    }
})

test("Form Validation test case 2: placeholder element", async({page}) => {
    await page.goto("/")
    const webAutomationEle = page.locator(".Home_title__ANWNn").first()
    await webAutomationEle.click()
    await page.waitForTimeout(3000)

    const buttonEle = page.locator(".Sidebar_icon__wQ6Mc").nth(14)
    await buttonEle.click()
    await page.waitForTimeout(2000)

    const FirstNamePlaceholderEle = page.locator("//input[@placeholder='Enter first name']")
    const placeholderValue = await FirstNamePlaceholderEle.getAttribute("placeholder")
    console.log("First name placeholder value is: " + placeholderValue)

    const LastNamePlaceholderEle = page.locator("//input[@placeholder='Enter last name']")
    const placeholderValue_1 = await LastNamePlaceholderEle.getAttribute("placeholder")
    console.log("Last name placeholder value is: " + placeholderValue_1)
})

test.only("Form Validation test case 3: Filling and submitting the form", async({page}) => {

    await page.goto("/")

    const webAutomationEle = page.locator(".Home_title__ANWNn").first()
    await webAutomationEle.click()
    await page.waitForTimeout(3000) 

    const buttonEle = page.locator(".Sidebar_icon__wQ6Mc").nth(14)
    await buttonEle.click()
    await page.waitForTimeout(2000) 

    const firstNameEle = page.locator("//input[@placeholder='Enter first name']")
    await firstNameEle.fill("ThamilAmudhan")
    await page.waitForTimeout(2000)
    
    const lastNameEle = page.locator("//input[@placeholder='Enter last name']")
    await lastNameEle.fill("Sathyamoorthy")
    await page.waitForTimeout(2000) 

    const DateEle = page.locator("#day")
    await DateEle.selectOption({value: "20"})

    const MonthEle = page.locator("#month")
    await MonthEle.selectOption({index: 3})

    const YearEle = page.locator("#year")
    await YearEle.selectOption({label: "1997"})
    await page.waitForTimeout(5000)

    const genderEle = page.locator("//input[@id='male']")
    await genderEle.click()

    const emailEle = page.locator("//input[@id='bst_004']")
    await emailEle.fill("thamilamudhan.sathyamoorthy@gmail.com") 

    const phonenumberEle = page.locator("//input[@id='bst_005']")
    await phonenumberEle.fill("9876543210")

    const pwdEle = page.locator("//input[@id='bst_006']")
    await pwdEle.fill("Thamil@123") 
    await page.waitForTimeout(5000)

    const signupEle = page.locator("//button[@id='bst_007']")
    await signupEle.click()
    await page.waitForTimeout(5000)

})