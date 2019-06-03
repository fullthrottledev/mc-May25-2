import Vue from 'vue'
import Router from 'vue-router'
import ProductsListView from '@/views/ProductsListView'
import ProductDetailsView from '@/views/ProductDetailsView'
import ProductEditView from '@/views/ProductEditView'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ProductsListView',
      component: ProductsListView
    },
    {
      path: '/',
      name: 'Default',
      component: ProductsListView
    },
    {
      path: '/products/:productId',
      props: true,
      name: 'ProductDetailsView',
      component: ProductDetailsView,
    },
    {
      path: '/products/:productId/view',
      props: true,
      name: 'ProductEditView',
      component: ProductEditView,
    },

  ],
  beforeEach() {

  },
})
