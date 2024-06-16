<template>
  <div class="container mx-auto mt-4">
    <div class="px-3 md:px-3">
      <button class="py-2 px-3 bg-blue-500 text-white font-mono font-bold rounded-md mb-4" @click="creat">Creat post</button>
    </div>
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4">
      <div v-for="(post, index) in posts" :key="index"
           class="bg-gray-100 rounded-md shadow-md cursor-pointer transition duration-150 ease-out hover:bg-gray-200">
        <div>
          <div class="p-4">
            <h1 class="p-2 font-bold text-md">{{ post.title }}</h1>
            <hr>
            <p class="p-2">{{ post.body }}</p>
          </div>
          <div class="flex justify-end">
            <div class=" justify-start py-4">
              <button class="text-white bg-green-700 px-4 py-2 rounded-md" @click="gotoPosts(post.id)"> Edit</button>
            </div>
            <div class=" justify-end py-4 px-2">
              <button class="text-white bg-red-500 px-4 py-2 rounded-md" @click="openDelete"> Delete</button>

            </div>

          </div>


        </div>


      </div>

    </div>
    <div v-if="DeleteLoading">
      <DialogOfDelete @close="handleDialogClose"></DialogOfDelete>
    </div>




  </div>

</template>

<script>
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";
import DialogOfDelete from "@/components/DialogOfDelete";

export default {
  name: "PostsView",
  components: {DialogOfDelete},
  setup() {
    let posts = ref([])
    const router = useRouter();
    let DeleteLoading = ref(false)

    function getPosts() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
            posts.value = response.data;
          })
          .catch(error => {
            console.error('Error fetching users:', error);
          });
    }

    function gotoPosts(id) {
      router.push(`/posts/${id}`) // Use id in the route
    }

    function openDelete() {
      DeleteLoading.value = true;
    }

    function handleDialogClose() {
      DeleteLoading.value = false
      // Additional logic to handle the dialog close event can be added here
    }

    function creat(){
      router.push('/creatPost')
    }

    onMounted(() => {
      getPosts();
    });

    return {posts, gotoPosts, DeleteLoading, openDelete,handleDialogClose, creat}
  }
}
</script>

<style scoped>

</style>