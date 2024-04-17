<template>
  <div
    class="card mb-3"
    style="max-width: 1440px"
    v-for="list in lists"
    :key="list.id">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="list.slika" class="img-fluid rounded-start" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ list.naslov }}</h5>
          <p class="card-text">This is {{ list.imePsa }}. {{ list.opis }}</p>
          <p class="card-text">
            <small class="text-body-secondary"
              >{{ list.imePsa }} | {{ list.godine }} | {{ list.spol }}</small
            >
          </p>
          <p class="card-text">
            <small class="text-body-secondary"
              >Location: {{ list.regija }}, {{ list.drzava }}</small
            >
          </p>
          <p class="card-text">
            <small class="text-body-secondary">Contact: {{ list.mail }} </small>
          </p>
          <p class="card-text">
            <small class="text-body-secondary">
              Posted:
              {{ list.postedAt.toLocaleDateString() }}</small
            >
          </p>
          <slot name="actions" :list="list"></slot>
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
