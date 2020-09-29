<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Vue App</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link> 
      </li>
      <li class="nav-item">
       <router-link class="nav-link" to="/about">About</router-link> 
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/contact">Contact</router-link> 
      </li>
      <li class="nav-item">
          <router-link class="nav-link" to="/account">Account</router-link>
      </li>
    </ul>
    <span>{{search}}</span>
  </div>
   <form class="form-inline">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">@</span>
      </div>
      <input type="text" class="form-control" placeholder="search" v-model="search" aria-label="Username" aria-describedby="basic-addon1">
    </div>
  </form>
</nav>
</template>
<script>
export default {
  data(){
    return {
      search:''
    }
  }
}
</script>
<style scoped>
.router-link-active{
      font-weight: 400;
      color: rgba(0,0,0,.9)!important;
}
</style>
 