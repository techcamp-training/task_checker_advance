import { createApp } from 'vue'
import App from './App.vue'
import { Modal } from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css'
import './assets/main.css'

const app = createApp(App)
app.component('Modal', Modal);
app.mount('#app')
// createApp(App).mount('#app') この記述を削除
