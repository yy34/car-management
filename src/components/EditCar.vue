<template>
  <div
    id="modal"
    tabindex="-1"
    aria-hidden="true"
    class="flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-h-full max-w-sm">
      <form
        action="#"
        class="relative bg-white rounded-lg shadow dark:bg-gray-700"
      >
        <div
          class="flex items-center justify-between py-2 px-4 border-b rounded-t dark:border-gray-600"
        >
          <h3
            class="text-base font-semibold text-left text-gray-500 dark:text-white"
          >
            Edit Car
          </h3>
          <button
            @click="closeModal"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-500 rounded-lg text-xs w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>

        <div class="py-3 px-6 space-y-6">
          <div class="grid gap-4">
            <div class="col-span-6 sm:col-span-3">
              <label
                for="list_id"
                class="block mb-2 text-xs font-bold text-gray-700 dark:text-white"
                >ID</label
              >
              <input
                v-model="viewCarId"
                type="text"
                name="list_id"
                id="list_id"
                disabled
                class="pointer-events-none shadow-sm bg-gray-50 border border-gray-300 text-gray-400 text-xs rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <div
                v-if="v$?.id?.$error"
                class="py-2 px-2 my-2 text-xs text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                {{ v$?.id?.$errors[0]?.$message }}
              </div>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="car_id"
                class="block mb-2 text-xs font-bold text-gray-700 dark:text-white"
                >CAR</label
              >
              <input
                v-model="car.carId"
                type="text"
                name="car_id"
                id="car_id"
                class="pointer-events-none shadow-sm bg-gray-50 border border-gray-300 text-gray-400 text-xs rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                disabled
              />
              <div
                v-if="v$?.carId?.$error"
                class="py-2 px-2 my-2 text-xs text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                {{ v$?.carId?.$errors[0]?.$message }}
              </div>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="horse_power"
                class="block mb-2 text-xs font-bold text-gray-700 dark:text-white"
                >HORSE POWER</label
              >
              <input
                v-model="car.hp"
                type="number"
                step="5"
                name="horse_power"
                id="horse_power"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-500 text-xs rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

              <div
                v-if="v$?.hp?.$error"
                class="py-2 px-2 my-2 text-xs text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                {{ v$?.hp?.$errors[0]?.$message }}
              </div>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="price"
                class="block mb-2 text-xs font-bold text-gray-700 dark:text-white"
                >PRICE</label
              >
              <div class="relative mt-2 rounded-md shadow-sm">
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                >
                  <span class="text-gray-500 sm:text-xs dark:text-white"
                    >€</span
                  >
                </div>

                <input
                  v-model="car.price"
                  type="number"
                  min="0"
                  max="1000000000"
                  step="1"
                  name="price"
                  id="price"
                  class="shadow-sm bg-gray-50 pl-7 border border-gray-300 text-gray-500 text-xs rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div
                v-if="v$?.price?.$error"
                class="py-2 px-2 my-2 text-xs text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                {{ v$?.price?.$errors[0]?.$message }}
              </div>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="color"
                class="block mb-2 text-xs font-bold text-gray-700 dark:text-white"
                >COLOR</label
              >
              <div class="relative mt-2 rounded-md shadow-sm">
                <ul
                  class="grid grid-cols-2 gap-x-2 text-xs font-medium text-gray-500 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <li
                    v-for="color in colors"
                    :key="color.id"
                    class="shadow-sm mb-2 bg-gray-50 border border-gray-300 text-gray-500 text-xs rounded-lg focus:ring-blue-600 focus:border-blue-600 block dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-b rounded-t-lg dark:border-gray-600"
                  >
                    <div class="flex items-center pl-3">
                      <input
                        v-model="car.color"
                        :id="'color' + color"
                        type="radio"
                        :value="color"
                        name="list-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <div
                        v-if="v$?.color?.$error"
                        class="py-2 px-2 my-2 text-xs text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                        role="alert"
                      >
                        {{ v$?.color?.$errors[0]?.$message }}
                      </div>
                      <label
                        :for="'color' + color"
                        class="w-full cursor-pointer p-2.5 h-full flex items-center gap-2 ml-3 text-xs font-medium text-gray-500 dark:text-gray-300"
                      >
                        {{ color }}
                        <div
                          class="h-4 w-4 rounded-full ml-auto"
                          :class="`${colorVariants[color]}`"
                        ></div>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="in_stock"
                class="block mb-2 text-xs font-bold text-gray-700 dark:text-white"
                >STOCK</label
              >
              <label
                for="in_stock"
                class="relative inline-flex items-center cursor-pointer"
              >
                <input
                  v-model="car.inStock"
                  id="in_stock"
                  type="checkbox"
                  class="sr-only peer"
                />
                <div
                  v-if="v$?.inStock?.$error"
                  class="py-2 px-2 my-2 text-xs text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  {{ v$?.inStock?.$errors[0]?.$message }}
                </div>
                <div
                  class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                ></div>
              </label>
            </div>
          </div>
        </div>

        <div
          class="flex items-center justify-between px-6 py-4 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <button
            @click.prevent="saveCar"
            type="submit"
            class="mb-2 md:mb-0 bg-white px-5 py-2 text-xs shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100"
          >
            Save
          </button>
          <button
            @click="closeModal"
            type="submit"
            class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-xs shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import CONSTANTS from "../data/constants";
import { useStore } from "vuex";
import { computed } from "vue";
import useValidate from "@vuelidate/core";
import { required, numeric, between, maxLength } from "@vuelidate/validators";
import { useToast } from "vue-toastification";
const toast = useToast();
export default {
  setup(props, context) {
    const store = useStore();
    store.dispatch("fetchCarById", props.selectedCar);
    const car = computed(() => store.getters.getCarById);
    const colors = computed(() => store.getters.getAllColors);
    const colorVariants = CONSTANTS.COLOR_WARIANTS;
    const rules = computed(() => {
      return {
        id: {
          required,
        },
        carId: {
          required,
        },
        hp: {
          required,
          maxLength: maxLength(3),
          between: between(100, 550),
        },
        price: {
          required,
          numeric,
          maxLength: maxLength(10),
        },
        inStock: {
          required,
        },
        color: {
          required,
        },
      };
    });

    const v$ = useValidate(rules, car);

    function editCar() {
      store.dispatch("editCarById", { id: props.selectedCar, car: this.car });
    }
    function closeModal() {
      context.emit("openEditModal");
    }

    return {
      closeModal,
      v$,
      car,
      colors,
      colorVariants,
      editCar,
    };
  },

  props: ["selectedCar"],
  computed: {
    viewCarId() {
      return this.car.id + 1;
    },
  },
  methods: {
    saveCar() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.editCar();
        this.closeModal();
      } else {
        toast.error("Form failed validation");
      }
    },
  },
};
</script>
