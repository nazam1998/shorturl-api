<template>
  <div>
    <Link
      v-for="(link, index) in urlList"
      :key="index"
      :link="link"
      :index="index"
    />
    <b-btn v-if="!isEmpty" variant="light" @click="$store.commit('clearAll')">Clear All</b-btn>
  </div>
</template>
<script>
import Link from "@/components/Link";
export default {
  name: "ListLink",
  components: { Link },
  computed: {
    urlList: function () {
      return this.$store.getters.listLink;
    },
    isEmpty: function () {
      return this.urlList.length <= 0;
    },
  },
};
</script>
<style scoped>
</style>