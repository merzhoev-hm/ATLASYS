<script setup>
import Navlist from './Navlist.vue'
</script>

<template>
  <div
    class="hidden mobile:block min-h-screen min-w-[250px] border-r border-gray-200 pt-8 bg-white"
  >
    <div class="flex flex-col gap-16">
      <div class="flex gap-2 pl-11">
        <img src="/iconfinder_vector_65_09_473792 1.svg" alt="logo" />
        <h1 class="logo">BankDash.</h1>
      </div>
      <Navlist />
    </div>
  </div>
</template>
<style scoped></style>
