<template>
  <div class="container text-center">
    <div class="row" style="height: 650px">
      <div class="col" style="height: 650px">
        <img src="@/assets/doggy.png" class="doggo" alt="" />
        <p></p>
      </div>

      <div class="col" style="height: 650px">
        <div class="cta">
          <h2>
            Many paws out there are looking for a human, if you are looking for
            a paw, find your match now!
          </h2>
          <button type="button" class="btn btn-primary">Find a dog</button>
        </div>
      </div>
    </div>
  </div>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <h4 class="cta"><b>Have a dog to list?</b> Register to continue</h4>
      </div>

      <div class="col">
        <button type="button" class="btn btn-secondary">
          <b>Sign up</b>
        </button>
        <button type="button" class="btn btn-secondary">
          Already have an account? <b>Login</b>
        </button>
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
  max-width: 70%;
  max-height: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  margin-bottom: 10rem;
}

.cta {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 8rem;
}
</style>
