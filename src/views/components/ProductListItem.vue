<template>
    <div class="product-item">
        <h4>#{{ product.id}} {{ product.title }}</h4>
        <span>Price: ${{ product.price }}</span>
        <router-link :to="{name: 'ProductDetailsView', params: {productId: product.id}}">Details</router-link>
    </div>
</template>
<script>
  export default {
    name: 'ProductListItem',
    props: {
      product: {}
    }
  }
</script>

<style scoped>
    .product-item {
        border: 1px solid grey;
        border-radius: 5px;
        padding: 10px;
    }
</style>
