<template>
      
<div class="container-fluid">
    <button @click="formtgl=!formtgl" class="btn btn-success" >Toggle</button>
</div>
    <one v-if="formtgl === false"/>
    <two v-else/>

</template>
<script>
import one from '@/components/account/one.vue'
import two from '@/components/account/two.vue'
export default {
    data(){
        return {
            formtgl: false,
        }
    },
    components: {
    one,
    two
  }
}
</script>