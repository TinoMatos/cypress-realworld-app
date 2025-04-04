import  LoginPage  from '../tests/Pages/loginpage.js'
import history from '../tests/Pages/historic.js'
import user from '../../data/database.json'

const  loginPage = new LoginPage()
const historyPage = new history()


describe('Exercicios Cypress', () => {
  
  it('Deve enviar dinheiro com sucesso e acessar historico', () => {
   
    loginPage.accessLoginPage()
    loginPage.loginWithUser(user.users[0].username, "s3cret")
    historyPage.clickHistory() 
  
  })
})