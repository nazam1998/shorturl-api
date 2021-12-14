<template>
  <b-container class="my-5">
    <b-row class="justify-content-between align-items-center">
      <b-col cols="4" class="text-left">
        <h1 class="section-title">More than just shorter links</h1>
        <p class="text-muted">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <b-btn variant="info" class="rounded-pill px-4">Get Started</b-btn>
      </b-col>
      <b-col cols="6">
        <img
          class="illustration-working"
          :src="require('@/assets/illustration-working.svg')"
          alt=""
        />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {};
</script>
<style scoped>
.section-title {
  font-size: 40px;
  font-weight: bold;
}
.illustration-working {
  height: 100%;
  width: 100%;
}
</style>