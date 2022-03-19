import {BasePage} from './basePage';

export class MyAccountPage extends BasePage {

    getSignOutText(){
      return $(".logout")
    }
    
    getMyAccountPageHeading(){
        return $(".page-heading")
    }
}

