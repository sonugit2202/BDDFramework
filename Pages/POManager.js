const {BillingInfoPage} = require('./BillingInfoPage');
const {CartPage } = require('./CartPage');
const {DashboardPage} = require('./DashboardPage');
const {LoginPage} = require('./LoginPage');
const {OrderHistory} = require('.//OrderHistoryPage');

// import { BillingInfoPage } from "./BillingInfoPage";
// import { CartPage } from "./CartPage";
// import { DashboardPage } from "./DashboardPage";
// import { LoginPage } from "./LoginPage";
// import { OrderHistory } from "./OrderHistoryPage";

class POManager{
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.dashboardPage = new DashboardPage(page);
        this.cartPage = new CartPage(page);
        this.billingInfoPage = new BillingInfoPage(page);
        this.orderHistoryPage = new OrderHistory(page);
    }

    getloginPage(){
        return this.loginPage;
    }

    getdashboarPage(){
        return this.dashboardPage;
    }

    getCartPage(){
        return this.cartPage;
    }

    getBillingInfo(){
        return this.billingInfoPage;
    }
    
    getOrderHistoryPage(){
        return this.orderHistoryPage;
    }



}

module.exports= { POManager };