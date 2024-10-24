//app
import { createApp } from 'vue'
import App from './App.vue'
//styles
import './styles/css/main.css'
//pinia
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
