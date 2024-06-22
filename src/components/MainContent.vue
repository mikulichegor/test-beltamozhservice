<template>
  <div class="main-content">
    <div class="action-button">
      <v-app-bar
        ><h3 class="pa-2 mr-auto">{{ currentOption[selectedOption] }}</h3>
        <action-drop-down :selected="selected"></action-drop-down
      ></v-app-bar>
    </div>
    <div class="content-table">
      <v-data-table
        v-if="selectedOption !== 0"
        :headers="headers"
        :items="computedFilteredUsers"
        :items-per-page="5"
        v-model="selected"
        :single-select="true"
        show-select
        class="elevation-1"
      >
        <template slot="item.status" slot-scope="{ item }">
          <v-icon :color="item.status ? 'blue' : 'red'">
            {{ item.status ? "mdi-cloud-check-variant" : "mdi-cloud-remove" }}
          </v-icon>
        </template>
      </v-data-table>

      <v-data-table
        v-else
        :headers="headersAll"
        :items="computedFilteredUsers"
        :items-per-page="5"
        v-model="selected"
        :single-select="true"
        show-select
        class="elevation-1"
      >
        <template slot="item.status" slot-scope="{ item }">
          <v-icon :color="item.status ? 'blue' : 'red'">
            {{ item.status ? "mdi-cloud-check-variant" : "mdi-cloud-remove" }}
          </v-icon>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import ActionDropDown from "./ActionDropDown.vue";

export default {
  components: { ActionDropDown },
  name: "MainContent",
  data() {
    return {
      selected: [],
      headersAll: [
        { text: "Cтатус", sortable: false, value: "status" },
        { text: "Имя", sortable: false, value: "firstName" },
        { text: "Фамилия", sortable: false, value: "lastName" },
        { text: "Компания", sortable: false, value: "company" },
        { text: "Специальность", sortable: false, value: "jobTitle" },
        { text: "Телефон", sortable: false, value: "phone" },
        { text: "E-mail", sortable: false, value: "email" },
        { text: "Интересы", sortable: false, value: "interests" },
      ],
      headers: [
        { text: "Имя", sortable: false, value: "firstName" },
        { text: "Фамилия", sortable: false, value: "lastName" },
        { text: "Компания", sortable: false, value: "company" },
        { text: "Специальность", sortable: false, value: "jobTitle" },
        { text: "Телефон", sortable: false, value: "phone" },
        { text: "E-mail", sortable: false, value: "email" },
        { text: "Интересы", sortable: false, value: "interests" },
      ],
      currentOption: ["Все", "Обработанные", "Не обработанные"],
    };
  },
  methods: {
    ...mapMutations(["setFilteredUsers", "setIsFiltered"]),
    changeFilteredUsers(users) {
      this.setFilteredUsers(users);
    },
  },
  computed: {
    ...mapState([
      "users",
      "filteredUsers",
      "showLeftBar",
      "showFilterBar",
      "selectedOption",
      "isFiltered",
    ]),
    ...mapActions(["fetchUsers"]),
    computedFilteredUsers() {
      var result = [];
      if (!this.isFiltered) {
        if (this.selectedOption === 0) {
          result = this.users;
        } else {
          result = this.users.filter((user) => {
            return user.status === (this.selectedOption === 1);
          });
        }
        this.changeFilteredUsers(result);
        return result;
      } else {
        return this.filteredUsers;
      }
    },
  },
  watch: {
    selected(newValue, oldValue) {
      console.log("Выбранный элемент:", oldValue);
      console.log("Выбранный элемент:", newValue);
    },
  },
  created() {
    this.fetchUsers;
  },
};
</script>

<style>
.main-content {
  width: 100%;
}
</style>
