import {pages} from '../support/pages'
import { data } from '../support/data';

export class MyAccountTest {
   
    async validateIfUserIsLoggedIn(){
        await pages.myAccountPage.getSignOutText().waitForDisplayed({timeout: 6000})
      const getSignOut = await pages.myAccountPage.getSignOutText().getText();
        if(getSignOut.includes("Sign out") != true){
            throw "This user is not logged in"
        }
    }

    async validateMyAccPage(){
        const getMyAccHeading = await pages.myAccountPage.getMyAccountPageHeading().getText();
          if(getMyAccHeading.includes("MY ACCOUNT") != true){
              throw "This user is not at the correct page"
          }
      }
  

}