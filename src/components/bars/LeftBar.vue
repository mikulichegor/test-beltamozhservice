<template>
  <div class="left-bar">
    <v-card class="full-height">
      <h3 class="pa-2 mr-auto">Профили</h3>
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="(title, index) in titles"
            :key="index"
            @click="changeSelectedOption(index)"
            :class="{ default: index === selectedOption }"
          >
            <v-list-item-icon>
              <v-icon color="#1F4591">{{ title.iconName }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ title.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["setSelectedOption", "setIsFiltered", "setShowFilterBar"]),
    changeSelectedOption(index) {
      if (this.showFilterBar) {
        this.setShowFilterBar();
      }
      this.setIsFiltered(false);
      this.setSelectedOption(index);
    },
  },
  computed: {
    ...mapState(["selectedOption", "showFilterBar"]),
    titles() {
      return [
        {
          name: "Все",
          iconName: "mdi-account-group",
        },
        {
          name: "Обработанные",
          iconName: "mdi-check-bold",
        },
        {
          name: "Не обработанные",
          iconName: "mdi-exclamation-thick",
        },
      ];
    },
  },
};
</script>

<style>
.default {
  background-color: #e0e0e0;
}
</style>
