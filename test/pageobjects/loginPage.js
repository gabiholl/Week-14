class loginPage {
    
    get loginLogo() {
        return $("#root > div > div.login_logo");
    }

    get userNameInput() {
        return $("#user-name");
    }

    get passwordInput() {
        return $("#password");
    }

    get btnLogin() {
        return $("#login-button");
    }

    get errorMessage() {
        return $("#login_button_container > div > form > div.error-message-container");
    }

    async login (userName, password) {
        await this.userNameInput.setValue(userName);
        await this.passwordInput.setValue(password);
    }

    async btnLoginClick() {
        await this.btnLogin.click();
    }
}

export default new loginPage();
