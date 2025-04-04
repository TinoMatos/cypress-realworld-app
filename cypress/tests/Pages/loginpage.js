class LoginPage{


    selectorsList() {
        const selectors = {
            usernameField: "[type='text']",
            passwordField: "[type='password']",
            loginbutton: "[tabindex='0']",
            wrongCredentialsAlert : "[role='alert']",
            accessvalid: "[data-test='sidenav-username']",
        }
        return selectors
    }


    accessLoginPage(){
        cy.visit('http://localhost:3000')
    }


    loginWithUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password,{log:false})
        cy.get(this.selectorsList().loginbutton).click()
        cy.get(this.selectorsList().accessvalid).should('be.visible')
    }
   
    checkaAccessInvalid(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password,{log:false})
        cy.get(this.selectorsList().loginbutton).click()
        cy.get(this.selectorsList().wrongCredentialsAlert)
    }
}

export default LoginPage