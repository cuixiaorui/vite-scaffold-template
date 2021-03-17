import { createApp } from 'vue'
import { router } from './router'
import { store } from './store'
import App from './App.vue'

// init mock api
import { worker } from './mocks/browser'
worker.start()

createApp(App).use(router).use(store).mount('#app')
