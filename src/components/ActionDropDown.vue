<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#1F4591" dark v-bind="attrs" v-on="on">
          Действия<v-icon>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(action, index) in actions" :key="index">
          <v-btn
            class="full-width-btn"
            text
            tile
            @click="handleActionClick(action)"
            >{{ action.title }}</v-btn
          >
        </v-list-item>
      </v-list>
    </v-menu>

    <add-user v-if="isAdd" @close="isAdd = false"></add-user>
    <delete-user
      v-if="isDelete"
      :itemToDelete="item"
      @close="isDelete = false"
    ></delete-user>
    <edit-user
      v-if="isEdit"
      :itemToEdit="item"
      @close="isEdit = false"
    ></edit-user>
  </div>
</template>

<script>
import AddUser from "./dialogs/AddUser.vue";
import DeleteUser from "./dialogs/DeleteUser.vue";
import EditUser from "./dialogs/EditUser.vue";

export default {
  name: "ActionDropDown",
  components: {
    DeleteUser,
    EditUser,
    AddUser,
  },
  props: {
    selected: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      actions: [
        { title: "Добавить" },
        { title: "Изменить" },
        { title: "Удалить" },
      ],
      isDelete: false,
      isEdit: false,
      isAdd: false,
      item: null,
    };
  },
  methods: {
    handleActionClick(action) {
      if (action.title === "Добавить") {
        this.isAdd = true;
      } else if (action.title === "Изменить" && this.selected.length > 0) {
        this.item = this.selected[0];
        this.isEdit = true;
      } else if (action.title === "Удалить" && this.selected.length > 0) {
        this.item = this.selected[0];
        this.isDelete = true;
      }
    },
  },
};
</script>

<style scoped>
.full-width-btn {
  width: 100%;
}
</style>
