<template>
  <div id="app">
    <Index></Index>
  </div>
</template>

<script>
import Index from './components/Index.vue'

export default {
  name: 'app',
  components: {
      Index
  }
}
</script>

<style>
  body{
    width: 100%;
    height: 1000px;
  }

  #app{
    width: 100%;
    height: 100%;
  }
</style>
