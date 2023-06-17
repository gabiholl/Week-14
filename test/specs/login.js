import loginPage from '../pageobjects/loginPage.js'

describe ("Login right user", ()=> {
    beforeAll("Open browser", ()=> {
        browser.setWindowSize (1366, 768);
        browser.url("https://www.saucedemo.com/");
    })
    
    it ("Verify login process"), async ()=>{
        await expect (loginPage.btnLogin).toExist();

        await expect (loginPage.userNameInput).toBeDisplayed();
        await loginPage.login("standard_user", "secret_sauce");
        await loginPage.btnLoginClick();
    }
    
    it ("Verify user is on inventory page"), async ()=>{
        browser.pause(1000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    }
    
})
