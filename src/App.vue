<template>
  <div id="app">
    <router-link :to="{name: 'Default'}" tag="h1">Logo</router-link>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
