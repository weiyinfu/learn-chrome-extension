import {createApp} from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementPlus from 'element-plus';
import 'github-markdown-css/github-markdown.css'
import 'element-plus/lib/theme-chalk/index.css';
createApp(App)
    .use(router)
    .use(ElementPlus)
    .use(store)
    .mount('#app')
