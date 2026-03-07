import {expect, test} from "@playwright/test"

test("Move to element", async({page})=>{

    await page.goto("https://playground.bsparksoftwaretechnologies.com/actionclass")
    const ele = page.locator("//div[text()='ACTION CLASS OPTIONS']")
    await ele.hover();
    await page.waitForTimeout(5000)
 
    const frameLink = page.getByText("Frames").last()
    await frameLink.hover()
    await page.waitForTimeout(5000)
    await frameLink.click()
    await page.waitForTimeout(5000)

})

test("Double click", async({page})=>{

    await page.goto("https://playground.bsparksoftwaretechnologies.com/actionclass")
    const DoubleclickEle = page.locator("#bst_btn")
    await DoubleclickEle.dblclick()

    const text = page.locator("#bst_para")
    expect(text).toHaveText("Clicked Me Twice")
    await page.waitForTimeout(5000)
})

test.only("Right click", async({page})=>{
    await page.goto("https://playground.bsparksoftwaretechnologies.com/actionclass")
    const RightclickEle = page.locator("#bst_anchor")
    await RightclickEle.click({button:"right"})
    await page.waitForTimeout(5000)
})

test("Drag and Drop", async({page})=>{
    await page.goto("https://playground.bsparksoftwaretechnologies.com/actionclass")
    const DragEle = page.locator("#bst_drag")
    const DropEle = page.locator("#bst_txtarea")
    await DragEle.dragTo(DropEle)
    await page.waitForTimeout(5000)
})