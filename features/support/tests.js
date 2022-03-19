import {NavigationTest,} from '../testobjects/navigationTest';
import {CreateAccTest} from '../testobjects/createAccTest'
import { MyAccountTest } from '../testobjects/myAccountTest';
class Tests {
    constructor(){
        this.navigationTest = new NavigationTest();
        this.createAccTest = new CreateAccTest();
        this.myAccountTest = new MyAccountTest();
    }
}


export const tests = new Tests();