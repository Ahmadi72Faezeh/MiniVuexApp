<template>

  <div class="container m-auto mt-10">

    <div v-if="count!==0" class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption
            class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Our products
          <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products
            designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and
            more.</p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            Product name
          </th>
          <th scope="col" class="px-6 py-3">
            Image
          </th>
          <th scope="col" class="px-6 py-3">
            Category
          </th>
          <th scope="col" class="px-6 py-3">
            Price
          </th>
          <th scope="col" class="px-6 py-3">
            Quantity
          </th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Delete</span>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in productItem" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ item.title }}
          </th>
          <td class="px-6 py-4">
            <img :src="item.image" class="size-20" alt="product">
          </td>
          <td class="px-6 py-4">
            {{ item.category }}
          </td>
          <td class="px-6 py-4">
            ${{ item.price * item.quantity }}
          </td>
          <td class="px-6 py-4">
            <button class="bg-black text-white  px-2 rounded-md text-md" @click="decrement(item.id)">-</button>
            <span class="px-3 ">
                {{ item.quantity }}
            </span>

            <button class="bg-black text-white px-2 rounded-md text-md" @click="increment(item.id)">+</button>
          </td>
          <td class="px-6 py-4 text-right">
            <button class="bg-red-600 text-white py-1  px-2 rounded-md text-md" @click="deleteItem(item.id)">Delete
            </button>
          </td>
        </tr>


        </tbody>
        <tfoot class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3"><span>Total : {{ total }}</span></th>
          <th scope="col" colspan="5" class="px-6 py-3">
            <button class="bg-red-600 text-white py-1  px-2 rounded-md text-md font-medium" @click="clearList()">Clear List
            </button>
          </th>

        </tr>

        </tfoot>

      </table>
    </div>
    <div v-else>
      <EmptyProduct></EmptyProduct>
    </div>
  </div>


</template>

<script setup>


import {useStore} from "vuex";
import {computed} from "vue";
import EmptyProduct from "@/components/pages/products/EmptyProduct";

const store = useStore()
const productItem = computed(() => store.getters['product/sendCart']);
const count = computed(() => store.getters['product/cartCount']);
const total = computed(() => store.getters["product/totalAmount"]);

function increment(id) {
  store.dispatch('product/increment', id)
}

function decrement(id) {
  store.dispatch('product/decrement', id)
}

function deleteItem(id) {
  store.dispatch('product/deleteItem', id)
}

function clearList() {
  store.dispatch('product/clearList')
}


</script>

<style scoped>
.btnHover {
  border: solid rgb(209 213 219) 1px;
  transition-delay: 0.1s;
}

.btnHover:hover {
  background: inherit;
  border: solid rgb(31 41 55) 1px;
  color: rgb(31 41 55);
  transition: ease-in-out;
}
</style>