class Utility{



    public static async Errorpage({page}:any){

        const hompagetext =await page.getByText('Go to homepage');

        if( hompagetext.isVisible().catch(()=>false)){

            //  Senior QA recommendation -
            // Use .catch(() => false) when you intentionally want to treat a rejected visibility check as a negative result. Avoid it when it might hide a genuine automation problem.
            // Also, if your goal is to wait for the error page to appear, remember that isVisible() checks the current state; it does not wait for the element to become visible. You may need await hompagetext.waitFor({ state: 'visible' }) or a suitable assertion such as await expect(hompagetext).toBeVisible() depending on your test scenario.
            console.log("Error page is displayed");
            await page.getByText('Go to homepage').click();
            await page.waitForLoadState('domcontentloaded');

        }else{
            console.log("Error page is not displayed");
        }



        
    // const homepageText:any = page.getByText('Go to homepage');

    //     if(await homepageText.isVisible().catch(()=>false)){
    //     console.log("Error page is displayed");
    //     await homepageText.click();
    //     await page.waitForLoadState('domcontentloaded');
    // }

    }

}

export default Utility;