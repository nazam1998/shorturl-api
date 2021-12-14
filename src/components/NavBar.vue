<template>
  <b-container>
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="#"
        ><img :src="require('@/assets/logo.svg')" alt=""
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Features</b-nav-item>
          <b-nav-item href="#">Pricing</b-nav-item>
          <b-nav-item href="#">Resources</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            ><b-btn variant="light" class="bg-white border-white text-muted"
              >Login</b-btn
            ></b-nav-item
          >
          <b-nav-item><b-btn variant="info" class="rounded-pill px-4">Sign Up</b-btn></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
