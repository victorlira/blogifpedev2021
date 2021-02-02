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
                        </div>
                    </div>
                </nav>

                <div class="dashboard-content">
                    <h4> <i class="fas fa-chart-line"></i> Resumo</h4>

                    <div class="row">
                        <div class="col l3">
                            <div class="card dashboard-item item1">
                                <i class="fab fa-microblog"></i>
                                <p>12 <span>Blogs cadastrados</span></p>
                            </div>
                        </div>
                        <div class="col l3">
                            <div class="card dashboard-item item2">
                                <i class="far fa-newspaper"></i>
                                <p>449 <span>Posts</span></p>
                            </div>
                        </div>
                        <div class="col l3">
                            <div class="card dashboard-item item3">
                                <i class="far fa-comments"></i>
                                <p>1.239 <span>Comentários</span></p>
                            </div>
                        </div>
                        <div class="col l3">
                            <div class="card dashboard-item item4">
                                <i class="far fa-eye"></i>
                                <p>14.746 <span>Visualizações</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col l12">
                            <p style="color: #777;"><i class="fas fa-history" style="margin-right: 5px;"></i>Linha do tempo</p>
                        </div>
                        <div class="col l12">
                            <ul class="collection">
                                <li class="collection-item avatar">
                                    <i class="material-icons circle green"><i class="fab fa-microblog"></i></i>
                                    <span class="title"><b>Novo blog cadastrado</b></span>
                                    <p>Digital Law <br>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </li>

                                <li class="collection-item avatar">
                                    <i class="material-icons circle green"><i class="far fa-newspaper"></i></i>
                                    <span class="title"><b>Nova postagem</b></span>
                                    <p>Filosofia em dia: O efeito da pandemia no pensamento kafkiano <br>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                                    </p>
                                </li>

                                <li class="collection-item avatar">
                                    <i class="material-icons circle red"><i class="fa fa-times"></i></i>
                                    <span class="title"><b>Blog removido</b></span>
                                    <p>História da computação <br>
                                        Removido em 31/01/2020
                                    </p>
                                </li>

                                <li class="collection-item avatar">
                                    <i class="material-icons circle blue"><i class="far fa-user"></i></i>
                                    <span class="title"><b>Usuário cadastrado</b></span>
                                    <p>Fulano de tal <br>
                                        Cadastrado em 01/02/2021
                                    </p>
                                </li>

                                <li class="collection-item avatar">
                                    <i class="material-icons circle green"><i class="far fa-newspaper"></i></i>
                                    <span class="title"><b>Nova postagem</b></span>
                                    <p>Digital Law: Moedas digitais e a alta do dólar <br>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div class="col l12 button-div">
                            <a class="waves-effect waves-light btn blue">carregar mais...</a>
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
    name: 'home',
    components: {
        MenuSuperior,
        MenuLateral
    }
}
</script>

<style scoped>

.button-div {
    text-align: center;
}

.dashboard-item {
    display: flex;
    color: white;
    font-size: 24px;
    padding: 10px;
}

.dashboard-item p {
    margin: 0;
    display: grid;
    font-size: 32px;
    font-weight: bold;
}

.dashboard-item p span {
    font-size: 18px;
    font-weight: 100;
}

.item1 {
    background: #4fbc95;
}

.item2 {
    background: #8c5da1;
}

.item3 {
    background: #f7736a;
}

.item4 {
    background: #348bbb;
}

.dashboard-item i {
    font-size: 70px;
    color: rgba(0,0,0,0.3);
    border-right: 1px solid rgba(0,0,0,0.3);
    padding-right: 10px;
    margin-right: 10px;
}

.content {
    width: calc(100% - 200px);
    background: rgba(0,0,0,0.01);
}

.content h4 {
    color: #349a46;
    font-weight: 100;
}

.dashboard-content {
    width: 90%;
    margin-left: 5%;
    padding: 10px;
    margin-top: 20px;
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