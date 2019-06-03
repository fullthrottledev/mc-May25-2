// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';


Vue.use(Vuex);
Vue.config.productionTip = false

import products from '@/products';
import Product from "@/app/model/product";

products.push(new Product({
  id: 3,
  title: 'New',
}));


const store = new Vuex.Store({
  state: {
    products
  },
  getters: {
    products: state => state.products,
  },
  mutations: {
    saveProduct(state, product) {
      state.products.filter(existing => existing.id === product.id).forEach(existing => {
        existing.title = product.title;
        existing.description = product.description;
        existing.amount = product.amount;
        existing.price = product.price;
      });
    }
  }
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
