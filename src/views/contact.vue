<template>
  <div class="about">
    <h1>This is an contact us page</h1>
    <ConatctFrom/>
  </div>
</template>
<script>
// @ is an alias to /src
import ConatctFrom from '@/components/contact/form.vue'

export default {
  name: 'Contact',
  components: {
    ConatctFrom
  }
}
</script>