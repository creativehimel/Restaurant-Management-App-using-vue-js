<script setup></script>

<template>
  <section class="bg-white shadow py-2">
    <div class="container mx-auto flex items-center justify-between">
      <img class="w-[90px]" src="../assets/images/logo.png" alt="Logo" />
      <ul class="flex gap-3">
        <li
          class="hover:bg-indigo-500 px-3 py-2 rounded hover:text-white font-bold text-gray-600 text-sm"
        >
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li
          class="hover:bg-indigo-500 px-3 py-2 rounded hover:text-white font-bold text-gray-600 text-sm"
        >
          <RouterLink to="/">About</RouterLink>
        </li>
        <li
          class="hover:bg-indigo-500 px-3 py-2 rounded hover:text-white font-bold text-gray-600 text-sm"
        >
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li
          class="hover:bg-indigo-500 px-3 py-2 rounded hover:text-white font-bold text-gray-600 text-sm"
        >
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li
          class="hover:bg-indigo-500 px-3 py-2 rounded hover:text-white font-bold text-gray-600 text-sm"
        >
          <RouterLink to="/">Home</RouterLink>
        </li>
      </ul>
      <div class="flex gap-5">
        <button
          class="hover:border-2 hover:border-indigo-500 hover:bg-white hover:text-indigo-600 bg-indigo-500 shadow shadow-indigo-500/40 duration-300 px-5 py-2 rounded text-white font-bold text-sm"
        >
          <RouterLink to="/login">Log In</RouterLink>
        </button>
        <button
          class="border-2 border-indigo-500 text-indigo-600 shadow shadow-indigo-500/40 hover:bg-indigo-500 hover:bg-indigo-600 duration-300 px-5 py-2 rounded hover:text-white font-bold text-sm"
        >
          <RouterLink to="/sign-up">Sign Up</RouterLink>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
