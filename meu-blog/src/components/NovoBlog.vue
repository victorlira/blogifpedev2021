<template>
    <div>
        <menu-superior />

        <div class="page-content">
            <menu-lateral />

            <div class="content">
                <nav class="breadcrumb-menu">
                    <div class="nav-wrapper">
                        <div class="col s12">
                        <a href="#!" class="breadcrumb">Início</a>
                        <a href="#!" class="breadcrumb">Blogs</a>
                        <a href="#!" class="breadcrumb">Novo Blog</a>
                        </div>
                    </div>
                </nav>

                <div class="new-blog-content card">
                    <h4> <i class="fab fa-microblog"></i> Novo Blog</h4>

                    <div class="row">
                        <form class="col s12">
                            <div class="row">   
                                <div class="input-field col s12">
                                    <i class="material-icons prefix">subtitles</i>
                                    <input id="titulo" type="text" class="validate" v-model="titulo">
                                    <label for="titulo">Título</label>
                                </div>
                            </div>

                            <div class="row">   
                                <div class="input-field col s12">
                                    <i class="material-icons prefix">edit</i>
                                    <input id="descricao" type="text" class="validate" v-model="descricao">
                                    <label for="descricao">Descrição</label>
                                </div>
                            </div>

                            <div class="row">   
                                <div class="input-field col s12">
                                    <i class="material-icons prefix">subject</i>
                                    <input id="assunto" type="text" class="validate" v-model="assunto">
                                    <label for="assunto">Assunto</label>
                                </div>
                            </div>

                            <div class="row buttons-div">
                            <router-link to="/blogs" class="waves-effect waves-light btn red"><i class="material-icons right">close</i>CANCELAR</router-link>
                            <a v-on:click="cadastrarBlog" class="waves-effect waves-light btn green"><i class="material-icons right">check</i>CADASTRAR</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>

import MenuLateral from './MenuLateral.vue'
import MenuSuperior from './MenuSuperior.vue'

export default {
    name: 'novo-blog',
    components: {
        MenuSuperior,
        MenuLateral
    }
}
</script>

<style scoped>

.content {
    width: calc(100% - 200px);
    background: rgba(0,0,0,0.01);
}

.content h4 {
    color: #349a46;
    font-weight: 100;
}

.new-blog-content {
    width: 60%;
    margin-left: 20%;
    padding: 10px;
    margin-top: 50px;
    padding-left: 40px;
}

.row {
    margin-bottom: 0!important;
}

.buttons-div {
float: right;
margin-bottom: 20px!important;
}

.breadcrumb-menu {
    background: #349a46;
    padding-left: 20px;
}
</style>