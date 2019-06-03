<template>
    <div>
        <ProductEdit :product="product" v-if="product" @product-changed="onSave($event)"/>
    </div>
</template>

<script>
  import products from '@/products';
  import ProductEdit from "@/views/components/ProductEdit";
  import { mapMutations } from 'vuex';

  export default {
    name: "ProductEditView",
    components: {ProductEdit},
    props: {
      productId: {
        type: [String, Number],
        required: true,
      },
    },
    data() {
      return {
        product: null,
      };
    },
    methods: {
      ...mapMutations(['saveProduct']),
      onSave(product) {
        this.saveProduct(product);
      }
    },
    mounted() {
      this.product = products.filter(product => product.id == this.productId).pop();
    }
  }
</script>

<style scoped>

</style>