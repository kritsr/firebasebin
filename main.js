import {createApp} from 'https://cdn.jsdelivr.net/npm/vue@3.2.20/dist/vue.esm-browser.js'
// import {createApp} from 'https://cdn.jsdelivr.net/npm/vue@3.2.20/dist/vue.esm-browser.prod.js'

const app = createApp({
    data() {
        return {message: 'Hello Vue!!'}
    }
}).mount('#app');
