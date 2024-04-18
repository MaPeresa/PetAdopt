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
          <button type="button" class="btn btn-primary">
            <router-link to="/FindaDog" class="nav-link"
              >Find a dog</router-link
            >
          </button>
        </div>
      </div>
    </div>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <h4 class="cta"><b>Have a dog to list?</b> Register to continue</h4>
        </div>

        <div class="col">
          <button
            type="button"
            class="btn btn-secondary"
            style="margin-top: 80px">
            <router-link to="/Login" class="nav-link">Login</router-link>
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            style="margin-top: 10px">
            <router-link to="/SignUp" class="nav-link">Sign up</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
<style lang="scss">
.doggo {
  max-width: 70%;
  max-height: 70%;
  margin: 100px auto 200px auto;
}

.cta {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 8rem;
}

.form-group {
  margin: 20px;
  align-content: center;
}
</style>
