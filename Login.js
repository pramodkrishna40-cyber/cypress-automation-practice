
class Login{
loginUrl="/auth/login";
emailLogin="input[placeholder='Enter your email']";
passwordLogin="input[placeholder='Enter your password']";
buttonLogin="button[type='submit']";
//closepopup="path[d='M18 6 6 18']";
dashboard="a[class='text-sm font-medium transition-colors hover:text-primary flex items-center space-x-1 text-brand-orange'] span";

enterUrl(){
    cy.visit(this.loginUrl);
}
enterEmail(Email){
    cy.get(this.emailLogin).type(Email);
}
enterPassword(Password){
    cy.get(this.passwordLogin).type(Password);
}
loginButton(){
    cy.get(this.buttonLogin).click();
}
/*clickpopup(){
    cy.get(this.closepopup).click();
}*/
dashboardAppear(){
    cy.get(this.dashboard).should('be.visible').should("have.text","Dashboard");
}
}
export default Login;