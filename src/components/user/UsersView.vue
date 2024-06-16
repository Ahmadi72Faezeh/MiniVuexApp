<template>
  <div class="container mx-auto mt-4">
    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4">
      <div v-for="(user, index) in users" :key="index"
           class="bg-gray-100 rounded-md shadow-md cursor-pointer transition duration-150 ease-out hover:bg-gray-200">
        <div @click="gotoUsers(user.id)">
          <div class="p-3">
            <div class="text-center">
              <p class="container mx-auto text-md font-semibold font-mono pt-2">{{ user.name }}</p>
            </div>
            <div class="text-center font-md font-mono pt-3">
              <p>{{ user.company.name }}</p>
            </div>

          </div>
          <hr class="width-2">

          <div class="columns-2">
            <div class="text-center p-4 cursor-pointer font-md font-mono hover:underline ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="size-6 mx-2 svg">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
              </svg>
              Email
            </div>
            <div class="text-center p-4 cursor-pointer font-md font-mono hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="size-6 mx-2 svg">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
              </svg>
              Call
            </div>


          </div>
        </div>


      </div>

    </div>


  </div>


</template>

<script>
import axios from "axios";
import {onMounted, ref} from 'vue'
import {useRouter} from "vue-router"

export default {
  name: "UsersView",
  setup() {
    let users = ref([])
    // const id = ref(route.params)
    // const route = useRoute()
    const router = useRouter()

    function getUsers() {
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            users.value = response.data;
          })
          .catch(error => {
            console.error('Error fetching users:', error);
          });
    }

    function gotoUsers(id) {

      router.push(`/users/${id}`) // Use id in the route
    }

    onMounted(() => {
      getUsers();
    });

    return {getUsers, users, gotoUsers}
  }
}
</script>

<style scoped>
.svg {
  display: unset !important;
  vertical-align: bottom !important;
}
</style>
