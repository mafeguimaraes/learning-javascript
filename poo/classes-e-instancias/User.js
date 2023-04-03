class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  login(emailLogin, passworLogin) {
    if (emailLogin == this.email && passworLogin == this.password) {
      console.log("Login efetuado com sucesso");
    } else {
      console.log("Erro ao efetuar o login");
    }
  }
}

const user1 = new User("Maria", "maria@gmail", "1234");

console.log(user1);

user1.login("maria@gmail", "1234");
