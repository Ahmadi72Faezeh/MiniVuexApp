<template>
  <header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true"/>
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <Popover class="relative">
          <PopoverButton class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            <!--            Product-->
            <!--            <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />-->
          </PopoverButton>

          <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
                      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
                      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel
                class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div class="p-4">
                <div v-for="item in products" :key="item.name"
                     class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div
                      class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                               aria-hidden="true"/>
                  </div>
                  <div class="flex-auto">
                    <a :href="item.href" class="block font-semibold text-gray-900">
                      {{ item.name }}
                      <span class="absolute inset-0"/>
                    </a>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                <a v-for="item in callsToAction" :key="item.name" :href="item.href"
                   class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                  <component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/>
                  {{ item.name }}
                </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
        <RouterLink to="/" class="text-sm font-semibold leading-6 text-gray-900 cursor-pointer ">Home</RouterLink>
        <RouterLink to="/posts" class="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">Posts</RouterLink>
        <RouterLink to="/users" class="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">Users</RouterLink>
        <RouterLink to="/task" class="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">Task</RouterLink>
        <RouterLink to="/product" class="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">Product
        </RouterLink>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <router-link to="/addProduct">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="size-6 relative">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
            </svg>
          </router-link>
          <CountOfProduct></CountOfProduct>
        </div>
      </PopoverGroup>

    </nav>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10"/>
      <DialogPanel
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">


          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true"/>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <RouterLink to="/"
                          class="-mx-3 px-3 block py-2 rounded-lg text-base font-semibold leading-7 text-gray-900 cursor-pointer hover:bg-gray-50">
                Home
              </RouterLink>
              <RouterLink to="/posts"
                          class="-mx-3 px-3 block py-2 rounded-lg text-base font-semibold leading-7 text-gray-900 cursor-pointer hover:bg-gray-50">
                Posts
              </RouterLink>
              <RouterLink to="/users"
                          class="-mx-3 px-3 block py-2 rounded-lg text-base font-semibold leading-7 text-gray-900 cursor-pointer hover:bg-gray-50">
                Users
              </RouterLink>
              <RouterLink to="/task"
                          class="-mx-3 px-3 block py-2 rounded-lg text-base font-semibold leading-7 text-gray-900 cursor-pointer hover:bg-gray-50">
                Task
              </RouterLink>
              <RouterLink to="/product"
                          class="-mx-3 px-3 block py-2 rounded-lg text-base font-semibold leading-7 text-gray-900 cursor-pointer hover:bg-gray-50">
                Product
              </RouterLink>
            </div>
            <div class="py-6">
              <router-link to="/addProduct">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="size-5 relative">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
                </svg>

              </router-link>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import {ref} from 'vue'
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import {PhoneIcon, PlayCircleIcon} from '@heroicons/vue/20/solid'
import {RouterLink} from 'vue-router';
import CountOfProduct from "@/components/pages/products/CountOfProduct";

const products = [
  {name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon},
  {name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon},
  {name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon},
  {name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon},
  {name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon},
]
const callsToAction = [
  {name: 'Watch demo', href: '#', icon: PlayCircleIcon},
  {name: 'Contact sales', href: '#', icon: PhoneIcon},
]


const mobileMenuOpen = ref(false)


</script>

<style scoped>
.router-link-active {
  font-weight: bolder !important;
  border-bottom: 1px solid black !important;
}


.positionBadges {
  top: 0;
  left: 0;
}
</style>