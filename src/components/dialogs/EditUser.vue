<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="text-h5"
          >Редактирование пользователя: {{ itemToEdit.firstName }}</span
        >
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-select
                :items="[true, false]"
                v-model="inputObject.status"
                label="Статус"
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Имя"
                v-model="inputObject.firstName"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Фамилия"
                v-model="inputObject.lastName"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Компания"
                v-model="inputObject.company"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Специальность"
                v-model="inputObject.jobTitle"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Телефон"
                v-model="inputObject.phone"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="E-mail"
                v-model="inputObject.email"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="Интересы"
                v-model="inputObject.interests"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="cancelEdit"> Отмена </v-btn>
        <v-btn color="green darken-1" text @click="confirmEdit">
          Сохранить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    itemToEdit: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialog: true,
      inputObject: { ...this.itemToEdit },
    };
  },
  methods: {
    ...mapActions(["updateUser"]),
    cancelEdit() {
      this.dialog = false;
      this.$emit("close");
    },
    confirmEdit() {
      this.updateUser({ id: this.itemToEdit.id, updatedData: this.inputObject })
        .then(() => {
          this.dialog = false;
          this.$emit("close");
        })
        .catch((error) => {
          console.error("Error updating user:", error);
        });
    },
  },
};
</script>
