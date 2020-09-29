<template>
  <div class="home d-flex justify-content-center">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <div class="home text-center">
    <HelloWorld msg="Welcome to project"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
