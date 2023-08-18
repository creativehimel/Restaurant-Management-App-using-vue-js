<script setup>
import { onMounted, reactive, ref } from 'vue'
import router from '@/router'
import Header from '@/components/Header.vue'
const userName = ref('')
onMounted(() => {
  let user = localStorage.getItem('user-info')
  userName.value = JSON.parse(user).name
  if (!user) {
    router.push('/login')
  }
})
const restaurantDetails = reactive({
  name: '',
  number: '',
  address: ''
})
function addRestaurant() {}
</script>

<template>
  <section class="font-nunito">
    <Header />
    <h1 class="text-xl">
      Hello <span class="text-green-500 font-medium">{{ userName }}</span
      >, Welcome to Add Restaurant Page
    </h1>

    <div class="container mx-auto flex flex-col items-center justify-center mt-16">
      <div class="max-w-md w-full bg-gray-white shadow shadow-gray-300 py-10 px-10 rounded">
        <h1 class="text-center font-bold text-3xl tracking-wider pb-10">Add Restaurant</h1>
        <div class="flex flex-col space-y-3">
          <div class="flex flex-col space-y-2">
            <label class="text-lg font-medium tracking-wide" for="name">Restaurant Name: </label>
            <input
              v-model="restaurantDetails.name"
              class="border px-3 py-1.5 rounded focus:outline-indigo-300"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div class="flex flex-col space-y-2">
            <label class="text-lg font-medium tracking-wide" for="email">Contact Number</label>
            <input
              v-model="restaurantDetails.number"
              class="border px-3 py-1.5 rounded focus:outline-indigo-300"
              type="text"
              name="email"
              id="email"
            />
          </div>
          <div class="flex flex-col space-y-2 pb-3">
            <label class="text-lg font-medium tracking-wide" for="password">Address</label>
            <input
              v-model="restaurantDetails.address"
              class="border px-3 py-1.5 rounded focus:outline-indigo-300"
              type="text"
              name="password"
              id="password"
            />
          </div>
          <button
            @click="addRestaurant()"
            class="bg-indigo-500 px-6 py-3 rounded tracking-wider text-white text-lg hover:bg-indigo-600 duration-300"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
