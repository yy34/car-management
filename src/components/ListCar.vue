<template>
  <div v-if="status">
    <svg
      aria-hidden="true"
      class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <span class="sr-only">Loading...</span>
  </div>
  <div
    v-if="!status && cars"
    class="relative overflow-x-auto shadow-md sm:rounded-lg p-5"
  >
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <caption
        class="p-5 text-base font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
      >
        Car Management
        <p class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">
          View or edit your car list.
        </p>
      </caption>

      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th
            v-for="column in columns"
            :key="column.id"
            scope="col"
            class="px-6 py-3"
          >
            {{ column.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(car, index) in cars" :key="car.id">
          <tr
            :class="{
              'bg-gray-50 dark:bg-gray-800 dark:border-gray-700':
                index % 2 !== 0,
              'bg-white dark:bg-gray-900 dark:border-gray-700 ': index % 2 == 0,
            }"
            class="text-xs border-b hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">
              {{ car.id + 1 }}
            </td>
            <td class="px-6 py-4">{{ car.carId }}</td>
            <td class="px-6 py-4 capitalize">
              <span
                class="font-medium mr-2 px-2.5 py-0.5 rounded"
                :class="{
                  'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300':
                    car.inStock,
                  'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300':
                    !car.inStock,
                }"
                >{{ car.inStock }}</span
              >
            </td>
            <td class="px-6 py-4">{{ car.hp }}</td>
            <td class="px-6 py-4">{{ priceChange(car.price) }} €</td>
            <td class="px-6 py-4">
              <div class="flex items-center">
                <div
                  class="h-4 w-4 mr-2 rounded-full"
                  :class="`${colorVariants[car.color]}`"
                ></div>
                {{ car.color }}
              </div>
            </td>
            <td class="px-6 py-4">
              <button
                type="button"
                id="button"
                @click="openEditModal(car?.id)"
                class="mb-2 md:mb-0 bg-white px-5 py-1.5 text-xs shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100 dark:bg-slate-600 dark:text-white dark:border-gray-500"
              >
                Edit
              </button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
  <EditCar
    v-if="isOpen"
    :isOpen="isOpen"
    :selectedCar="selectedCar"
    @openEditModal="openEditModal"
  />
</template>

<script>
import EditCar from "./EditCar.vue";
import CONSTANTS from "../data/constants";
import { useStore } from "vuex";
import { computed, ref } from "vue";
export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchCars");
    const colorVariants = CONSTANTS.COLOR_WARIANTS;
    const columns = CONSTANTS.COLUMNS;
    const isOpen = ref(false);
    const selectedCar = ref("");
    const cars = computed(() => store.getters.getCars);
    const status = computed(() => store.getters.getLoadingStatus);

    return {
      colorVariants,
      cars,
      status,
      columns,
      isOpen,
      selectedCar,
    };
  },
  components: {
    EditCar,
  },

  methods: {
    openEditModal(car) {
      this.selectedCar = car;
      this.isOpen = !this.isOpen;
    },
    priceChange(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>

<style lang="scss" scoped></style>
