<script setup></script>

<template>
  <div
    class="bg-white min-w-screen min-h-[100px] flex flex-col gap-4 mobile:gap-0 mobile:flex-row items-center border-b justify-between p-6 mobile:py-0 mobile:px-10 mobile:max-w-[1190px]"
  >
    <div class="w-screen mobile:w-auto flex justify-between items-center">
      <button type="button" class="menu-icon block mobile:hidden">
        <div class="menu-icon__line"></div>
      </button>
      <h2 class="font-semibold text-[20px] mobile:text-[28px] text-[#343C6A]">
        Setting
      </h2>
    </div>
    <div
      class="flex flex-col-reverse mobile:flex-row items-center gap-2 mobile:gap-8"
    >
      <div class="relative">
        <img
          src="/Group.svg"
          alt="search"
          class="absolute left-[25px] top-[15px]"
        />
        <input
          class="w-screen mobile:w-auto border rounded-[40px] py-[10px] mobile:py-[14px] pl-[60px] pr-4 outline-none bg-[#F5F7FA] text-mobile hover:bg-[#F5F7FA]/50"
          type="text"
          placeholder="Search for something"
        />
      </div>
      <a
        href="#"
        class="hidden mobile:block bg-[#F5F7FA] rounded-full p-[12.5px] hover:bg-[#F5F7FA]/50"
      >
        <img src="/settings 1.svg" alt="settings" />
      </a>
      <a
        href="#"
        class="hidden mobile:block bg-[#F5F7FA] rounded-full p-[12.5px] hover:bg-[#F5F7FA]/50"
      >
        <img src="/002-notification-1.svg" alt="" />
      </a>
      <a href="#">
        <img
          class="hidden mobile:block rounded-full w-[35px] mobile:w-[60px]"
          src="/pexels-christina-morillo-1181690 1.png"
          alt="user"
        />
      </a>
    </div>
  </div>
</template>
<style scoped>
.menu-icon {
  width: 18px;
  height: 14px;
  position: relative;
}

.menu-icon::after,
.menu-icon::before {
  content: '';
  position: absolute;
  left: 0;
}

.menu-icon::before {
  top: 0;
  transition:
    transform 0.3s,
    top 0.3s 0.3s;
}

.menu-icon::after {
  bottom: 0;
  transition:
    transform 0.3s,
    bottom 0.3s 0.3s;
}

.menu-icon__line,
.menu-icon::after,
.menu-icon::before {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #343c6a;
}

/* .menu-icon__active .menu-icon__line {
  display: none;
} */

.menu-icon__active::before {
  transform: translateY(-50%) rotate(45deg);
  top: 50%;

  transition:
    top 0.3s,
    transform 0.3s 0.3s;
}

.menu-icon__active::after {
  transform: translateY(50%) rotate(-45deg);
  bottom: 50%;

  transition:
    bottom 0.3s,
    transform 0.3s 0.3s;
}

/* .menu-icon {
  display: none;
} */
</style>
