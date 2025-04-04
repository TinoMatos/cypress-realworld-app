import userData from '../fixtures/userData.json'
import LoginPage from '../tests/Pages/loginpage.js'
import user from '../../data/database.json'

const loginPage = new LoginPage()

describe('template spec', () => {

  it('login - Failed', () => {
    loginPage.accessLoginPage()
    loginPage.checkaAccessInvalid(userData.userFail.username, userData.userFail.password)
 
  })

  it('login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(user.users[0].username, "s3cret")
  })

})