import { createApp } from 'vue';
import router from './routes';
import App from './App.vue';
import './css/styles.css';
import i18n from './i18n';


createApp(App).use(i18n).use(router).mount('#app')
