<template>
  <div class="px-5">
    <div class="my-3">
      <h2 class="font-bold text-2xl">Creat Post:</h2>
    </div>

    <form @submit.prevent="submit">
      <div class="my-3">
        <div class="py-3">
          <lable for="title" class="font-mono font-medium">Title:</lable>
        </div>
        <div>
          <input v-model.lazy="form.title" id="title" type='text'
                 class="form-input px-4 py-3 rounded-full border-2 border-blue-900">
        </div>
      </div>
      <div class="">
        <div class="py-3">
          <label for="body" class="font-mono font-medium ">Body: </label>
        </div>
        <div>

        <textarea v-model.lazy="form.body" id="body" class="form-input px-4 py-3 rounded-md border-2 border-blue-900"
                  cols="23"
                  rows="5"></textarea>
        </div>
      </div>
      <button class="text-white bg-gray-800 rounded-md py-2 px-4">
        submit
      </button>

    </form>
  </div>

</template>

<script setup>

import {reactive} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

const form = reactive({
  title: null,
  body: null
})
const router = useRouter()

function submit() {
  axios.post(`https://jsonplaceholder.typicode.com/posts/`, {form})
      .then(response => {
        router.push('/posts')
        console.log(response)
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
}




</script>

<style scoped>

</style>