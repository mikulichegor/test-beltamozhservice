<template>
  <div>
    <HeaderBar
      @toggleLeftBar="toggleLeftBar"
      @toggleFilterBar="toggleFilterBar"
    />
    <div class="main-content--wrapper">
      <LeftBar v-if="showLeftBar" />
      <MainContent />
      <FilterBar v-if="showFilterBar" />
    </div>
  </div>
</template>

<script>
import HeaderBar from "../components/bars/HeaderBar.vue";
import LeftBar from "../components/bars/LeftBar.vue";
import FilterBar from "../components/bars/FilterBar.vue";

import MainContent from "../components/MainContent.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "MainPage",

  components: {
    HeaderBar,
    LeftBar,
    FilterBar,

    MainContent,
  },
  methods: {
    ...mapMutations([
      "setSelectedDirectoryCode",
      "setSelectedRecord",
      "setShowLeftBar",
      "setShowFilterBar",
    ]),

    toggleLeftBar() {
      this.setShowLeftBar();
    },
    toggleFilterBar() {
      this.setShowFilterBar();
    },
  },
  computed: {
    ...mapState(["showLeftBar", "showFilterBar"]),
  },
};
</script>

<style>
.main-content--wrapper {
  display: flex;
}
</style>
