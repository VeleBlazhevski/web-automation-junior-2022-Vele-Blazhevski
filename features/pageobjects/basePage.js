export class BasePage {
    
    getSignInButton(){
        return $('.login')
    }

    getHeader(){
       return $('#header_logo')
    }

    getEmailInputField(){
        return $('#email_create')
    }

    getSubmitCreateAccButton(){
        return $('#SubmitCreate')
    }
   
    getCreateForm(){
        return $('#account-creation_form')
    }

}