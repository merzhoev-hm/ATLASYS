<script setup></script>

<template>
  <div
    class="bg-white w-screen min-h-[100px] flex flex-col mobile:flex-row items-center border-b justify-between p-6 mobile:py-0 mobile:px-10 max-w-[1190px]"
  >
    <h2 class="font-semibold text-[20px] mobile:text-[28px] text-[#343C6A]">
      Setting
    </h2>
    <div class="flex flex-col mobile:flex-row items-center gap-2 mobile:gap-8">
      <div class="relative">
        <img
          src="/public/Group.svg"
          alt="search"
          class="absolute left-[25px] top-[15px]"
        />
        <input
          class="w-screen mobile:w-auto border rounded-[40px] py-[10px] mobile:py-[14px] pl-[60px] pr-4 outline-none bg-[#F5F7FA] text-sm hover:bg-[#F5F7FA]/50"
          type="text"
          placeholder="Search for something"
        />
      </div>
      <a
        href="#"
        class="hidden mobile:block bg-[#F5F7FA] rounded-full p-[12.5px] hover:bg-[#F5F7FA]/50"
      >
        <img src="/public/settings 1.svg" alt="settings" />
      </a>
      <a
        href="#"
        class="hidden mobile:block bg-[#F5F7FA] rounded-full p-[12.5px] hover:bg-[#F5F7FA]/50"
      >
        <img src="/public/002-notification-1.svg" alt="" />
      </a>
      <a href="#">
        <img
          class="hidden mobile:block rounded-full w-[35px] mobile:w-[60px]"
          src="/public/pexels-christina-morillo-1181690 1.png"
          alt="user"
        />
      </a>
    </div>
  </div>
</template>
<style scoped></style>
