<template>
  <div class="filter-wrapper">
    <v-card>
      <v-card-text>
        <p>Имя</p>
        <v-text-field v-model="firstName" solo clearable></v-text-field>

        <p>Фамилия</p>
        <v-text-field v-model="lastName" solo clearable></v-text-field>

        <p>Компания</p>
        <v-text-field v-model="company" solo clearable></v-text-field>

        <p>Специальность</p>
        <v-text-field v-model="jobTitle" solo clearable></v-text-field>

        <p>Телефон</p>
        <v-text-field v-model="phone" solo clearable></v-text-field>

        <p>E-mail</p>
        <v-text-field v-model="email" solo clearable></v-text-field>

        <p>Интересы</p>
        <v-text-field v-model="interests" solo clearable></v-text-field>

        <v-card-actions class="justify-end">
          <v-btn @click="clearFilter"> Очистить </v-btn>
          <v-btn color="primary" @click="filterData"> Применить </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      company: "",
      jobTitle: "",
      phone: "",
      email: "",
      interests: "",
    };
  },
  methods: {
    ...mapMutations(["setFilteredUsers", "setIsFiltered"]),
    clearFilter() {
      this.setIsFiltered(false),
        (this.firstName = ""),
        (this.lastName = ""),
        (this.company = ""),
        (this.jobTitle = ""),
        (this.phone = ""),
        (this.email = ""),
        (this.interests = "");
    },
    filterData() {
      this.setIsFiltered(true);

      const filters = {
        firstName: this.firstName,
        lastName: this.lastName,
        company: this.company,
        jobTitle: this.jobTitle,
        phone: this.phone,
        email: this.email,
        interests: this.interests,
      };

      const applyFilter = (users, field, value) => {
        return users.filter((user) => {
          return (
            user[field] &&
            user[field].toLowerCase().includes(value.toLowerCase())
          );
        });
      };

      const fields = Object.keys(filters);

      let filteredUsers = [...this.users];
      fields.forEach((field) => {
        const value = filters[field];
        if (value) {
          filteredUsers = applyFilter(filteredUsers, field, value);
        }
      });

      this.setFilteredUsers(filteredUsers);

      return filteredUsers;
    },
  },
  computed: {
    ...mapState(["users", "filteredUsers", "isFiltered"]),
  },
};
</script>

<style>
.filter-wrapper {
  min-width: 360px;
}
</style>
