<template>
    <div>
        <div v-if="null === product">
            Product loading ...
        </div>
        <ProductDetails :product="this.product" v-else/>
    </div>
</template>

<script>
  import products from '@/products';
  import ProductDetails from "@/views/components/ProductDetails";

  export default {
    name: "ProductDetailsView",
    components: {ProductDetails},
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
    mounted() {
      // Fetch product
      setTimeout(() => {
        this.product = products.filter(product => product.id == this.productId).pop();
      }, 1000);
    }
  }
</script>

<style scoped>

</style>