class LoginPage{


    selectorsList() {
        const selectors = {
            usernameField: "[type='text']",
            passwordField: "[type='password']",
            loginbutton: "[tabindex='0']",
            wrongCredentialsAlert : "[role='alert']",
        }
        return selectors
    }


    accessLoginPage(){
        cy.visit('http://localhost:3000')
    }


    loginWithUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginbutton).click()
    }
   
    checkaAccessIvalid(){
        cy.get(this.selectorsList().wrongCredentialsAlert)
    }
}


export default LoginPage