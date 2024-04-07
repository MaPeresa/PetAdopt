<template>
  <div class="container text-center">
    <div class="row" style="height: 650px">
      <div class="col" style="height: 650px">
        <img src="@/assets/doggy.png" class="doggo" alt="" />
        <p></p>
      </div>

      <div class="col" style="height: 650px">
        <div class="cta">
          <h2>
            Many paws out there are looking for a human, if you are looking for
            a paw, find your match now!
          </h2>

          <button type="button" class="btn btn-primary">
            <router-link to="/FindaDog" class="nav-link"
              >Find a dog</router-link
            >
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <h4 class="cta"><b>Have a dog to list?</b> Register to continue</h4>
      </div>

      <div class="col">
        <div
          class="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="ModalToggle"
          tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="ModalToggle">Log In</h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="container">
                  <div class="col">
                    <form>
                      <div class="form-group">
                        <label for="InputEmail">Email address</label>
                        <input
                          type="email"
                          class="form-control"
                          id="InputEmail"
                          aria-describedby="emailHelp"
                          placeholder="e.g. username@gmail.com" />
                      </div>
                      <div class="form-group">
                        <label for="InputPassword">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="InputPassword"
                          placeholder="type your password" />
                      </div>
                      <button type="submit" class="btn btn-primary">
                        Log in
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-secondary"
                  data-bs-target="#ModalToggle2"
                  data-bs-toggle="modal"
                  style="margin: auto">
                  Don't have an account yet? Register
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="ModalToggle2"
          aria-hidden="true"
          aria-labelledby="ModalToggleLabel2"
          tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="ModalToggleLabel2">
                  Register
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="container">
                  <div class="col">
                    <form>
                      <div class="form-group">
                        <label for="Email">Email address</label>
                        <input
                          type="email"
                          class="form-control"
                          id="Email"
                          aria-describedby="emailHelp"
                          placeholder="e.g. username@gmail.com" />
                      </div>
                      <div class="form-group">
                        <label for="phone">Phone number</label>
                        <input
                          type="phone"
                          class="form-control"
                          id="phone"
                          aria-describedby="phoneHelp"
                          placeholder="+385 91 365 1230" />
                      </div>
                      <div class="form-group">
                        <label for="Password">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="Password"
                          placeholder="type your password" />
                      </div>
                      <div class="form-group">
                        <label for="repeatPassword">Repeat Password</label>
                        <input
                          type="repeatpassword"
                          class="form-control"
                          id="repeatPassword"
                          placeholder="retype your password" />
                      </div>
                      <button type="submit" class="btn btn-primary">
                        Register
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-secondary"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  style="margin: auto">
                  Already have and account? Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          class="btn btn-secondary"
          data-bs-target="#exampleModalToggle"
          data-bs-toggle="modal"
          style="margin-top: 6rem">
          <b>Login</b>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
<style lang="scss">
.doggo {
  max-width: 70%;
  max-height: 70%;
  margin: 100px auto 200px auto;
}

.cta {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 8rem;
}

.form-group {
  margin: 20px;
  align-content: center;
}
</style>
