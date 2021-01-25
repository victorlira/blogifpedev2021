import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import NovoUsuario from '../components/NovoUsuario.vue'
import NovoBlog from '../components/NovoBlog.vue'
import ListarBlogs from '../components/ListarBlogs.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '/cadastro', name: 'cadastro', component: NovoUsuario },
  { path: '/blogs', name: 'blogs', component: ListarBlogs },
  { path: '/novo-blog', name: 'novo-blog', component: NovoBlog },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
