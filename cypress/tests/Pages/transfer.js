class Transfer {

    selectorsList() {
        const selectors = {
            newTransfer: ".MuiButton-colorInherit", 
            createTransfer: "#user-list-search-input", 
            contact: ".css-1p823my-MuiListItem-root", 
            valor: "#amount",
            note: "#transaction-create-description-input", 
            buttonPay: "[data-test='transaction-create-submit-payment']", 
            saldo: "[data-test='sidenav-user-balance']" ,
            error: ".Mui-required"
        }
        return selectors;
    }

    newTransfer() {
 
        cy.get(this.selectorsList().newTransfer).click()
        cy.get(this.selectorsList().createTransfer).type('teste')
        cy.get(this.selectorsList().contact).eq(1).click()

        cy.get(this.selectorsList().saldo).invoke('text').then((saldoText) => {
            const saldo_t = parseFloat(saldoText.replace(/[^\d.-]/g, ''))

            const valor_t = 2000

            if (valor_t <= saldo_t) {
                cy.get(this.selectorsList().valor).type(valor_t)
                cy.get(this.selectorsList().note).type('Saldo suficiente')
                cy.get(this.selectorsList().buttonPay).click()

            } else {
                cy.get(this.selectorsList().valor).type(valor_t)
                cy.get(this.selectorsList().note).type('Saldo insuficiente')
               
            }
        })
    }
    notTransfer() {
        
        cy.get(this.selectorsList().newTransfer).click()
        cy.get(this.selectorsList().createTransfer).type('teste')
        cy.get(this.selectorsList().contact).eq(1).click()
        cy.get(this.selectorsList().note).type('Saldo insuficiente')
        cy.get(this.selectorsList().error).should('be.visible')
        .and('contain', 'Please enter a valid amount')
    }
        
}


export default Transfer
