import Login from "../pageobjects/Login";
import jobtracker from "../pageobjects/Jobtracker";
describe("add to job tracker",()=>{
  const login=new Login();
    const Jobtracker=new jobtracker();
beforeEach("login to application",()=>{
         login.enterUrl();  
    login.enterEmail("lenic96484@discounp.com");
    login.enterPassword("0/Plmnko9@");
    login.loginButton();
    login.dashboardAppear();
    })
it("adding job from job tracker",()=>{
Jobtracker.clickjobtrackernav();
Jobtracker.clickaddjob();
Jobtracker.EnterOpportunitytitle();
Jobtracker.EnterCompanyName();
Jobtracker.Enterlocation();
Jobtracker.EnterExpectedSalary();
//Jobtracker.EnterJobPosting();
//Jobtracker.clickgetjobdata();
Jobtracker.clicktoggleapplied();
Jobtracker.selectcurrentstatus();
Jobtracker.clickaddopportunitybutton();
Jobtracker.checkapplicationstatus();
    })
})