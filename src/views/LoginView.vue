<script setup>
import { onMounted, reactive } from 'vue'
import axios from 'axios'
import router from '@/router'

const logInData = reactive({
  email: '',
  password: ''
})
async function logIn() {
  let result = await axios.get(
    `http://localhost:3000/users?email=${logInData.email}&password=${logInData.password}`
  )
  if (result.status == 200 && result.data.length > 0) {
    localStorage.setItem('user-info', JSON.stringify(result.data[0]))
    router.push('/')
  }
}
onMounted(() => {
  let user = localStorage.getItem('user-info')
  if (user) {
    router.push('/')
  }
})
</script>

<template>
  <section class="h-screen font-nunito">
    <div class="container mx-auto flex flex-col items-center justify-center mt-28">
      <div class="max-w-md w-full bg-gray-white shadow shadow-gray-300 py-10 px-10 rounded">
        <h1 class="text-center font-bold text-3xl tracking-wider pb-10">Log In</h1>
        <div class="flex flex-col space-y-3">
          <div class="flex flex-col space-y-2">
            <label class="text-lg font-medium tracking-wide" for="email">Email</label>
            <input
              v-model="logInData.email"
              class="border px-3 py-1.5 rounded focus:outline-indigo-300"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div class="flex flex-col space-y-2 pb-3">
            <label class="text-lg font-medium tracking-wide" for="password">Password</label>
            <input
              v-model="logInData.password"
              class="border px-3 py-1.5 rounded focus:outline-indigo-300"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <button
            @click="logIn()"
            class="bg-indigo-500 px-6 py-3 rounded tracking-wider text-white text-lg hover:bg-indigo-600 duration-300"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
