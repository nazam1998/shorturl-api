<template>
  <div id="app">
    <NavBar />
    <the-header />
    <div class="bg-light section-grey">
      <input-shorten />
      <list-link />
      <statistics />
      <section-card />
    </div>
    <booster-section />
    <footer-section />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import TheHeader from "@/components/TheHeader";
import InputShorten from "@/components/InputShorten";
import ListLink from "@/components/ListLink";
import Statistics from "@/components/Statistics";
import SectionCard from "@/components/SectionCard";
import BoosterSection from "@/components/BoosterSection";
import FooterSection from "@/components/FooterSection";
export default {
  name: "App",
  components: {
    NavBar,
    TheHeader,
    InputShorten,
    ListLink,
    Statistics,
    SectionCard,
    BoosterSection,
    FooterSection,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Commissioner&display=swap");
#app {
  font-family: "Commissioner", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.section-grey {
  height: 140vh;
}
</style>
