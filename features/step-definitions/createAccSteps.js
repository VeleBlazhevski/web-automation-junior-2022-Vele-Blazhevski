
import {Given,When,Then} from '@wdio/cucumber-framework';
import {tests} from '../support/tests'

When("User fills in mandatory user details", async function(){
    await tests.createAccTest.fillInCredenitals();
});


When("User presses the Register button", async function(){
    await tests.createAccTest.pressRegisterButton()
});


