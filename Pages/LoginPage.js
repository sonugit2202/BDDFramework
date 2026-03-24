const{expect } = require('@playwright/test')

class LoginPage{
    constructor(page){
        this.page = page;
        this.username = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.signInBtn  =  page.getByRole("button", {name: 'Login'});
        this.dashboardValidation = page.getByRole('listitem').filter({hasText : 'HOME'});
        
    }


    async navigate(){
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }
    async doLogin(username, password){
            
            await this.username.fill(username);
            await this.password.fill(password);
            await this.signInBtn.click();

    }

    async validateSuccessfulLogin(){
        await expect(this.dashboardValidation).toBeVisible();
    }
}

module.exports ={LoginPage};