<template>
  <div class="row">
    <div class="col-1"></div>

    <div id="listings-screen" class="card text-center">
      <ul class="list-group list-group-horizontal-sm">
        <li class="list-group-item">komponenta 1-pas</li>
        <li class="list-group-item">komponenta 2-pas</li>
        <li class="list-group-item">komponenta 3-pas</li>
      </ul>

      <listing />
      <listing />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import listing from "@/components/listing.vue";

export default {
  name: "HomeView",
  components: {
    listing,
  },
};
</script>
<style lang="scss">
.col-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
  padding-top: 1em;
}
.mb-3 {
  margin: 1rem !important;
  border: 1px solid;
  border-color: #473a0b;
  color: #473a0b;
}
.img-fluid {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}

.filter-results {
  background-color: #473a0b14;
  border: 1px solid;
  border-color: #473a0b;
  border-radius: 8px;
  height: auto;
  position: relative;
  width: max-width;
  padding: 1em;
  margin-top: 1rem;
}

.form-select {
  margin-top: 0.5em;
}

#listings-screen {
  background-color: #473a0b14;
  border: 1px solid;
  border-color: #473a0b;
  border-radius: 8px;
  height: auto;
  overflow: hidden;
  position: relative;
  width: 914px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
}

.btn {
  margin-top: 1rem;
}

a {
  color: #473a0b !important;

  &.router-link-exact-active {
    font-weight: semibold;
    color: #473a0b;
    background: rgba(254, 216, 80, 0.18);
    border-radius: 8px;
  }
}
</style>
