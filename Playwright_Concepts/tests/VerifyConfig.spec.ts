import {test, expect} from "@playwright/test"

test("Verify config file", async({page})=>{

    await page.goto("https://playground.bsparksoftwaretechnologies.com/buttons")
    const HomepageEle = page.locator("#bst_btn1")
    const actualData = await HomepageEle.textContent()
    console.log(actualData)
    //Expect condition to validate with actual and expected data
    //expect(actualData).toEqual("SK")
    await expect(HomepageEle).toHaveText("GO TO HOME PAGE SK")
    await page.waitForTimeout(5000)
    
    const Ele2 = page.locator("#bst_btn2")
    await expect(Ele2,"Element to have text").toHaveText("GET POSITION")
    await page.waitForTimeout(5000)
    
    //assertions
    //auto assertion- Interact with elements
    await expect(HomepageEle).toBeChecked()
    await expect(HomepageEle).toBeDisabled()
    await expect(Ele2).toBeEditable()
    await expect(Ele2).toBeVisible()
    await expect(Ele2).toBeEnabled()


})

test.only("Assertion: soft and hard", async ({page})=>{

    await page.goto("https://playground.bsparksoftwaretechnologies.com/buttons")
    const HomepageEle = page.locator("#bst_btn1")
    const actualData = await HomepageEle.textContent()
    console.log(actualData)
    //Soft Assert- if the below code is getting failed it will continue to execute the whole test case.
    await expect.soft(HomepageEle).toHaveText("GO TO HOME PAGE SK")
    await page.waitForTimeout(5000)
    
    const Ele2 = page.locator("#bst_btn2")
    //Hard Assert- doesnt need to enter any .hard in below expect condition
    await expect(Ele2,"Element to have text").toHaveText("GET POSITION")
    await page.waitForTimeout(5000)
    
})

