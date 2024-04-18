<template>
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
          <form @submit.prevent="addListing" class="form-inline mb-5">
            <div class="form-group">
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
            <div class="form-group">
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
            <div class="form-group">
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
            <div class="form-group">
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
            <div class="form-group">
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
                type="file"
                class="form-control"
                id="photo"
                @change="handleFileUpload"
                required
                accept="image/*" />
            </div>
            <div class="form-group">
              <input
                v-model="newAdoptionStatus"
                type="checkbox"
                class="form-check-input"
                id="adopted" />
              <label class="form-check-label" for="adopted">Adopted</label>
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              data-bs-dismiss="modal">
              Add Listing
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase";
import store from "@/store";
import firebase from "firebase/app";
import "firebase/storage";

export default {
  name: "NewListingModal",
  data() {
    return {
      newTitle: "",
      newPetName: "",
      newAge: "",
      newGender: "",
      newDescription: "",
      newAdoptionStatus: false,
      newRegion: "",
      newPhoto: null,
      selectedCountry: "",
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
        { id: 6, countryId: 2, name: "Hessen" },
        { id: 7, countryId: 2, name: "Sachsen" },
        { id: 8, countryId: 3, name: "Gorenjska" },
        { id: 9, countryId: 3, name: "Goriška" },
        { id: 10, countryId: 3, name: "Obalno-kraška" },
      ],
    };
  },
  methods: {
    addListing(event) {
      event.preventDefault();
      const user = firebase.auth().currentUser; // Get the current user
      if (this.newPhoto && user) {
        const storageRef = firebase
          .storage()
          .ref(`listings/${user.uid}/${this.newPhoto.name}`);
        const uploadTask = storageRef.put(this.newPhoto);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Optional: Handle progress
          },
          (error) => {
            console.error("Error uploading file:", error);
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.saveListing(downloadURL);
            });
          }
        );
      } else {
        console.error("User is not authenticated or photo is not selected.");
      }
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.newPhoto = file;
    },
    saveListing(photoUrl) {
      const listingData = {
        naslov: this.newTitle,
        imePsa: this.newPetName,
        opis: this.newDescription,
        regija: this.newRegion,
        drzava: this.selectedCountry,
        slika: photoUrl,
        usvojen: this.newAdoptionStatus,
        mail: store.currentUser,
        postedAt: new Date(),
        godine: this.newAge,
        spol: this.newGender,
      };

      db.collection("listings")
        .add(listingData)
        .then(() => {
          this.resetForm();
          this.$router.push({ name: "MyListings" }).then(() => {
            window.location.reload();
          });
        })
        .catch((error) => {
          console.error("Error adding listing: ", error);
        });
    },
    resetForm() {
      this.editMode = false;
      this.currentListingId = null;
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

<style scoped>
.form-group {
  margin-bottom: 1rem;
}
</style>
