
const { faker } = require('@faker-js/faker');

export default class UserData {
    constructor(){
        this.newUser = new NewUser(
            faker.internet.email(),
            faker.internet.password(),
            '1',
            faker.name.firstName(),
            faker.name.lastName(),
            faker.company.companyName(),
            faker.phone.phoneNumberFormat(),
            faker.company.companyName(),
            faker.address.streetAddress(),
            faker.address.city(),
            '5',
            90268,
             '15',
             '12',
             '27'
        );
    }
}

class NewUser {
    constructor(
        email,
        password,
        country,
        firstname,
        lastname,
        jobTitle,
        phone,
        company,
        address,
        city,
        state,
        postalCode,
        day,
        months,
        year
        ) {
            this.email = email;
            this.password = password;
            this.country = country;
            this.firstname = firstname;
            this.lastname = lastname;
            this.jobTitle = jobTitle;
            this.phone = phone;
            this.company = company;
            this.address = address;
            this.city = city;
            this.state = state;
            this.postalCode = postalCode;
            this.day = day;
            this.months = months;
            this.year = year;
    } 
        
    
}