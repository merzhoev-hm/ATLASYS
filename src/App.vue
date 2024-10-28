<script setup>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Setting from './views/Setting.vue'
</script>

<template>
  <div class="max-w-[1440px] mx-auto">
    <div class="flex">
      <Navbar class="" />
      <div>
        <Header />
        <Setting />
      </div>
    </div>
    <RouterView />
  </div>
</template>

<style scoped></style>
