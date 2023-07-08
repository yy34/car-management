<template>
  <div
    id="modal"
    tabindex="-1"
    aria-hidden="true"
    class="flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-h-full max-w-sm">
      <!-- Modal content -->

      <form
        action="#"
        class="relative bg-white rounded-lg shadow dark:bg-gray-700"
      >
        <!-- Modal header -->
        <div
          class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Edit Car
          </h3>
          <button
            @click="closeModal"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <div class="grid gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label
                for="list_id"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >ID</label
              >
              <input
                type="text"
                name="list_id"
                id="list_id"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                disabled
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="car_id"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >CAR</label
              >
              <input
                type="text"
                name="car_id"
                id="car_id"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                disabled
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="horse_power"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >HORSE POWER</label
              >
              <input
                type="number"
                maxlength="4"
                minlength="2"
                name="horse_power"
                id="horse_power"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required=""
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="price"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >PRICE</label
              >
              <div class="relative mt-2 rounded-md shadow-sm">
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                >
                  <span class="text-gray-500 sm:text-sm">€</span>
                </div>

                <input
                  type="text"
                  name="price"
                  id="price"
                  class="shadow-sm bg-gray-50 pl-7 pr-20 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="color"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >COLOR</label
              >
              <div class="relative mt-2 rounded-md shadow-sm">
                <ul
                  class="text-sm font-medium text-gray-900 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <li
                    class="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-b rounded-t-lg dark:border-gray-600"
                  >
                    <div class="flex items-center pl-3">
                      <input
                        id="color"
                        type="radio"
                        value=""
                        name="list-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        for="color"
                        class="w-full flex items-center gap-2 ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        <div
                          class="h-3 w-4"
                          :class="`${colorVariants['Red']}`"
                        ></div>
                        Red
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="in_stock"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >STOCK</label
              >
              <div class="flex items-center">
                <input
                  id="in_stock"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="in_stock"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >In Stock</label
                >
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex items-center justify-between p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <button
            @click="closeModal"
            type="submit"
            class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </button>
          <button
            @click="closeModal"
            type="submit"
            class="text-white bg-red-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

export default {
  data() {
    return {
      colorVariants: CONSTANTS.colorVariants,
      selectedCarId: "",
    };
  },
  setup(props, context) {
    const selectedCarId = props.selectedCar;
    const closeModal = () => {
      context.emit("openEditModal");
    };

    fetch(`${import.meta.env.VITE_API_URL}/${selectedCarId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
      });

    return {
      closeModal,
    };
  },
  props: ["selectedCar"],
};
</script>

<style lang="scss" scoped></style>
