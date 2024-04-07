<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-2">
      <div class="filter-results">
        <h3>Filter results</h3>
        <select class="form-select" aria-label="Country">
          <option selected disabled>Pick a country</option>
          <option value="1">Hrvatska</option>
        </select>
        <select class="form-select" aria-label="Region">
          <option selected>All regions</option>
          <option value="1">Centralna Hrvatska</option>
          <option value="2">Dalmacija</option>
          <option value="3">Istra</option>
          <option value="4">Slavonija</option>
        </select>
        <button class="btn" href="#" role="button" style="width: auto">
          Apply filter
        </button>
      </div>
    </div>
    <div class="col-8">
      <div class="listings-screen card text-center">
        <div
          class="card-header d-flex justify-content-between align-items-center">
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
          <form
            class="d-flex align-items-center"
            role="search"
            style="margin-left: 10px">
            <input
              v-model="store.searchTerm"
              class="form-control me-2"
              type="search"
              placeholder="Search for a doggo"
              aria-label="Search"
              style="font-size: 14px" />
          </form>
        </div>
        {{ store.searchTerm }}

        <listing :lists="filteredLists" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store";
import listing from "@/components/listing.vue";

let lists = [];
lists = [
  {
    title: "aa",
    petName: "Rbxex",
    region: "Centralna Hrvatska",
    country: "Hrvatska",
    photo: require("@/assets/dog2.jpg"),
    adopted: false,
  },
  {
    title: "Doggo",
    petName: "Rex",
    region: "nesto",
    country: "Njemacka",
    photo: require("@/assets/dog2.jpg"),
    adopted: true,
  },
  {
    title: "Pup",
    petName: "Rexii",
    region: "Centralna Hrvatska",
    country: "Hrvatska",
    photo: require("@/assets/dog2.jpg"),
    adopted: false,
  },
];

export default {
  name: "FindaDog",
  components: {
    listing,
  },
  data() {
    return {
      store: store,
      lists: lists,
    };
  },
  computed: {
    filteredLists() {
      let SearhTerm = this.store.searchTerm.toLowerCase();
      return this.lists.filter((list) =>
        ["title", "petName", "region", "country"].some((prop) =>
          list[prop].toLowerCase().includes(SearhTerm)
        )
      );
    },
  },

  /* return this.listings.filter((listing) => {
        return listing.petName
          .toLowerCase()
          .includes(this.store.searchTerm.toLowerCase());
      });
    },
  }, */
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

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-tabs {
  margin-bottom: 0; /* Remove bottom margin from the nav-tabs */
}

.form-control {
  height: calc(1.5em + 0.75rem + 2px); /* Match the height of the button */
}
</style>
