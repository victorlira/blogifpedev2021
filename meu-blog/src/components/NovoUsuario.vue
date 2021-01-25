<template>
    <div class="login-form card">
        
        <div class="img-container">
            <img src="https://i.ibb.co/WkYBCww/logo.png" alt="">
        </div>

        <p class="blog-title">Criar nova conta</p>

        <div class="row">
            <form class="col s12">
              <div class="row no-margin-bottom">
                <div class="input-field col s12">
                    <input id="nome" type="text" class="validate" v-model="nome">
                    <label for="nome">Nome</label>
                </div>
              </div>

              <div class="row no-margin-bottom">
                <div class="input-field col s12">
                  <input id="email" type="email" class="validate" v-model="email">
                  <label for="email">E-mail</label>
                </div>
              </div>
              <div class="row no-margin-bottom">
                <div class="input-field col s12">
                  <input id="password" type="password" class="validate" v-model="senha">
                  <label for="password">Senha</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="confirmar-senha" type="password" class="validate" v-model="confirmacaoSenha">
                  <label for="confirmar-senha">Confirmação de senha</label>
                  <span v-if="senha != confirmacaoSenha" class="erro-senha"><i class="fa fa-times"></i>As senhas digitadas não conferem</span>
                </div>
              </div>
              <div class="row">
                <a :disabled="senha != confirmacaoSenha" v-on:click="cadastrar" class="waves-effect waves-light btn btn-large green botao-login">CADASTRAR</a>
              </div>
              <div class="row">
                  <a v-on:click="irParaLogin" class="waves-effect waves-light btn btn-large botao-login botao-novo-usuario">JÁ POSSUO UMA CONTA</a>
              </div>
            </form>
          </div>
    </div>
</template>

<script>
export default {
  name: 'novo-usuario',
  methods: {
    irParaLogin() {
      this.$router.push({ name: 'login' });
    }
  }
};
</script>

<style scoped>
body {
  background: rgba(0, 0, 0, 0.03);
}

.login-form {
  width: 30vw;
  margin-left: 35vw;
  margin-top: 10vh;
  padding: 40px;
}

.img-container {
  width: 150px;
  margin-left: 160px;
}

.img-container img {
  width: 150px;
}

.botao-login {
  width: 100%;
}

.blog-title {
  text-align: left;
  color: #666;
  font-size: 16px;
  font-weight: bold;
  margin-top: 32px;
}

.esqueceu-a-senha {
  color: #1a0dab;
  cursor: pointer;
  margin-bottom: 0;
}

.no-margin-bottom,
.no-margin-bottom .input-field {
  margin-bottom: 0 !important;
}

.alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  text-align: left;
}

.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

.botao-novo-usuario {
  background: white;
  color: #4caf50 !important;
  border: 1px solid #4caf50 !important;
  font-weight: bold;
}

.botao-novo-usuario:hover {
  background: #4caf50 !important;
  color: white !important;
}

.erro-senha {
  width: 100%;
  text-align: left;
  color: red;
  font-size: 13px;
}

.erro-senha i {
  margin-right: 5px;
}
</style>