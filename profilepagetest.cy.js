import Login from "../pageobjects/Login";
import Profilepage from "../pageobjects/profilepage";
describe("upload resume",()=>{
    const login=new Login();
    const res=new Profilepage();
    beforeEach("login for resume",()=>{
         login.enterUrl();  
    login.enterEmail("lenic96484@discounp.com");
    login.enterPassword("0/Plmnko9@");
    login.loginButton();
    login.recommendedAppear();
    })
    it("verify resume uploads sucessfully",()=>{
        res.Logoclick();
        res.navitemprofile();
        res.Resumepdf();
        res.confirmmsg();
    })
})