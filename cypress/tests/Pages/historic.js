class history {

    selectorsList() {
        const selectors = {
            home:"[data-test='sidenav-home']",
            historyButon:"[data-test='nav-personal-tab']"
           
        }
        return selectors;
    }

    clickHistory() {
        cy.get(this.selectorsList().home).click();
        cy.get(this.selectorsList().historyButon).click();
    }
 
}

export default history