<template>
  <div class=" grid grid-cols-12 flex justify-start">
    <select v-model.lazy="number" @change="filterTask" id="large"
            class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option selected>Filter</option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
    </select>
  </div>

</template>

<script setup>
import {useStore} from "vuex";
import {ref} from "vue";

const store = useStore();
const number = ref('Filter')

function filterTask() {
  store.dispatch('task/filterTask', number.value)

}
</script>

<style scoped>

</style>