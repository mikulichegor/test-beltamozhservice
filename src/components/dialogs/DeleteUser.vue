<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Подтвердите действие </v-card-title>
      <v-card-text>
        Вы уверены, что хотите удалить пользователя "{{
          itemToDelete.firstName
        }}"?
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="cancelDelete"> Отмена </v-btn>
        <v-btn color="green darken-1" text @click="confirmDelete">
          Удалить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    itemToDelete: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialog: true,
    };
  },
  methods: {
    ...mapActions(["deleteUser"]),
    cancelDelete() {
      this.dialog = false;
      this.$emit("close");
    },
    confirmDelete() {
      this.deleteUser(this.itemToDelete);
      this.dialog = false;
      this.$emit("close");
    },
  },
};
</script>
