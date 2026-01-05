import { timeout } from "rxjs";

class jobtracker{
    jobtrackernav="nav>a:nth-child(3)";
    addjob="button[class='justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 text-brand-orange inline-flex items-center mx-1 bg-transparent hover:text-black dark:hover:text-white hover:bg-transparent p-0']";
    Opportunitytitle="#job_title";
    CompanyName="#company_name";
    Location="#location";
    ExpectedSalary="#salary";
    //JobPosting="#job_url";
    //getjobdata="body > div:nth-child(18) > form:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > button:nth-child(2)";
    toggleapplied="#is_applied";
    currentstatus="button[role='combobox']";
    appliedstatus='[class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"]:nth-child(5)';
   // addopportunitybutton="button[type='submit']";
    applicationstatus='div[class="ml-auto flex items-center gap-1"]:nth-child(2)>span>div>ol>li>div:nth-child(2)>div>[class="text-sm opacity-90"]';
    clickjobtrackernav(){
        cy.get(this.jobtrackernav).click();
    }
    clickaddjob(){
        cy.get(this.addjob).click();
    }
    EnterOpportunitytitle(){
        cy.get(this.Opportunitytitle).type("Software Engineering Intern");
    }
    EnterCompanyName(){
        cy.get(this.CompanyName).type("Datadog");
    }
    Enterlocation(){
        cy.get(this.Location).type("New York");
    }
    EnterExpectedSalary(){
        cy.get(this.ExpectedSalary).type("80000");
    }
/*EnterJobPosting(){
    cy.get(this.JobPosting)
      .clear()
      .type('https://db.wd3.myworkdayjobs.com/en-US/DBWebsite/job/London-45-Gresham-Street/Analyst---Investment-Banking---Building--Property-and-Real-Estate--BPRE---DBNumis-_R0402634/apply/applyManually?Coun=');
}*/
/*clickgetjobdata(){
    cy.contains('button', 'Get Job Data', { timeout: 10000 })
  .should('be.visible')
  .and('not.be.disabled')
  .click();
}*/
clicktoggleapplied(){
    cy.get(this.toggleapplied).click();
}
selectcurrentstatus(){
    cy.get(this.currentstatus).click();
    cy.get(this.appliedstatus).click();
    
}
clickaddopportunitybutton(){
   // cy.get(this.addopportunitybutton).click();
   cy.contains("button","Add Opportunity",{timeout:10000}).should('be.visible').and('not.be.disabled').click();
}
checkapplicationstatus(){
    cy.get(this.applicationstatus,{timeout:10000}).should("contain.text","Job added successfully!");
}
}
export default jobtracker
