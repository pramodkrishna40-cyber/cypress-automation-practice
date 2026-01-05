import Login from "../pageobjects/Login";
describe("login test",()=>{
const login=new Login();
beforeEach(()=>{
        login.enterUrl();
    })
it("login sucessfully",()=>{

    login.enterEmail("lenic96484@discounp.com");
    login.enterPassword("0/Plmnko9@");
    login.loginButton();
    //login.clickpopup();
    login.dashboardAppear();
})
})
