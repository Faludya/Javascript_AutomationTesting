const {Given} = require('@wdio/cucumber-framework')
const LoginPage = require('../pageobjects/LoginPage.js')

Given (/^I am on homepage$/, async () => {
    await LoginPage.visit();
})