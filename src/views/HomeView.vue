<template>
 <div class="row">
 <div class="col-1"></div>
 <div class="col-2">
 </div>
 <div class="col-8">
  <hello-world />
    <div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Adopted</a>
      </li>
      
    </ul>
  </div>
  <div class="card-body p-0">
    <h5 class="card-title">Special title treatment</h5>
    <img class="card-img-top" src="@/assets/dog2.jpg" />
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  
</div>
 </div>
 </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/listing.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
