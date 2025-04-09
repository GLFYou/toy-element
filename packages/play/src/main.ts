import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ToyElement from 'toy-element2'
import 'toy-element2/dist/index.css'

createApp(App).use(ToyElement).mount('#app')
