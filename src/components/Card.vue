<template>
  <b-card
    class="p-4 statictis-card"
    :style="`height: 300px; text-align: left; position: relative; top: ${
      index * 50
    }px`"
    :title="card.title"
  >
    <div class="img-container text-center">
      <img
        class="img-card my-2"
        :src="require(`@/assets/${card.logo}`)"
        alt=""
      />
    </div>
    <b-card-text>{{ card.desc }}</b-card-text>
  </b-card>
</template>
<script>
export default {
  name: "Card",
  props: {
    card: Object,
    index: Number,
  },
};
</script>
<style scoped>
.img-container {
  position: absolute;
  top: -30px;
  left: 60px;
  border-radius: 50%;
  background-color: hsl(257, 27%, 26%);
  height: 60px;
  width: 60px;
}
.img-card {
  height: 35px;
  width: 35px;
}
.statictis-card .card-title {
  font-weight: bold;
}
</style>