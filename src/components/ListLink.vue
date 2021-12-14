<template>
  <div>
    <Link
      v-for="(link, index) in $store.getters.listLink"
      :key="index"
      :link="link"
    />
  </div>
</template>
<script>
import Link from "@/components/Link";
export default {
  name: "ListLink",
  components: { Link },
};
</script>
<style scoped>
</style>