<template>
    <div>
        <h1>{{ product.title }}</h1>
        <span>Price: ${{ product.price }}</span>
        <p>{{ product.description }}</p>
        <small>{{ product.amount }}</small>
        <router-link :to="{name: 'ProductEditView', params: {productId: this.product.id}}">Edit</router-link>
    </div>
</template>

<script>
  import Product from "@/app/model/product";

  export default {
    name: "ProductDetails",
    props: {
      product: {
        type: Product,
        required: true,
      }
    },
  }
</script>

<style scoped>

</style>