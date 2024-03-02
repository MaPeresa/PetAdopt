<template>
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
  </div>
  <div class="card-body p-0">
    <h5 class="card-title">Special title treatment</h5>
    <img class="card-img-top" src="@/assets/dog2.jpg" />
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</template>

<script>
export default {
  name: 'listing',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

