<template>
    <div class="sidebar">
        <div class="sidebar-title">
            <i class="fa fa-user"></i>
            <span>Victor Lira</span>
        </div>

        <span class="email-text">victor@gmail.com</span>

        <div class="separator"></div>

        <div class="sidebar-menu">
            <div class="sidebar-menu-item">
                <router-link to="/">
                    <i class="fa fa-home"></i>
                    <span>Início</span>
                </router-link>
            </div>

            <div class="sidebar-menu-item menu-active">
                <router-link to="/blogs">
                    <i class="fab fa-microblog"></i>
                    <span>Blogs</span>
                </router-link>
            </div>

            <div class="sidebar-menu-item">
                <router-link to="/">
                    <i class="far fa-newspaper"></i>
                    <span>Posts</span>
                </router-link>
            </div>

            <div class="sidebar-menu-item">
                <router-link to="/">
                    <i class="fas fa-chart-pie"></i>
                    <span>Relatórios</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'menu-lateral'
}
</script>

<style scoped>
.sidebar {
    width: 200px;
    height: calc(100vh - 64px);
    background-color: rgba(0, 0, 0, 0.03);
    box-shadow: none;
    border-right: 1px solid rgba(0, 0, 0, 0.14);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    padding: 20px;
    padding-top: 10px;
}

.sidebar-title {
    font-size: 18px;
    font-weight: bold;
    color: #349a46;
}

.sidebar-menu {
    padding-left: 10px;
    font-size: 16px;
    margin-top: 35px;
}

.sidebar-menu-item {
    cursor: pointer;
    margin-bottom: 10px;
}

.sidebar-menu-item a { 
    color: #555;
}

.sidebar-menu-item:hover {
    background: rgba(0, 0, 0, 0.08);
    padding: 2px;
    color: #555;
}

.menu-active {
    font-weight: bold;
    color: #349a46;
}

.menu-active span {
    border-bottom: 1px solid;
    padding-bottom: 4px;
}

.sidebar-menu-item i {
    margin-right: 5px;
}

.separator {
    width: 200px;
    height: 1px;
    background: #349a46;
    position: absolute;
    left: 0;
    margin-top: 12px;
}
</style>