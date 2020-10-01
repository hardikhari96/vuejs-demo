<template>
<div class="mt-2">
    <!-- Nav tabs -->
    <ul class="nav nav-tabs">
        <li class="nav-item">
            <a class="nav-link active" @click="formtgl=true" data-toggle="tab" href="#home">Account Related Information</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" @click="formtgl=false" data-toggle="tab" href="#menu1">Contact & other Information</a>
        </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content ">
        <div class="tab-pane  active mt-4" id="home">
                <one  />
        </div>
        <div class="tab-pane  fade mt-4" id="menu1">
            <two  />
        </div>
    </div>
</div>
</template>
<script>
import one from '@/components/account/one.vue'
import two from '@/components/account/two.vue'
export default {
    data(){
        return {
            formtgl: true,
        }
    },
    components: {
    one,
    two
  }
}
</script>
