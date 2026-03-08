import{test,expect} from "@playwright/test"

test("Get all data from webtable", async ({page})=> {

    await page.goto("https://playground.bsparksoftwaretechnologies.com/webtable")
    const table = page.locator("//table[@id='webtable']/tbody")
    const rows = table.locator("tr")

    for(let i=0; i< await rows.count(); i++){
       
        const cells = rows.nth(i).locator("td")

        for(let j=0; j< await cells.count(); j++ ){

            const columnData = await cells.nth(j).textContent()
            console.log(columnData)

        }

    }
    })

    test.only("Select HR record only", async ({page})=> {
    await page.goto("https://playground.bsparksoftwaretechnologies.com/webtable")
    const table = page.locator("//table[@id='webtable']/tbody")
    const rows = table.locator("tr")

    for(let i=0; i< await rows.count(); i++){

        const size = i+1
        const isActiveEle = page.locator("#active-101["+size+"]")
       
        const cells = rows.nth(i).locator("td")

        for(let j=0; j< await cells.count(); j++ ){

            const columnData = await cells.nth(j).textContent()

            if(columnData == "HR" || columnData == "TECH SUPPORT")

            console.log(columnData)
        }
    }
        await page.waitForTimeout(20000)
})