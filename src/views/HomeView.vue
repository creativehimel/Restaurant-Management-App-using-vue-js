<script setup>
import { onBeforeMount, onMounted, ref } from 'vue'
import router from '@/router'
import Header from '@/components/Header.vue'
const userName = ref('')
let restaurantList = ref(null)

onBeforeMount(() => {
  fetch('http://localhost:3000/restaurant')
    .then((response) => response.json())
    .then((json) => {
      restaurantList.value = json
    })
})
onMounted(() => {
  let user = localStorage.getItem('user-info')
  userName.value = JSON.parse(user).name
  if (!user) {
    router.push('/login')
  }
})
</script>

<template>
  <section>
    <Header />

    <div class="container mx-auto">
      <h1 class="text-xl my-5">
        Hello <span class="text-green-500 font-medium">{{ userName }}</span
        >, Welcome to Home Page
      </h1>
      <table class="min-w-full text-sm text-gray-700">
        <thead class="bg-gray-800 text-white text-xs uppercase font-medium">
          <tr>
            <th class="px-6 py-3 text-left tracking-wider">ID</th>
            <th class="px-6 py-3 text-left tracking-wider">Restaurant Name</th>
            <th class="px-6 py-3 text-left tracking-wider">Number</th>
            <th class="px-6 py-3 text-left tracking-wider">Address</th>
          </tr>
        </thead>
        <tbody class="bg-gray-50">
          <tr v-for="restaurant in restaurantList" :key="restaurant.id">
            <td class="px-6 py-4 whitespace-nowrap">{{ restaurant.id }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ restaurant.name }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ restaurant.number }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ restaurant.address }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped></style>
