<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="col-md-4">
            <img src="@/assets/doggy.png" class="doggo" alt="" />
          </div>
        </div>
        <div class="col">ovdje dodju buttoni</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/listing.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss">
.doggo {
  max-width: 200%;
  max-height: 200%;
}
</style>
