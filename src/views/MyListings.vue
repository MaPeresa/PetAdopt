<template>
  <div class="container-lg">
    <NewListingModal />

    <div id="listings-screen" class="card text-center">
      <listing :lists="filteredLists">
        <template v-slot:actions="{ list }">
          <button
            @click="toggleAdoption(list)"
            :class="{'btn-adopted': list.usvojen, 'btn-not-adopted': !list.usvojen}"
            class="btn">
            {{ list.usvojen ? "Mark as Not Adopted" : "Mark as Adopted" }}
          </button>
          <button
            @click="deleteListing(list)"
            class="btn btn-danger">
            Delete
          </button>
        </template>
      </listing>
      <p class="d-inline-flex gap-1">
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
import NewListingModal from "@/components/NewListingModal.vue";
import { db } from "@/firebase";
import store from "@/store";

export default {
  name: "Mylistings",
  components: {
    listing,
    NewListingModal,
  },
  data() {
    return {
      listings: [],
      filteredLists: [],
      store: store,
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
    toggleAdoption(listing) {
      const newStatus = !listing.usvojen;
      db.collection("listings")
        .doc(listing.id)
        .update({ usvojen: newStatus })
        .then(() => {
          listing.usvojen = newStatus; // Update the local listing status
          // Optional: Notify the user of the update
          alert(
            `Listing ${
              newStatus ? "marked as adopted" : "marked as not adopted"
            }.`
          );
        })
        .catch((error) => {
          console.error("Error updating listing:", error);
        });
    },
    deleteListing(listing) {
      db.collection("listings")
        .doc(listing.id)
        .delete()
        .then(() => {
          this.filteredLists = this.filteredLists.filter(
            (l) => l.id !== listing.id
          );
          alert("Listing deleted successfully.");
        })
        .catch((error) => {
          console.error("Error deleting listing:", error);
        });
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
