import { de, tr } from 'date-fns/locale'
import Transfer from '../tests/Pages/transfer.js'
import  userData from '../fixtures/userData.json'
import  LoginPage  from '../tests/Pages/loginpage.js'
import history from '../tests/Pages/history.js'

const transfer = new Transfer()
const  loginPage = new LoginPage()
const historyPage = new history()



describe('Exercicios Cypress', () => {
  
  it('Deve enviar dinheiro com sucesso e acessar historico', () => {
   
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    transfer.newTransfer() 
    historyPage.clickHistory() 
  
  })
})

describe('Exercicios Cypress', () => {
  
  it('Enviar dinheiro com saldo insuficiente', () => {
   
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    transfer.notTransfer()
   
  })
})

