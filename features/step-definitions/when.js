const {When} = require('@wdio/cucumber-framework')
const LoginPage = require('../pageobjects/LoginPage.js')

When(/^I login with (.*) and (.*)$/, async (username, password) => {
    await browser.maximizeWindow()
    await LoginPage.login(username, password)
    //await browser.pause(5000)
})