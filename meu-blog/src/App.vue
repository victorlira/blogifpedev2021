<template>
  <div>
    <menu-superior />

    <div class="page-content">
      <menu-lateral />

      <listar-blogs />
    </div>
  </div>
</template>

<script>
import MenuLateral from './components/MenuLateral.vue'
import MenuSuperior from './components/MenuSuperior.vue'
import ListarBlogs from './components/ListarBlogs.vue'

export default {
  name: 'App',
  components: {
    MenuSuperior,
    MenuLateral,
    ListarBlogs
  }
}
</script>

<style>
.page-content {
    display: flex;
    width: 100vw;
}
</style>
