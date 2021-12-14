<template>
  <div class="footer-section p-5">
    <b-row class="justify-content-around text-left">
      <b-col cols="3"
        ><img class="" :src="require('@/assets/logo-footer.svg')" alt=""
      /></b-col>
      <b-col cols="6" class="row footer-links">
        <b-col cols="4">
          <h5>Features</h5>
          <a class="text-muted">Link Shortening</a>
          <a class="text-muted">Branded Links</a>
          <a class="text-muted">Analytics</a>
        </b-col>
        <b-col cols="4">
          <h5>Resources</h5>
          <a class="text-muted">Blog</a>
          <a class="text-muted">Developers</a>
          <a class="text-muted">Support</a>
        </b-col>
        <b-col cols="4">
          <h5>Company</h5>
          <a class="text-muted">About</a>
          <a class="text-muted">Our Team</a>
          <a class="text-muted">Careers</a>
          <a class="text-muted">Contact</a>
        </b-col>
      </b-col>
      <b-col cols="2" class="row justify-content-between">
        <b-col cols="3"
          ><a href=""
            ><img :src="require('@/assets/icon-facebook.svg')" alt="" /></a
        ></b-col>
        <b-col cols="3"
          ><a href=""
            ><img :src="require('@/assets/icon-twitter.svg')" alt="" /></a
        ></b-col>
        <b-col cols="3"
          ><a href=""
            ><img :src="require('@/assets/icon-pinterest.svg')" alt="" /></a
        ></b-col>
        <b-col cols="3"
          ><a href=""
            ><img :src="require('@/assets/icon-instagram.svg')" alt="" /></a
        ></b-col>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.footer-section {
  background-color: black;
  color: white;
}
.footer-links h5 {
  margin-bottom: 10px;
}
.footer-links a {
  display: inline-block;
  width: 100%;
  margin: 5px 0;
}
</style>