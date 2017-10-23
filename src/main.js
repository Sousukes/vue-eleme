/*
 * @Author: saya.lizy
 * @Date: 2017-10-05 20:53:34
 * @Last Modified by: saya.lizy
 * @Last Modified time: 2017-10-11 19:58:47
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import routes from './router-config';
import VueResource from 'vue-resource';

import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app');

router.push('/goods');
