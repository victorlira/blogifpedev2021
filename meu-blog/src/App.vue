<template>
  <div>
    <menu-superior />

    <div class="page-content">
      <menu-lateral />

      <router-view />
    </div>
  </div>
</template>

<script>
import MenuLateral from './components/MenuLateral.vue'
import MenuSuperior from './components/MenuSuperior.vue'

export default {
  name: 'App',
  components: {
    MenuSuperior,
    MenuLateral
  }
}
</script>

<style>
.page-content {
    display: flex;
    width: 100vw;
}
</style>
