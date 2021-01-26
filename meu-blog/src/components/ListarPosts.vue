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
                            <a href="#!" class="breadcrumb">Posts</a>
                        </div>
                    </div>
                </nav>

                <div class="new-blog-content card">
                    <h4> <i class="far fa-newspaper"></i> Posts</h4>

                    <router-link to="/novo-post" class="button-add btn-floating waves-effect waves-light green"><i class="material-icons">add</i></router-link>

                    <div class="row">
                        <div class="card filtros-card">
                            <div class="row">
                                <div class="col s5">
                                    <label for="blog">Blog</label>
                                    <select name="blog" id="blog" class="browser-default" v-model="filtroBlog">
                                        <option value="">-</option>
                                        <option value="1">Geek-Blog Marvel</option>
                                        <option value="3">Digital Law</option>
                                        <option value="4">Filosofia 2015</option>
                                        <option value="5">História em dia</option>
                                    </select>
                                </div>
                                
                                <div class="input-field col s5">
                                    <input v-model="filtroTitulo" placeholder="Pesquisar pelo título..." id="titulo" type="text" class="validate">
                                    <label for="titulo">Titulo</label>
                                </div>

                                <div class="input-field col s2 botao-filtrar-div">
                                    <a v-on:click="buscar" class="waves-effect waves-light btn blue botao-filtrar"><i class="material-icons left">search</i>filtrar</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <table v-if="postsFiltrados.length > 0" class="striped">
                            <thead>
                                <tr>
                                    <th>Blog</th>
                                    <th>Título</th>
                                    <th>Conteúdo</th>
                                    <th class="edit-remove-column">Editar/Remover</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="post in postsFiltrados" v-bind:key="post">
                                    <td>{{ post.blogName }}</td>
                                    <td>{{ post.titulo }}</td>
                                    <td>{{ post.conteudo }}</td>
                                    <td class="edit-remove-column">
                                        <i class="fas fa-edit"></i>
                                        <i v-on:click="remover(post.id)" class="fas fa-trash"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div v-if="postsFiltrados.length == 0" class="alert alert-warning" role="alert">
                            <i class="far fa-frown"></i>Não há posts cadastrados para os filtros especificados.
                        </div>
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
    name: 'listar-blogs',
    components: {
        MenuSuperior,
        MenuLateral
    },
    data() {
        return {
            filtroBlog: '',
            filtroTitulo: '',
            posts: [
                { id: 1, blogId: 3, blogName: 'Digital Law', titulo: 'Direito Digital', conteudo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: 2, blogId: 3, blogName: 'Digital Law', titulo: 'Crimes Cibernéticos', conteudo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: 3, blogId: 3, blogName: 'Digital Law', titulo: '2020: O ano das audiências digitais', conteudo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: 4, blogId: 4, blogName: 'Filosofia 2015', titulo: 'Análise do Café Filosófico', conteudo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { id: 5, blogId: 4, blogName: 'Filosofia 2015', titulo: 'Disseminação da filosofia no YouTube', conteudo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
            ],
            postsFiltrados: []
        }
    },
    methods: {
        buscar() {
            if (this.filtroBlog) {
                this.postsFiltrados = this.posts.filter(post => post.blogId == this.filtroBlog);
            } else {
                this.postsFiltrados = this.posts;
            }
            
            this.postsFiltrados = this.postsFiltrados.filter(post => post.titulo.toLowerCase().includes(this.filtroTitulo.toLowerCase()))
        },
        remover(id) {
            this.posts = this.posts.filter(post => post.id != id);
            this.buscar();
        }
    }
}
</script>

<style scoped>
.content {
    width: calc(100% - 200px);
    background: rgba(0, 0, 0, 0.01);
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
    margin-bottom: 0 !important;
}

.buttons-div {
    float: right;
    margin-bottom: 20px !important;
}

.breadcrumb-menu {
    background: #349a46;
    padding-left: 20px;
}

.edit-remove-column {
    text-align: center;
    width: 15%;
}

.edit-remove-column i{
    cursor: pointer;
    font-size: 18px;
}

.edit-remove-column .fa-trash{ 
    color: red;
}

.edit-remove-column .fa-edit{ 
    color: dodgerblue;
}

.filtros-card {
    margin-top: 30px;
    padding: 10px;
    background: rgba(0,0,0,0.02);
    padding-bottom: 0;
}

.botao-filtrar {
    height: 45px;
    padding-top: 5px;
    width: 100%;
}

.button-add {
    position: absolute;
    right: 30px;
    top: 30px;
}

.filtros-card .row .input-field input {
    background: white;
    border: 1px solid #eee;
    margin-top: 10px;
    padding-left: 10px;
    border-radius: 5px;
}

.botao-filtrar-div {
    margin-top: 25px;
}

.email-text {
    font-size: 12px;
    color: #aaa;
    margin-left: 15px;
}

.alert {
    position: relative;
    padding: .75rem 1.25rem;
    border: 1px solid transparent;
    border-radius: .25rem;
    text-align: left;
    font-size: 16px;
}

.alert i {
    margin-right: 10px;
}

.alert-warning {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
}
</style>