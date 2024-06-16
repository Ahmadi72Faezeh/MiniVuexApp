<template>
  <div class="relative">
    <span class="sr-only">Notifications</span>
    <div
        class="absolute top-[-20px] left-[-10px] butt mt-2 mr-2 md:mt-3 md:mr-3 lg:mt-4 lg:mr-4 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full dark:border-gray-900">
      {{ count }}
    </div>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()
const count = computed(() => store.getters['product/cartCount']);

</script>

<style scoped>

</style>