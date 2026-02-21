import {test} from"@playwright/test"  


test("Select alloptions from dropdown", async({page}) => {
    await page.goto("/")

    const webAutomationEle = page.locator(".Home_title__ANWNn").first()
    await webAutomationEle.click()
    await page.waitForTimeout(3000) 

    const buttonEle = page.locator(".Sidebar_icon__wQ6Mc").nth(14)
    await buttonEle.click()
    await page.waitForTimeout(2000) 

    const DateEle = page.locator("#day")
    await DateEle.selectOption({value: "20"})

    const MonthEle = page.locator("#month")
    await MonthEle.selectOption({index: 3})

    const YearEle = page.locator("#year")
    await YearEle.selectOption({label: "1997"})
    await page.waitForTimeout(5000) 

    const allOptionsEle = page.locator("//select[@id='day']/option")
    const Count = await allOptionsEle.count()

    for(let i = 0; i<Count; i++)
    {
       const actualText = await allOptionsEle.nth(i).textContent()
       console.log(actualText)
    }
})