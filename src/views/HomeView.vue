<script setup>
import { onMounted, ref } from 'vue'
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
</script>

<template>
  <section>
    <Header />
    <h1 class="text-xl">
      Hello <span class="text-green-500 font-medium">{{ userName }}</span
      >, Welcome to Home Page
    </h1>
  </section>
</template>

<style scoped></style>
