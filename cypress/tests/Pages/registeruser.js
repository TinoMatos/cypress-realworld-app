import { confirmResetPassword } from "aws-amplify/auth"


class RegisterUser{


   selectorsList() {
      const selectors = {
         firstName: "[name='firstName']",
         lastName: "[name='lastName']",
         userName: "[name='username']",
         passwordField: "[name='password']",
         confirmPassword: "[name='confirmPassword']",
         buttoncad: "[data-test='signup']",
         buttonSignUp: '[data-test="signup-submit"]',
         errorPasswordConfirm: '[id="confirmPassword-helper-text"]'
      }
      return selectors
   }
   
   accessLoginPage(){
      cy.visit('http://localhost:3000/signin')
      cy.get(this.selectorsList().buttoncad).click()

   }
   
   loginWithUser(firstName, lastName, userName, passwordField) {
     cy.get(this.selectorsList().firstName).type(firstName)
     cy.get(this.selectorsList().lastName).type(lastName)
     cy.get(this.selectorsList().userName).type(userName)
     cy.get(this.selectorsList().passwordField).type(passwordField)
     cy.get(this.selectorsList().confirmPassword).type(passwordField)
     cy.get(this.selectorsList().buttonSignUp).click()
   }


   loginWithPassawordNotConfirmad(firstName, lastName, userName) {
     cy.get(this.selectorsList().firstName).type(firstName)
     cy.get(this.selectorsList().lastName).type(lastName)
     cy.get(this.selectorsList().userName).type(userName)
   }


   checkdados(){
    cy.get(this.selectorsList().buttonSignUp).should('be.disabled')
   }
}


export default RegisterUser
