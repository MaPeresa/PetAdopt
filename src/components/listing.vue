<template>
  <div
    class="card mb-3"
    style="max-width: 1440px"
    v-for="dog in lists"
    :key="dog.id">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="dog.slika" class="img-fluid rounded-start" alt="" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ dog.naslov }}</h5>
          <p class="card-text">This is {{ dog.imePsa }}. {{ dog.opis }}</p>
          <p class="card-text">
            <small class="text-body-secondary"
              >{{ dog.imePsa }} | {{ dog.godine }} | {{ dog.spol }}</small
            >
          </p>
          <p class="card-text">
            <small class="text-body-secondary"
              >Location: {{ dog.regija }}, {{ dog.drzava }}</small
            >
          </p>
          <p class="card-text">
            <small class="text-body-secondary"
              >Adopted: {{ dog.usvojen }} Date posted:{{
                dog.postedAt.toLocaleDateString()
              }}</small
            >
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
    lists: {
      type: Array,
      required: true,
    },
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
