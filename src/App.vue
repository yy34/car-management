<script setup>
import ListCar from "./components/ListCar.vue";
import ThemeSwitch from "./components/ThemeSwitch.vue";
</script>

<template>
  <div
    class="pt-8 flex items-center justify-center bg-white dark:bg-slate-700 min-h-screen"
  >
    <ListCar></ListCar>
  </div>
  <ThemeSwitch></ThemeSwitch>
</template>
