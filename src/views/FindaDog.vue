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
        <!-- {{ store.searchTerm }} -->

        <div class="container-lg">
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
                  :value="country.id">
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

        <listing :lists="filteredLists" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store";
import listing from "@/components/listing.vue";
import { db } from "@/firebase";

export default {
  name: "FindaDog",
  components: {
    listing,
  },
  data() {
    return {
      store: store,
      lists: [],
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
    //DOHVAT IZ FIREBASE
    this.getPosts();
  },
  methods: {
    getPosts() {
      console.log("firebase dohvat");

      db.collection("listings")
        .orderBy("postedAt", "desc")
        .limit(8)
        .get()
        .then((query) => {
          this.lists = [];
          query.forEach((doc) => {
            console.log("ID:", doc.id);
            console.log("Data:", doc.data());

            //this.lists.push(doc.data());
            const data = doc.data();

            this.lists.push({
              id: doc.id,
              naslov: data.naslov,
              imePsa: data.imePsa,
              opis: data.opis,
              regija: data.regija,
              drzava: data.drzava,
              slika: data.slika,
              usvojen: data.usvojen,
              mail: data.mail,
              postedAt: data.postedAt.toDate(),
              godine: data.godine,
              spol: data.spol,
            });
          });
        });
    },

    addListing(event) {
      event.preventDefault();
      const title = this.newTitle;
      const petName = this.newPetName;
      const description = this.newDescription;
      const region = this.newRegion;
      const country = this.newCountry;
      const photo = this.newPhoto;
      const adopted = this.newAdoptionStatus;
      const age = this.newAge;
      const gender = this.newGender;

      db.collection("listings")
        .add({
          naslov: title,
          imePsa: petName,
          opis: description,
          regija: region,
          drzava: country,
          slika: photo,
          usvojen: adopted,
          mail: store.currentUser,
          postedAt: new Date(),
          godine: age,
          spol: gender,
        })
        .then((doc) => {
          console.log("Listing added", doc);
          this.newTitle = "";
          this.newPetName = "";
          this.newDescription = "";
          this.newRegion = "";
          this.newCountry = "";
          this.newPhoto = "";
          this.newAdoptionStatus = false;
          this.newAge = "";
          this.newGender = "";

          this.getPosts();
        })
        .catch((error) => {
          console.error("Error adding listing: ", error);
        });
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
      return this.regions.filter(
        (region) => region.countryId === this.selectedCountry
      );
    },

    filteredLists() {
      let searchTerm = this.store.searchTerm.toLowerCase();
      return this.lists.filter((list) =>
        ["naslov", "imePsa", "regija", "drzava", "spol"].some((prop) =>
          list[prop]?.toLowerCase().includes(searchTerm)
        )
      );
    },
  },
};
</script>

<style lang="scss">
.form-container {
  max-width: 900px;
  margin: auto;
  padding: 20px;
}
.col-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
  padding-top: 1em;
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
  margin-bottom: 0;
}

.form-control {
  height: calc(1.5em + 0.75rem + 2px);
}
</style>
