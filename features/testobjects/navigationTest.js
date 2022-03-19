import {pages} from '../support/pages'
import { data } from '../support/data';

export class NavigationTest {
    async openProfilePage(){
        await browser.url('/')
        await pages.basePage.getSignInButton().waitForDisplayed({timeout: 10000})
        
    }

    async pressSignInButton(){
         await pages.basePage.getSignInButton().click();     
         await pages.basePage.getHeader().waitForDisplayed({timeout: 10000})
    }

    async fillInEmailFieldForm(){
        await pages.basePage.getEmailInputField().setValue(await data.userData.newUser.email)
      
    }

    async pressSubmitCreateAccButton(){
        await pages.basePage.getSubmitCreateAccButton().click();
        await pages.basePage.getCreateForm().waitForDisplayed({timeout: 10000})
    }

}