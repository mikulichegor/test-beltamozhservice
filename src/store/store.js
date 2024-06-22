import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const apiUrl = "https://retoolapi.dev/D6xLg4/data";

export default new Vuex.Store({
  state: {
    users: [],
    filteredUsers: [],
    user: null,
    showLeftBar: false,
    showFilterBar: false,
    selectedOption: 0,
    isFiltered: false,
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setFilteredUsers(state, filteredUsers) {
      state.filteredUsers = filteredUsers;
    },
    setUser(state, user) {
      state.user = user;
    },
    setShowLeftBar(state) {
      state.showLeftBar = !state.showLeftBar;
    },
    setShowFilterBar(state) {
      state.showFilterBar = !state.showFilterBar;
    },
    setSelectedOption(state, selectedOption) {
      state.selectedOption = selectedOption;
    },
    setIsFiltered(state, isFiltered) {
      state.isFiltered = isFiltered;
    },
  },
  actions: {
    fetchUsers({ commit }) {
      axios
        .get(apiUrl)
        .then((response) => {
          commit("setUsers", response.data);
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
    fetchUser({ commit }, id) {
      axios
        .get(`${apiUrl}/${id}`)
        .then((response) => {
          commit("setUser", response.data);
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
        });
    },
    deleteUser({ commit }, id) {
      axios
        .delete(`${apiUrl}/${id}`)
        .then(() => {
          commit("setUsers", []);

          this.dispatch("fetchUsers");
        })
        .catch((error) => {
          console.error(`Error deleting user with id ${id}:`, error);
        });
    },
    updateUser({ commit }, userData) {
      const { id, updatedData } = userData;
      axios
        .put(`${apiUrl}/${id}`, updatedData)
        .then(() => {
          commit("setUser", updatedData);
          this.dispatch("fetchUsers");
        })
        .catch((error) => {
          console.error(`Error updating user with id ${id}:`, error);
        });
    },
    addUser({ commit, state }, newUser) {
      const maxId = state.users.reduce(
        (max, user) => (user.id > max ? user.id : max),
        0
      );
      newUser.id = maxId + 1;

      console.log(newUser);
      return axios
        .post(apiUrl, newUser)
        .then((response) => {
          commit("setUsers", [...state.users, response.data]);
          return response.data;
        })
        .catch((error) => {
          console.error("Error adding user:", error);
          throw error;
        });
    },
  },
  getters: {
    users: (state) => state.users,
    filteredUsers: (state) => state.users,
    user: (state) => state.user,
    showLeftBar: (state) => state.showLeftBar,
    showFilterBar: (state) => state.showFilterBar,
    selectedOption: (state) => state.selectedOption,
    isFiltered: (state) => state.isFiltered,
  },
});
