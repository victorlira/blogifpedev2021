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

                <div class="new-blog-content card">
                    <h4> <i class="fab fa-chart"></i> Resumo</h4>

                    <div class="row">
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