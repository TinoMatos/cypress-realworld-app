import  userData from '../fixtures/userData.json'
import  LoginPage  from '../tests/Pages/loginpage.js'

const  loginPage = new LoginPage()


describe('template spec', () => {


  it('login - failed', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkaAccessIvalid()
  })


  it('login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
  })


})