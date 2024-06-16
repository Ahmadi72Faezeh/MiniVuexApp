<template>


  <div class=" container m-auto mt-6 bg-gray-100 rounded-md shadow-md  ">
    <div>
      <div class="p-3">
        <div class="my-3 text-center">
          <h1 class="text-lg font-bold">Personal Data</h1>
        </div>
        <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          <div class="text-left">
            <p class="container mx-auto text-md font-semibold font-mono pt-2">Name: {{ user?.name }}</p>
          </div>
          <div class="text-left font-semibold font-mono pt-3">
            <p>Company: {{ user?.company.name }}</p>
          </div>
          <div class="text-left font-semibold font-mono pt-3">
            <p>Username : {{ user?.username }}</p>
          </div>
        </div>

        <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          <div class="text-left">
            <p class="container mx-auto text-md font-semibold font-mono pt-2">Email: {{ user?.email }}</p>
          </div>
          <div class="text-left font-semibold font-mono pt-3">
            <p>Phone: {{ user?.phone }}</p>
          </div>
          <div class="text-left font-semibold font-mono pt-3">
            <p>Website: {{ user?.website }}</p>
          </div>
        </div>
        <hr class="mt-5">
        <div class="my-3 text-center">
          <h1 class="text-lg font-bold ">Address</h1>
        </div>

        <div class="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mb-5">
          <div class="text-left">
            <p class="container mx-auto text-md font-semibold font-mono pt-2">City:{{ user?.address.city }}</p>
          </div>
          <div class="text-left font-semibold font-mono pt-3">
            <p>Street: {{ user?.address.street }}</p>
          </div>
          <div class="text-left font-semibold font-mono pt-3">
            <p>Suite: {{ user?.address.suite }}</p>
          </div>
        </div>


      </div>

    </div>


  </div>


</template>

<script>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import axios from "axios";

export default {
  name: "UserInfoView",
  setup() {
    let user = ref(null)
    const route = useRoute()

    function getUser() {

      axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
          .then(response => {

            user.value = response.data;


          })
          .catch(error => {
            console.error('Error fetching users:', error);
          });
    }


    onMounted(() => {
      getUser();
    });

    return {user}
  }
}
</script>

<style scoped>

</style>