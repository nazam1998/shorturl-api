<template>
  <b-container @mouseenter="isHover = true" @mouseleave="isHover = false">
    <b-card>
      <b-row class="justify-content-around">
        <b-col cols="6" class="text-left"
          ><a class="text-dark" :href="link.original">{{
            link.original
          }}</a></b-col
        >
        <b-col cols="4" class="text-right"
          ><a :href="link.shorted" class="text-info mr-5">{{ link.shorted }}</a>
          <b-btn
            v-clipboard:copy="link.shorted"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
            :class="{ 'btn-info': !isClicked, 'btn-danger': isClicked }"
            >{{ copied }}</b-btn
          >
        </b-col>
        <b-col cols="2">
          <b-btn v-if="isHover" @click="$store.commit('remove', index)"
            >&cross;</b-btn
          >
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>
<script>
export default {
  name: "Link",
  data() {
    return {
      isClicked: false,
      isHover: false,
    };
  },
  props: {
    link: Object,
    index: Number,
  },
  methods: {
    onCopy() {
      this.isClicked = true;
    },
    onError() {
      this.isClicked = false;
    },
  },
  computed: {
    copied: function () {
      return this.isClicked ? "Copied!" : "Copy";
    },
  },
};
</script>
<style>
</style>