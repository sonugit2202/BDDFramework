
const {POManager} = require('../../Pages/POManager');
const {chromium} = require('playwright');
const {Before, After, BeforeStep, AfterStep, Status} = require('@cucumber/cucumber');
const path = require('node:path');

Before(async function(){
    this.browser = await chromium.launch({headless : false, slowMo : 500});
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    console.log("LoginPageActivity Starts")
    this.poManager = new POManager(this.page);
})


BeforeStep(async function(){


})

AfterStep(async function({result}){

    if(result.status === Status.FAILED){
        await this.page.screenshot({path :'ScreenshotOfFailed1.png'});
    }

})


After(async function(){

    console.log("I am last one to execute")




})