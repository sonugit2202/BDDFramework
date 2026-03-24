const{expect } = require('@playwright/test')
class BillingInfoPage{

    constructor(page){
        this.page = page;
        this.selectCountry = page.getByPlaceholder("Select Country");
        this.countryLists = page.locator(".ta-results span");
        this.placeOrderBtn = page.getByText('Place Order');
        //this.placeOrderBtn = page.locator(".action__submit");
        this.ThankYouMessage = page.locator('.hero-primary')


    }

    // async enterCountryDetails(countryName){
    //      await this.selectCountry.pressSequentially(countryName, {delay : 100});
    //     //const allCountryName = await this.countryLists;
    //     //await allCountryName.waitFor();
    //    // const options = this.countryLists.locator("button");
    //     let countryCount = await this.countryLists.count(); 
    //     for(let i = 0 ; i < countryCount; i++) {
    //         const text = await this.countryLists.nth(i).textContent();
    //         if(text.trim()=== countryName){
    //             await this.countryLists.nth(i).click();
    //             break;
    //         }
    //     };
    // }

    async enterCountryDetails(countryName){
            await this.page.getByPlaceholder("Select Country").pressSequentially("Ind");
            const countryLists = await this.page.locator(".ta-results span");
            let countryCount = await countryLists.count(); 
            for(let i = 0 ; i < countryCount; i++) {
                const text = await countryLists.nth(i).textContent();
                if(text.trim()=== countryName){
                    await countryLists.nth(i).click();
                    break;
                }
    };
}

    async clickOnPlaceOrderBtn(){
        await this.placeOrderBtn.click();
        await this.page.waitForLoadState('networkidle'); 
    }
    

    async verifyOrderSuccessfully(){
      //  await this.ThankYouMessage.waitFor();
    //     await expect(this.ThankYouMessage).toHaveText(" Thankyou for the order. ");
        await expect(this.ThankYouMessage).toContainText("Thankyou");
     }
    


}
module.exports = { BillingInfoPage };