
import Applyjob from "../pageobjects/Applyjob";
import Login from "../pageobjects/Login";
describe("Apply for a job",()=>{
    const login=new Login();
    const jobs=new Applyjob();
beforeEach("login for apply job",()=>{
         login.enterUrl();  
    login.enterEmail("lenic96484@discounp.com");
    login.enterPassword("0/Plmnko9@");
    login.loginButton();
   // login.clickpopup();
    login.dashboardAppear();
    })
    it("applying to job",()=>{
        jobs.Clickjobs();
       jobs.clickselectedjob();
        jobs.ClickapplyButton();
        jobs.clickappliedButton();
        jobs.Clickstatus();
    })
})