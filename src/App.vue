<template>
  <div class="app">
    <nav class="nav-extended">
      <div class="container">
        <div class="row">
          <div class="nav-wrapper">
            <a href="/" class="brand-logo">weatherman</a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"
              ><i class="material-icons">menu</i></a
            >
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><router-link to="/">Home</router-link></li>
              <li>
                <router-link :to="{ path: 'page', query: { city: GET_QUERY } }"
                  >Page</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <ul class="sidenav" id="mobile-demo" ref="sidenav">
      <li><router-link to="/">Home</router-link></li>
      <li>
        <router-link to="/page">Page</router-link>
      </li>
    </ul>
    <div class="weather z-depth-3">
      <router-view />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    datap: "",
  }),
  computed: {
    ...mapGetters(["GET_QUERY"]),
  },
  mounted() {
    window.M.Sidenav.init(this.$refs.sidenav);
  },
};
</script>

<style lang="less">
.weather {
  max-width: 400px;
  margin: 100px auto;
  border-radius: 10px;
  padding-bottom: 40px;
  padding-top: 20px;
}
nav li:hover,
nav li .router-link-exact-active {
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
</style>
