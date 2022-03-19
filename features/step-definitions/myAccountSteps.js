
import {Given,When,Then} from '@wdio/cucumber-framework';
import {tests} from '../support/tests'

Then("User is logged in", async function(){
    await tests.myAccountTest.validateIfUserIsLoggedIn();
});


Then("User is in My account page", async function(){
    await tests.myAccountTest.validateMyAccPage()
});


