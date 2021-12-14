<template>
  <div>
    <b-container class="input-section p-4 rounded">
      <b-row class="container justify-content-center">
        <b-col cols="8">
          <b-form-input
            v-model="text"
            @keyup.enter="submit"
            placeholder="Shorten a link here..."
            :class="{ 'border-danger': msg }"
          ></b-form-input>
        </b-col>
        <b-col cols="2">
          <b-btn variant="info" @click="submit" class="rounded"
            >Shorten it!</b-btn
          >
        </b-col>
      </b-row>
      <p class="text-danger" v-if="msg">{{ msg }}</p>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "InputShorten",
  data() {
    return {
      text: null,
      msg: "",
      regex: /^(http|https):\/\/[w\d]+\.[\w](\/[\w\d]+)?$/,
    };
  },

  methods: {
    submit() {
      if (this.text) {
        this.$store.dispatch("shortenLink", this.text);
        this.text = "";
      }
    },
  },
};
</script>
<style scoped>
.input-section {
  background-image: url("~@/assets/bg-shorten-desktop.svg");
  background-repeat: no-repeat;
  background-color: hsl(257, 27%, 26%);
  background-size: cover;
  position: relative;
  top: -50px;
}
</style>