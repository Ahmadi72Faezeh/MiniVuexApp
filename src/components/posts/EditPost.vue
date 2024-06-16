<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="grid grid-cols-4 gap-4 p-10">
        <div class="flex justify-center ">
          <label for="title" class="p-3 font-bold text-md font-mono">Title:</label>
          <input type="text" id="title" v-model="form.title" class="border-b-cyan-900 border-2 h-12">
        </div>
        <div class="flex justify-center ">
          <label for="body" class="p-3 font-bold text-md font-mono">Message:</label>
          <textarea cols="50" rows="5" id="body" v-model="form.body" class="border-b-cyan-900 border-2"></textarea>
        </div>
        <div class="flex justify-end h-12 mt-20">
          <button type="submit" class="bg-blue-600 text-white  rounded-md btn-padding">Submit</button>

        </div>


      </div>


    </form>


  </div>

</template>

<script>
import {onMounted, reactive, ref,} from 'vue'
import axios from "axios";
import {useRoute, useRouter} from "vue-router";

export default {

  name: "EditPost",
  setup() {

    const form = reactive({
      title: null,
      body: null
    })
    const post = ref(null)
    const route = useRoute();
    const router = useRouter();

    function getPosts() {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
          .then(response => {
            post.value = response.data;

            form.title = post.value.title;
            form.body = post.value.body
          })
          .catch(error => {
            console.error('Error fetching users:', error);
          });
    }

    function submitForm() {
      axios.put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {form})
          .then(response => {
            router.push('/posts')
            console.log(response)
          })
          .catch(error => {
            console.error('Error fetching users:', error);
          });
    }

    onMounted(() => {
      getPosts()
    })
    return {form, post, submitForm}
  }

}
</script>

<style scoped>
button, input, optgroup, select, textarea {
  padding: 5px 5px;
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  margin: 0;
  /* padding: 0; */
}

.btn-padding {
  padding: 10px 10px !important;
}

</style>