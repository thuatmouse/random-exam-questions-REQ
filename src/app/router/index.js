import Vue from 'vue'
import Router from 'vue-router'
import UploadFiles from '../components/UploadFiles.vue'

Vue.use(Router)
export const dataRouter = [{
    path: '/',
    name: 'UploadFiles',
    component: UploadFiles
}];
export default new Router({
    routes: dataRouter,
})