class Signup{
    //selectors are stored in a variable
    signUpUrl="/auth/signup";
    firstName="input[placeholder='First Name']";
    lastName="input[placeholder='Last Name']";
    emailAddress="input[placeholder='Email address']";
    password="input[placeholder='Password']";
    checkBox="#agree";
    signupButton="button[type='submit']";
    //methods created for all the fields inculding url
entersignUpUrl(){
cy.visit(this.signUpUrl);
}
enterFirstName(firstname){
cy.get(this.firstName).type(firstname);
}
enterLastName(lastname){
    cy.get(this.lastName).type(lastname);
}
enterEmailAddress(email){
    cy.get(this.emailAddress).type(email);
}
enterPassword(password){
cy.get(this.password).type(password);
}
clickCheckBox(){
    cy.get(this.checkBox).click();
}
clickSignupButton(){
    cy.get(this.signupButton).click();
}
}
export default Signup;