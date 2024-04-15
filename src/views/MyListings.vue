<template>
  <div class="container-lg">
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Create a new listing
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit="addListing" class="form-inline mb-5">
              <div class="form group">
                <label for="title" class="form-label">Title</label>
                <input
                  v-model="newTitle"
                  type="text"
                  class="form-control"
                  id="title"
                  required
                  placeholder="Enter the title here"
                  title="" />
              </div>
              <div class="form group">
                <label for="petName" class="form-label">Pet Name</label>
                <input
                  v-model="newPetName"
                  type="text"
                  class="form-control"
                  id="petName"
                  required
                  placeholder="Enter your pet's name"
                  title="" />
              </div>
              <div class="form group">
                <label for="age" class="form-label">Age</label>
                <input
                  v-model="newAge"
                  type="number"
                  class="form-control"
                  id="age"
                  required
                  placeholder="Enter the pet's age"
                  title="Enter the pet's age in years" />
              </div>
              <div class="form group">
                <label for="gender" class="form-label">Gender</label>
                <select
                  v-model="newGender"
                  class="form-select"
                  id="gender"
                  required
                  title="Select the pet's gender">
                  <option disabled value="">Select gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Unknown</option>
                </select>
              </div>
              <div class="form group">
                <label for="description" class="form-label">Description</label>
                <textarea
                  v-model="newDescription"
                  class="form-control"
                  id="description"
                  required
                  style="height: 150px"
                  placeholder="Provide info such as age, gender, temper, health, known history etc."
                  title="Provide info such as age, gender, temper, health, known history etc."></textarea>
              </div>

              <div class="form group">
                <label for="country" class="form-label">Country</label>
                <select
                  v-model="selectedCountry"
                  class="form-select"
                  aria-label="Country">
                  <option disabled value="">Select a country</option>
                  <option
                    v-for="country in countries"
                    :key="country.id"
                    :value="country.name">
                    {{ country.name }}
                  </option>
                </select>
              </div>
              <div class="form group">
                <label for="region" class="form-label">Region</label>
                <select
                  v-model="newRegion"
                  class="form-select"
                  aria-label="Region">
                  <option disabled value="">Select a region</option>
                  <option
                    v-for="region in filteredRegions"
                    :key="region.id"
                    :value="region.name">
                    {{ region.name }}
                  </option>
                </select>
              </div>
              <div class="form group">
                <label for="photo" class="form-label">Photo</label>
                <input
                  v-model="newPhoto"
                  type="text"
                  class="form-control"
                  id="photo"
                  required
                  placeholder="Enter a photo URL"
                  title="" />
              </div>
              <div class="form group">
                <input
                  v-model="newAdoptionStatus"
                  type="checkbox"
                  class="form-check-input"
                  id="adopted" />
                <label class="form-check-label" for="adopted">Adopted</label>
              </div>
              <button type="submit" class="btn btn-primary">Add Listing</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div id="listings-screen" class="card text-center">
      <div class="card">
        <div class="card-buttons">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic radio toggle button group">
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio1"
              autocomplete="off"
              checked />
            <label class="btn btn-outline-primary" for="btnradio1"
              >Adopted</label
            >

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio2"
              autocomplete="off" />
            <label class="btn btn-outline-primary" for="btnradio2"
              >Not Adopted</label
            >
          </div>
          <button
            type="button"
            class="btn btn-danger"
            style="margin-left: 1rem">
            Delete
          </button>
        </div>
      </div>
      <listing :lists="filteredLists" />
      <p class="d-inline-flex gap-1">
        <button class="btn btn-secondary" style="margin: auto">
          <b>Add dog</b>
        </button>

        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          style="margin: auto">
          Create a new listing
        </button>
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import listing from "@/components/listing.vue";
import { db } from "@/firebase";
import store from "@/store";

export default {
  name: "Mylistings",
  components: {
    listing,
  },
  data() {
    return {
      listings: [],
      filteredLists: [],
      store: store,
      newTitle: "",
      newPetName: "",
      newDescription: "",
      newRegion: "",
      newCountry: "",
      newPhoto: "",
      newAdoptionStatus: false,
      newAge: "",
      newGender: "",
      countries: [
        { id: 1, name: "Hrvatska" },
        { id: 2, name: "Germany" },
        { id: 3, name: "Slovenija" },
      ],
      regions: [
        { id: 1, countryId: 1, name: "Centralna Hrvatska" },
        { id: 2, countryId: 1, name: "Dalmacija" },
        { id: 3, countryId: 1, name: "Istra" },
        { id: 4, countryId: 1, name: "Slavonija" },
        { id: 5, countryId: 2, name: "Bayern" },
        { id: 6, countryId: 2, name: "Hessern" },
        { id: 7, countryId: 2, name: "Sachsen" },
        { id: 8, countryId: 3, name: "Gorenjska" },
        { id: 9, countryId: 3, name: "Goriška" },
        { id: 10, countryId: 3, name: "Obalno-kraška" },
      ],
      selectedCountry: null,
    };
  },
  mounted() {
    this.fetchListings();
  },
  methods: {
    fetchListings() {
      db.collection("listings")
        .orderBy("postedAt", "desc")
        .get()
        .then((querySnapshot) => {
          this.listings = [];
          querySnapshot.forEach((doc) => {
            let listing = doc.data();
            listing.id = doc.id;
            listing.postedAt = listing.postedAt.toDate();
            this.listings.push(listing);
          });
          this.FilteredUsersListings();
        })
        .catch((error) => {
          console.error("Error fetching listings:", error);
        });
    },
    FilteredUsersListings() {
      const currentUserEmail = store.currentUser;
      this.filteredLists = this.listings.filter(
        (listing) => listing.mail === currentUserEmail
      );
    },
    addListing(event) {
      event.preventDefault();
      const listingData = {
        naslov: this.newTitle,
        imePsa: this.newPetName,
        opis: this.newDescription,
        regija: this.newRegion,
        drzava: this.selectedCountry,
        slika: this.newPhoto,
        usvojen: this.newAdoptionStatus,
        mail: store.currentUser.email,
        postedAt: new Date(),
        godine: this.newAge,
        spol: this.newGender,
      };

      db.collection("listings")
        .add(listingData)
        .then((doc) => {
          console.log("Listing added", doc);
          this.resetForm();
          this.fetchListings();
        })
        .catch((error) => {
          console.error("Error adding listing: ", error);
        });
    },

    resetForm() {
      this.newTitle = "";
      this.newPetName = "";
      this.newDescription = "";
      this.newRegion = "";
      this.selectedCountry = "";
      this.newPhoto = "";
      this.newAdoptionStatus = false;
      this.newAge = "";
      this.newGender = "";
    },
  },
  watch: {
    selectedCountry(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.newRegion = ""; // reset regiju kad se promijeni drzava
      }
    },
  },
  computed: {
    filteredRegions() {
      if (!this.selectedCountry) return [];
      const selectedCountryId = this.countries.find(
        (c) => c.name === this.selectedCountry
      )?.id;
      return this.regions.filter(
        (region) => region.countryId === selectedCountryId
      );
    },
  },
};
</script>
<style lang="scss">
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
