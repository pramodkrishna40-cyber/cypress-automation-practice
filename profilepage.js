class Profilepage{
profileLogo="button[id='radix-:r6:']";
profileDropdown="div[role='group'] div:nth-child(1)";
resumeUpload='input[type="file"]';
notification="main div:nth-child(4) ol";
Logoclick(){
    cy.get(this.profileLogo).click({force: true});
}
navitemprofile(){
    cy.get(this.profileDropdown).click({force: true});
}
Resumepdf(){
    cy.get(this.resumeUpload).selectFile('cypress/fixtures/Pramod_Krishna_QA_Resume.pdf',{ force: true });
}
confirmmsg(){
    cy.get(this.notification,{ timeout: 30000}).should("have.text","Resume uploaded successfully.");
}
}
export default Profilepage;