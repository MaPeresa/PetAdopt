<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-2">
      <div class="filter-results">
        Filter results
        <select class="form-select" aria-label="Country">
          <option selected>Pick a country</option>
          <option value="1">Hrvatska</option>
        </select>
        <select class="form-select" aria-label="Region">
          <option selected>Pick a region</option>
          <option value="1">Centralna Hrvatska</option>
          <option value="2">Dalmacija</option>
          <option value="3">Istra</option>
          <option value="4">Slavonija</option>
        </select>
        <button
          class="btn btn-secondary"
          href="#"
          role="button"
          style="width: 200px"
        >
          Apply filter
        </button>
      </div>
    </div>
    <div class="col-8">
      <div class="listings-screen card text-center">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="true" href="#">All</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Adopted</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Not adopted</a>
            </li>
          </ul>
        </div>
        <listing />
        <listing />
      </div>
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
