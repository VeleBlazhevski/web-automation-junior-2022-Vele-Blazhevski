
import {Given,When} from '@wdio/cucumber-framework';
import {tests} from '../support/tests'

Given("User has opened the landing page", async function(){
    await tests.navigationTest.openProfilePage();
});

When("User presses the Sign In button", async function(){
    await tests.navigationTest.pressSignInButton();
});

When("User enters a new email address", async function(){
    await tests.navigationTest.fillInEmailFieldForm();
  
});

When("User presses Create account button", async function(){
    await tests.navigationTest.pressSubmitCreateAccButton();
  
});



