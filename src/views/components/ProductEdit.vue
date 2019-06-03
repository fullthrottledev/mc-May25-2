<template>
    <form @submit.prevent="doSubmit">
        <input type="text" v-model="product.title"/>
        <input type="text" v-model="product.description"/>
        <input type="text" v-model="product.price"/>
        <input type="text" v-model="product.amount"/>

        <button>Submit</button>
    </form>
</template>

<script>
  import Product from "@/app/model/product";

  export default {
    name: "ProductEdit",
    props: {
      product: {
        type: Product,
        required: true,
      }
    },
    methods: {
      doSubmit() {
        this.$emit('product-changed', this.product);
      },
    },
  }
</script>

<style scoped>

</style>