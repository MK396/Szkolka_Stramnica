import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

const app = createApp(App)
app.use(router)

router.isReady().then(() => {
  // Po odświeżeniu: bez hash w adresie, scroll na początek
  const current = router.currentRoute.value
  if (current.hash) {
    router.replace({ path: current.path, query: current.query, hash: '' })
  }
  window.scrollTo(0, 0)
})

app.mount('#app')
