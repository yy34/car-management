import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    cars: [],
    isLoading: false,
  },
  getters: {
    getCars: (state) => state.cars,
    getLoadingStatus: (state) => state.isLoading,
  },

  mutations: {
    SET_CARS(state, cars) {
      state.cars = cars;
    },
    SET_LOADING(state, loading) {
      state.isLoading = loading;
    },
  },
  actions: {
    async fetchCars({ commit }) {
      commit("SET_LOADING", true);
      try {
        const { data } = await axios.get(import.meta.env.VITE_API_URL);
        commit("SET_CARS", data);
        commit("SET_LOADING", false);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
