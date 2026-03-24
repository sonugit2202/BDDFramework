const{expect } = require('@playwright/test')

class OrderHistory{
    constructor(page){
        this.page = page;
        this.orderHistory = page.locator("td label");
        this.orderHistoryOnOrderHistoryPage = page.locator('label:has-text("Orders History Page")');
        this.yourOrder = page.locator(".container h1");


    }

    async verifyOrders (){
        const orderHistoryIDs = await this.orderHistory.allTextContents();
        const orderId =  orderHistoryIDs.find(id => id.trim().length > 10);
        console.log(orderId);
        return orderId;
    }
    
    async verifyOrdersFromOrderHistory(orderId){
        await this.orderHistoryOnOrderHistoryPage.click();
        await expect(this.yourOrder).toBeVisible();
        const orderHistoryLists = await this.page.locator("tbody th").allTextContents();
        for(let i = 0 ; i< orderHistoryLists.length; i++){
                if(orderHistoryLists[i].trim() === orderId){
                    console.log(" Yes product is ordered succesfully!!")
                    return;
                }
                else{
                    console.log("No product Matched with order id")
                }
            }
    }
}

module.exports ={OrderHistory};