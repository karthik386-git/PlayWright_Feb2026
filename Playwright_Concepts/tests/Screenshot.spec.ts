import {test} from "@playwright/test"

test("Screenshot test case", async({page})=>{
    await page.goto("/")
    //Element screenshot
    const webAutomationEle = page.locator(".Home_title__ANWNn").first()
    await webAutomationEle.screenshot({path: "./Screenshot/imgele.png"})

    //screenshot method is used to take the screenshot of the element. We can also take the screenshot of the page by using page.screenshot method. We can also take the screenshot of the specific area by using page.screenshot method with clip option. We can also take the screenshot of the specific element by using elementHandle.screenshot method. We can also take the screenshot of the specific element with specific options by using elementHandle.screenshot method with options.
    await page.screenshot({path: "./Screenshot/fullpage.png"})
})
