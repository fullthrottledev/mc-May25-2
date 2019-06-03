<template>
    <div>
        <h1>Products list</h1>

        <ProductListItem v-for="product in products" :product="product" :key="product.id"/>
    </div>
</template>

<script>
  import ProductListItem from "@/views/components/ProductListItem";
  import { mapGetters } from 'vuex';

  export default {
    name: "ProductsListView",
    components: {ProductListItem},
    computed: {
      ...mapGetters(['products']),
    },
    data() {
      return {}
    },
  }
</script>

