<template>
  <div class="listings-screen card text-center">
    <div class="card-header d-flex justify-content-between align-items-center">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: filter === 'all' }"
            @click="setFilter('all')"
            href="#"
            >All</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: filter === 'adopted' }"
            @click="setFilter('adopted')"
            href="#"
            >Adopted</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: filter === 'not_adopted' }"
            @click="setFilter('not_adopted')"
            href="#"
            >Not adopted</a
          >
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

    <listing :lists="filteredLists" />
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
      filter: "all",
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      db.collection("listings")
        .orderBy("postedAt", "desc")
        .get()
        .then((query) => {
          this.lists = [];
          query.forEach((doc) => {
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
    setFilter(status) {
      this.filter = status;
    },
  },

  computed: {
    filteredLists() {
      let searchTerm = this.store.searchTerm.toLowerCase();
      let filtered = this.lists.filter((list) =>
        ["naslov", "imePsa", "regija", "drzava", "spol"].some((prop) =>
          String(list[prop]).toLowerCase().includes(searchTerm)
        )
      );
      if (this.filter === "adopted") {
        return filtered.filter((list) => list.usvojen === true);
      } else if (this.filter === "not_adopted") {
        return filtered.filter((list) => list.usvojen === false);
      }
      return filtered; // Return all if 'all' is selected
    },
  },
};
</script>

<style lang="scss">
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
