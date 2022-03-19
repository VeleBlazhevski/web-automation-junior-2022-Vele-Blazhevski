import {pages} from '../support/pages'
import {data} from '../support/data'

export class CreateAccTest {

    async fillInCredenitals(){
        await pages.createAccountPage.getRadioButton().click();
        await pages.createAccountPage.getInputFields('customer_firstname').setValue(await data.userData.newUser.firstname)
        await pages.createAccountPage.getInputFields('customer_lastname').setValue(await data.userData.newUser.lastname)
        await pages.createAccountPage.getInputFields('passwd').setValue(await data.userData.newUser.password)
        await pages.createAccountPage.getSelectFields('days',await data.userData.newUser.day)
        await pages.createAccountPage.getSelectFields('months',await data.userData.newUser.months)
        await pages.createAccountPage.getSelectFields('years',await data.userData.newUser.year)
        await pages.createAccountPage.getInputFields('company').setValue(await data.userData.newUser.company)
        await pages.createAccountPage.getInputFields('address1').setValue(await data.userData.newUser.address)
        await pages.createAccountPage.getInputFields('address2').setValue(await data.userData.newUser.address)
        await pages.createAccountPage.getInputFields('city').setValue(await data.userData.newUser.city)
        await pages.createAccountPage.getSelectFields('id_state',await data.userData.newUser.state)
        await pages.createAccountPage.getInputFields('postcode').setValue(await data.userData.newUser.postalCode)
        await pages.createAccountPage.getSelectFields('id_country',await data.userData.newUser.country)
        await pages.createAccountPage.getInputFields('phone_mobile').setValue(await data.userData.newUser.phone)
     
    }

    async pressRegisterButton(){
        await  pages.createAccountPage.getRegisterButton().click()
    }

}