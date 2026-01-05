import Login from "../pageobjects/Login";
import Roadmap from "../pageobjects/roadmap";
describe("creating company roadmap",()=>{
    const login=new Login();
    const roadmap=new Roadmap();
    beforeEach("login to app",()=>{
       login.enterUrl();  
    login.enterEmail("lenic96484@discounp.com");
    login.enterPassword("0/Plmnko9@");
    login.loginButton();
    login.dashboardAppear();
    })
    it("create roadmap",()=>{
        roadmap.clickroadmapnav();
        roadmap.clickstartroadmap();
        roadmap.clicktech();
        roadmap.clicktechbutton();
        roadmap.clickTargetRole();
        roadmap.clickTargetRolebutton();
        roadmap.clickTargetCompany();
        roadmap.clickTargetCompanybutton();
        roadmap.clickGenerateroadmap();
        roadmap.clickroadmaplenght();
        roadmap.clickroadmapstatus();
        roadmap.clickallroadmaps();
        roadmap.activeroadmapsstatus();
        roadmap.clickdeleteroadmap();
        roadmap.clickdeletebutton();
    })
})