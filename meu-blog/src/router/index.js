import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import NovoUsuario from '../components/NovoUsuario.vue'
import NovoBlog from '../components/NovoBlog.vue'
import ListarBlogs from '../components/ListarBlogs.vue'
import NovoPost from '../components/NovoPost.vue'
import ListarPosts from '../components/ListarPosts.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '/cadastro', name: 'cadastro', component: NovoUsuario },
  { path: '/blogs', name: 'blogs', component: ListarBlogs },
  { path: '/novo-blog', name: 'novo-blog', component: NovoBlog },
  { path: '/novo-post', name: 'novo-post', component: NovoPost },
  { path: '/posts', name: 'posts', component: ListarPosts },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
