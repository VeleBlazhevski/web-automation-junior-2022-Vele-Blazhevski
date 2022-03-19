import {BasePage} from './basePage';

export class CreateAccountPage extends BasePage {
    getRadioButton(){
        return $('#uniform-id_gender1')
    }

    getInputFields(name) {
        return $(`#${name}`)
    }
    
    getSelectFields(name,value) {
        return $(`select[name=${name}]`).selectByIndex(value)
    }

    getRegisterButton(){
        return $('#submitAccount')
    }
  
}

