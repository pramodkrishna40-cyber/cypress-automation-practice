import Signup from "../pageobjects/Signup";
describe("signup test",()=>{
const signup=new Signup();//creating object
beforeEach(()=>{
    signup.entersignUpUrl();
})
    //call methods
it("should signup sucessfully",()=>{
        signup.enterFirstName("std");
        signup.enterLastName("demo");
        signup.enterEmailAddress("pramodkrishna124@gmail.com");
        signup.enterPassword("Good@123");
        signup.clickCheckBox();
        signup.clickSignupButton();
})
})