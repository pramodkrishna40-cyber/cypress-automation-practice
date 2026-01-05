import { timeout } from "rxjs";

class Roadmap{
    roadmapnav="nav>a:nth-child(4)";
    startroadmap='div[class="p-6 pt-0 text-center relative"]>div>div>button';
    tech='div[class="grid grid-cols-1 md:grid-cols-2 gap-6"]>button:nth-child(1)';
    techbutton='[class="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-2 rounded-lg shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group"]';
    TargetRole='div[class="p-6 pt-0 space-y-6"]>div[class="flex flex-wrap gap-3 justify-center"]>button:nth-child(1)';
    TargetRolebutton="body > div:nth-child(15) > main:nth-child(2) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > button:nth-child(2)";
    TargetCompany="body > div:nth-child(15) > main:nth-child(2) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)";
    TargetCompanybutton="body > div:nth-child(15) > main:nth-child(2) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > button:nth-child(2)";
    Generateroadmap="body > div:nth-child(15) > main:nth-child(2) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > button:nth-child(2)";
    roadmaplenght='[class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-brand-orange hover:bg-brand-orange/90 text-white"]';
    allroadmaps="button[class='whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent h-10 px-4 bg-gradient-to-r from-orange-500 to-red-500 hover:text-whte-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-2 rounded-lg shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group']";
    roadmapstatus='body>div[class="min-h-screen"]>div>ol>li>div>div>div';
    activeroadmaps='[class="font-semibold tracking-tight text-lg sm:text-xl"]';
    deleteroadmap='[class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-9 rounded-md px-3 text-muted-foreground hover:text-orange-500"]';
    deletebutton='[class="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-2 rounded-lg shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group"]';
    //Personalised Roadmap generated successfully.
    clickroadmapnav(){
        cy.get(this.roadmapnav).should('be.visible').click();
    }
    clickstartroadmap(){
        cy.get(this.startroadmap,{timeout:10000}).should('be.visible').click();
    }
    clicktech(){
        cy.get(this.tech,{timeout:10000}).click();
    }
    clicktechbutton(){
        cy.get(this.techbutton) .should('be.visible').and('not.be.disabled').click();
    }
    clickTargetRole(){
        cy.get(this.TargetRole,{timeout:10000}).should('be.visible').and('not.be.disabled').click();
    }
    clickTargetRolebutton(){
        cy.get(this.TargetRolebutton,{timeout:10000}).and('not.be.disabled').should('be.visible').click();
    }
    clickTargetCompany(){
        cy.get(this.TargetCompany).should('be.visible').click();
    }
    clickTargetCompanybutton(){
        cy.get(this.TargetCompanybutton).should('be.visible').click();
    }
    clickGenerateroadmap(){
        cy.get(this.Generateroadmap).should('be.visible').click();
    }
    clickroadmaplenght(){
        cy.get(this.roadmaplenght,{timeout:5000}).should('be.visible').click();
    }
    clickroadmapstatus(){
        cy.get(this.roadmapstatus,{timeout:10000}).should('be.visible').and("have.text","Personalised Roadmap generated successfully.");
    }
    clickallroadmaps(){
        cy.get(this.allroadmaps,{timeout:10000}).should('be.visible').click();
    }
    activeroadmapsstatus(){
        cy.get(this.activeroadmaps,{timeout:10000}).should('be.visible').and('have.text','Google - Software Engineer');
    }
    clickdeleteroadmap(){
        cy.get(this.deleteroadmap).should('be.visible').click();
    }
    clickdeletebutton(){
        cy.get(this.deletebutton,{timeout:10000}).should('be.visible').click();
    }
}
export default Roadmap;