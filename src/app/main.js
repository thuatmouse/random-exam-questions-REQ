import Vue from 'vue';
import App from './App.vue';
import Routes from './router';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
    router: Routes
})