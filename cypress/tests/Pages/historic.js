class history {

    selectorsList() {
        const selectors = {
            home:"[data-test='sidenav-home']",
            historyButon:"[data-test='nav-personal-tab']",
            listtrasnfer:"[role='rowgroup']",
           
        }
        return selectors;
    }

    clickHistory() {
        cy.get(this.selectorsList().home).click()
        cy.get(this.selectorsList().historyButon).click()
        cy.get(this.selectorsList().listtrasnfer).should('exist')
        
    }
 
}

export default history