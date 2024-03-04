<template>
  <link
    href="https://fonts.googleapis.com/css?family=Nunito"
    rel="stylesheet"
  />
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light">
      <!--Image and text-->
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="@/assets/PetAdopt_logo.png"
            width="150"
            height="45"
            alt=""
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/MyListings" class="nav-link"
                >My Listings</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/FindaDog" class="nav-link"
                >Find a dog</router-link
              >
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <router-link to="/">Home</router-link>|
                <router-link to="/Login">Login</router-link>|
                <router-link to="/MyListings">My Listings</router-link>|
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Nunito";
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #473a0b !important;
}

nav {
  padding: 30px;
  background-color: #473a0b !important;
  color: #fed850;

  a {
    color: #fed850 !important;

    &.router-link-exact-active {
      font-weight: semibold;
      color: #fed850;
      background: rgba(254, 216, 80, 0.18);
      border-radius: 8px;
    }
  }
}
</style>
