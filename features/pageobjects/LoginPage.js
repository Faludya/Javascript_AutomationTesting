const AbstractPage = require('./AbstractPage')
const Assert = require('assert')

class LoginPage extends AbstractPage {
    get inputUsername() {
        return $('#user-name')
    }

    get inputPassword() {
        return $('#password')
    }

    get btnLogin() {
        return $('#login-button')
    }

    get errorText() {
        return $('.error-message-container')
    }

    async login(username, password){
        await this.inputUsername.setValue(username)
        await  this.inputPassword.setValue(password)
        await this.btnLogin.click()
    }

    async visit(){
        await browser.url('https://www.saucedemo.com/')
    }
}

module.exports = new LoginPage();