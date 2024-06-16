<template>
  <div>
    <form>
      <div class="grid gap-6 mb-6 md:grid-cols-2 grid-cols-1">
        <div class=" px-5 md:px-0">
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task</label>
          <input v-model.lazy="titleOfTask" type="text" id="first_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Today" required/>
          <small class="text-sm text-red-600 p-2">{{ invalidValue }}</small>
        </div>
      </div>
      <div class="grid md:grid-cols-2 grid-cols-1 mb-4">
        <div class="flex justify-end">
          <button type="button"
                  @click="submit"
                  class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Submit
          </button>
        </div>
      </div>


    </form>

  </div>

</template>

<script setup>
import {ref} from "vue";
import {useStore} from "vuex";

const titleOfTask = ref(null)
const store = useStore();
const invalidValue = ref('')

function submit() {
  if (titleOfTask.value === '' || titleOfTask.value == null) {
    invalidValue.value = 'This field is required'

  } else {
    invalidValue.value = null;
    store.dispatch("task/createTask" , titleOfTask.value)
    titleOfTask.value = null
  }
}


</script>

<style scoped>

</style>