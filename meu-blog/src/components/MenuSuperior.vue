<template>
    <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo"><img src="https://i.ibb.co/WkYBCww/logo.png" alt=""></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="sass.html"><i class="fa fa-search"></i></a></li>
                <li><router-link to="/login">Sair</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'menu-superior'
}
</script>

<style scoped>
nav {
    background: #ddd;
    color: #349a46;
}

nav img {
    width: 90px;
    margin-top: 5px;
    margin-left: 15px;
}

nav ul li a {
    color: #349a46;
}
</style>