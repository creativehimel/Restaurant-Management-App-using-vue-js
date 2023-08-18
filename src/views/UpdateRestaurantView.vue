<script setup>
import { onMounted } from 'vue'
import router from '@/router'
import Header from '@/components/Header.vue'

onMounted(() => {
  let user = localStorage.getItem('user-info')
  if (!user) {
    router.push('/login')
  }
})
</script>

<template>
  <section>
    <Header />
    <h1>Hello User, Welcome to Home Page</h1>
  </section>
</template>

<style scoped></style>
