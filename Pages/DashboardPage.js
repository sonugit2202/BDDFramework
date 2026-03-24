const{expect } = require('@playwright/test')
class DashboardPage {
    constructor(page) {
        this.page = page;
        this.products = page.locator(".card-body");
        this.ProductNames = this.products.locator('b');

        // this.AddToCartBtn = products.nth(i).getByRole('button', {name :'Add To Cart'})

    }

    async getAllProductsName() {
        await this.ProductNames.first().waitFor();
        const allProductName = await this.ProductNames.allTextContents();
        console.log("All Product Name == " + allProductName);
        return allProductName;
    }

    async purchaseAnyProductAndAddToCart(productName) {
        const count = await this.products.count();
        for (let i = 0; i < count; i++) {
            const selectedProductName = await this.products.nth(i).locator('b').textContent();
            if ( productName  === selectedProductName.trim()) {
                await this.products.nth(i).getByRole('button', { name: 'Add To Cart' }).click();
                break;
            }
        }
    }
    async clickOnCartLink() {
        await this.page.getByRole('listitem').filter({ hasText: 'Cart' }).click();
    }

    async verifyCartPageIsVisible(productName) {

        await expect(this.page.locator(".cartSection h3").filter({ hasText: productName })).toBeVisible();
    }
}

module.exports = {DashboardPage};