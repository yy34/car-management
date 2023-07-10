import { createStore } from "vuex";
import axios from "axios";
import { useToast } from "vue-toastification";
const toast = useToast();

export default createStore({
  state: {
    cars: [],
    selectedCar: "",
    isLoading: false,
    apiURL: "http://localhost:3000/cars",
  },
  getters: {
    getCars: ({ cars }) => cars,
    getCarById: ({ selectedCar }) => selectedCar,
    getLoadingStatus: ({ isLoading }) => isLoading,
    getAllColors: ({ cars }) => {
      var uniqColors = cars
        .map((i) => i.color)
        .filter((value, index, array) => array.indexOf(value) === index);
      return uniqColors;
    },
  },

  mutations: {
    SET_CARS(state, cars) {
      state.cars = cars;
    },
    SET_CAR_BY_ID(state, car) {
      state.selectedCar = car;
    },
    SET_LOADING(state, loading) {
      state.isLoading = loading;
    },
    EDIT_CAR(state, car) {
      state.cars[car.id] = car;
    },
  },
  actions: {
    async fetchCars({ commit }) {
      commit("SET_LOADING", true);
      try {
        const { data } = await axios.get(this.state.apiURL);
        commit("SET_CARS", data);
        commit("SET_LOADING", false);
      } catch (error) {
        toast.error(error);
      }
    },
    async fetchCarById({ commit }, id) {
      try {
        const { data } = await axios.get(`${this.state.apiURL}/${id}`);
        commit("SET_CAR_BY_ID", data);
      } catch (error) {
        toast.error(error);
      }
    },
    async editCarById({ commit }, req) {
      try {
        const { data } = await axios.put(
          `${this.state.apiURL}/${req.id}`,
          req.car
        );
        commit("EDIT_CAR", data);
        toast.info(`Car successfully edited.`);
      } catch (error) {
        toast.error(error);
      }
    },
  },
});
