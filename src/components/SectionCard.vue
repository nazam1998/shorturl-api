<template>
  <b-container class="my-5">
    <b-row class="section-card-line">
      <b-col v-for="(card, index) in cardList" :key="index" cols="4">
        <card :card="card" :index="index"/>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>

import Card from "@/components/Card";
import json from "@/card.json";

export default {
  name: "SectionCard",
  components: {
    Card,
  },
  data() {
    return {
      cardList: json,
    };
  },
};
</script>
<style scoped>
.section-card-line:before {
  background-color: #17a2b8;
  content: "";
  display: inline-block;
  height: 10px;
  position: absolute;
  left: 25%;
  margin-top: 150px;
  vertical-align: middle;
  width: 50%;
}
</style>