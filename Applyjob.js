import { timeout } from "rxjs";

class Applyjob{
    navjobs="body div nav a:nth-child(2)";
    //selectedjob="body > div > main > div > main > div > div.max-w-8xl.mx-auto.px-4.sm\:px-6.lg\:px-8.h-\[85vh\] > div.job-section-container.mt-6.flex.flex-col.lg\:flex-row.gap-6 > div.w-full.lg\:w-\[400px\].flex-shrink-0.border-b.lg\:border-b-0.lg\:border-r.pb-6.lg\:pb-0.lg\:pr-6.overflow-y-auto > div > div.flex-1.overflow-y-auto.no-scrollbar > div > div.rounded-lg.border.bg-card.text-card-foreground.shadow-sm.p-3.sm\:p-4.cursor-pointer.hover\:border-\[\#f95106\].transition-colors.border-\[\#f95106\] > div > div";
    selectedjob="div[class='rounded-lg border bg-card text-card-foreground shadow-sm p-3 sm:p-4 cursor-pointer hover:border-[#f95106] transition-colors border-[#f95106]']";
    applyButton="body > div:nth-child(14) > main:nth-child(2) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > button:nth-child(1)";
    appliedButton='[class="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-3 rounded-lg shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group"]';
    status="body > div:nth-child(14) > main:nth-child(2) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(5) > span:nth-child(1) > div:nth-child(1)";
    Clickjobs(){
        cy.get(this.navjobs).click();
//cy.wait(2000);
    }
   clickselectedjob(){
        cy.get(this.selectedjob,{timeout:10000}).click();
    }
    ClickapplyButton(){
        cy.get(this.applyButton).click();
    }
    clickappliedButton(){
    
            cy.get(this.appliedButton,{timeout:5000}).click();
    }
    Clickstatus(){
cy.get(this.status,{timeout:5000}).should("have.text","Applied");
    }
}
export default Applyjob;