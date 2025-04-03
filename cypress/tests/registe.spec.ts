import RegisterUser from '../tests/Pages/registeruser.js' 


const registUser = new RegisterUser();


describe('Registro de usuário', () => {
  it('cadastro concluido', () => {
   
    registUser.accessLoginPage()
    registUser.loginWithUser('admin', 'admin  ', 'admin ', 'admin123')  
  })


  it('Cadastra nao conclui por falta um campo', () => {
     
    registUser.accessLoginPage()
    registUser.loginWithPassawordNotConfirmad('John', 'Doe', 'username')  
    registUser.checkdados()
  })


})
