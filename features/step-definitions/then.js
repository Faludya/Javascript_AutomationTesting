const {Then} = require('@wdio/cucumber-framework')
const LoginPage = require('../pageobjects/LoginPage.js')
const Assert = require('assert')

Then(/^I should verify users arrived on website$/, async () => {
    let url = await browser.getUrl()
    await Assert(url === 'https://www.saucedemo.com/inventory.html', 'Something went wrong')
})

Then(/^I should verify error message$/, async () => {
    let isErrorDisplayed = await LoginPage.errorText.isDisplayed()
    await Assert(true ===  isErrorDisplayed, 'Error message not displayed')

    let url = await browser.getUrl()
    await Assert(url === 'https://www.saucedemo.com/', 'Website assert failed')
})