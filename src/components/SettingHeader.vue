<script setup></script>

<template>
  <ul
    class="border-b flex justify-around mobile:gap-[72px] font-semibold text-[13px] mobile:text-base text-[#718EBF] relative"
  >
    <li class="pb-2 text-[#1814F3] active hover:text-[#1814F3]">
      <a href="#">Edit Profile</a>
    </li>
    <li class="pb-2 hover:text-[#1814F3]"><a href="#">Preferences</a></li>
    <li class="pb-2 hover:text-[#1814F3]"><a href="#">Security</a></li>
  </ul>
</template>

<style scoped>
.active::before {
  content: '';
  background-color: #1814f3;
  width: 70px;
  height: 3px;
  bottom: 0;
  border-radius: 10px 10px 0px 0px;
  position: absolute;
}
</style>
