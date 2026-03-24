 class CartPage{
    constructor(page){
        this.page = page;
        this.page.getByRole('button', {name : 'Checkout'}); 
    }

    async cartCheckout(){
        await this.page.getByRole('button', {name : 'Checkout'}).click();
    }

    
}
module.exports={CartPage}