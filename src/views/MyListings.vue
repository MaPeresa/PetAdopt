<template>
  <div class="container-lg">
    <div class="col-1"></div>

    <div id="listings-screen" class="card text-center">
      <div class="card">
        <listing />
        <div class="card-buttons">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio1"
              autocomplete="off"
              checked
            />
            <label class="btn btn-outline-primary" for="btnradio1"
              >Adopted</label
            >

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio2"
              autocomplete="off"
            />
            <label class="btn btn-outline-primary" for="btnradio2"
              >Not Adopted</label
            >
          </div>
          <button
            type="button"
            class="btn btn-danger"
            style="margin-left: 1rem"
          >
            Delete
          </button>
        </div>
      </div>
      <listing />
      <listing />
      <p class="d-inline-flex gap-1">
        <button class="btn btn-secondary" style="margin: auto">
          <b>Add dog</b>
        </button>
        <button class="btn btn-primary" style="margin: auto">
          Create a new listing
        </button>
      </p>
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

.btn-check:checked + .btn,
.btn.active,
.btn.show,
.btn:first-child:active,
:not(.btn-check) + .btn:active {
  color: #fed850;
  background-color: #473a0b;
  border-color: #473a0b;
}

.btn-outline-primary {
  --bs-btn-color: #473a0b;
  --bs-btn-border-color: #473a0b;
  --bs-btn-hover-color: #fed850;
  --bs-btn-hover-bg: #473a0b;
  --bs-btn-hover-border-color: #473a0b;
  --bs-btn-focus-shadow-rgb: 13, 110, 253;
  --bs-btn-active-color: #fed850;
  --bs-btn-active-bg: #473a0b;
  --bs-btn-active-border-color: #473a0b;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #473a0b;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #473a0bd;
  --bs-gradient: none;
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
