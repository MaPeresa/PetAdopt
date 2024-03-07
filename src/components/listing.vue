<template>
  <div class="card mb-3" style="max-width: 1440px">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="@/assets/dog2.jpg" class="img-fluid rounded-start" alt="" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Family dog Rocky</h5>
          <p class="card-text">
            This is Rocky. He is 5 years old and looking for a new home. He has
            been chipped, regularly vaccinated and has not been spayed. Rocky is
            very friendly with kids and loves a lot of outdoor time.
          </p>
          <p class="card-text">
            <small class="text-body-secondary"
              >Rocky | 5 years old | male</small
            >
          </p>
          <p class="card-text">
            <small class="text-body-secondary">Location: Pula, Istra</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "listing",
  props: {
    msg: String,
  },
};
</script>
<style>
.listings-screen {
  background-color: #473a0b14;
  border: 1px solid;
  border-color: #473a0b;
  border-radius: 8px;
  height: auto;
  overflow: hidden;
  position: relative;
  width: 914px;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
