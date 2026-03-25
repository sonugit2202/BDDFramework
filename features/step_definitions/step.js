
const {Given, When, Then} = require('@cucumber/cucumber');
const {POManager} = require('../../Pages/POManager');
const {chromium} = require('playwright');
const {expect} = require('@playwright/test')

Given('user is on login page and do login with {string} and {string}', async function (username, password) {
    
    // this.browser = await chromium.launch({headless : false, slowMo : 500});
    // this.context = await this.browser.newContext();
    // this.page = await this.context.newPage();
    // console.log("LoginPageActivity Starts")
    // this.poManager = new POManager(this.page);
    const loginPage = this.poManager.getloginPage();
    await loginPage.navigate();
    await loginPage.doLogin(username,password);
    await loginPage.validateSuccessfulLogin();
    console.log("LoginPageActivity done")

  }
);

When('Add {string} to the Cart', async function (productName) {
    console.log("dashboard Activity Started")
    const dashboardPage = this.poManager.getdashboarPage();
    await dashboardPage.getAllProductsName();
    await dashboardPage.purchaseAnyProductAndAddToCart(productName);
    await dashboardPage.clickOnCartLink();
    await dashboardPage.verifyCartPageIsVisible(productName);
    console.log("dashboardActivity Done")
    
  }
);

Then('Verify {string} is added successfully into Cart',async function (productName) {
    console.log("Cart Page Activity Starts")
    const cartPage = this.poManager.getCartPage();
    await cartPage.cartCheckout();
    console.log("Cart PageActivity Done")
  }
);
When('Enter all the purchase details and select {string} and click on place order', async function (countryName) {
    console.log("billingInfoActivity Starts")
    const billingInfo = this.poManager.getBillingInfo();
    await billingInfo.enterCountryDetails(countryName);
    await billingInfo.clickOnPlaceOrderBtn();
    await billingInfo.verifyOrderSuccessfully();
    console.log("billing info Activity done")

  }
);

Then('Verify order is present inside order history page', async function () {
    console.log("orderHistoryPage initi")
    const orderHistory = this.poManager.getOrderHistoryPage();
    const orderID = await orderHistory.verifyOrders();
    await orderHistory.verifyOrdersFromOrderHistory(orderID);
    console.log("Order History page done");
    await this.browser.close();
  }
);



 Given('user to be on the loginpage and enter {string} and {string}',async function (username, password) {     
         await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
         await this.page.locator("#username").fill(username);
         await this.page.locator("#password").fill(password);
        await this.page.locator("#signInBtn").click();
         });


Then('Verify error message is displaying properly',async function () {
        console.log(await this.page.locator("[style*='block']").textContent());
        await expect(await this.page.locator("[style*='block']")).toContainText("Incorrect");

 });


