<script setup></script>

<template>
  <div class="mt-[55px] flex flex-col mobile:flex-row gap-14">
    <div class="min-w-[130px] max-h-[130px] flex justify-center">
      <div class="max-w-[130px] relative">
        <a href="" class="absolute bottom-4 right-0">
          <img class="" src="/Group 194.svg" alt="" />
        </a>
        <img
          class="rounded-full max-w-[130px] max-h-[130px]"
          src="/pexels-christina-morillo-1181690 1 (1).png"
          alt=""
        />
      </div>
    </div>
    <form
      @submit.prevent
      class="flex flex-wrap gap-[29px] text-[#232323] text-[16px]"
    >
      <div class="flex flex-col">
        <label for="name">Your Name</label>
        <input
          class="profile__input"
          type="text"
          id="name"
          placeholder="Charlene Reed"
        />
      </div>
      <div class="flex flex-col">
        <label for="name">User Name</label>
        <input
          class="profile__input"
          type="text"
          id="name"
          placeholder="Charlene Reed"
        />
      </div>
      <div class="flex flex-col">
        <label for="email">Email</label>
        <input
          class="profile__input"
          type="email"
          id="email"
          placeholder="charlenereed@gmail.com"
        />
      </div>
      <div class="flex flex-col">
        <label for="password">Password</label>
        <input
          class="profile__input"
          type="password"
          id="password"
          placeholder="*************"
        />
      </div>
      <div class="flex flex-col relative">
        <label for="dob">Date of Birth</label>
        <input
          class="profile__input"
          type=""
          id="dob"
          placeholder="1990-01-25"
        />
        <img class="w-3 absolute right-5 bottom-5" src="/Vector 4.svg" alt="" />
      </div>
      <div class="flex flex-col">
        <label for="present-address">Present Address</label>
        <input
          class="profile__input"
          type="text"
          id="present-address"
          placeholder="San Jose, California, USA"
        />
      </div>
      <div class="flex flex-col">
        <label for="permanent-address">Permanent Address</label>
        <input
          class="profile__input"
          type="text"
          id="permanent-address"
          placeholder="San Jose, California, USA"
        />
      </div>
      <div class="flex flex-col">
        <label for="city">City</label>
        <input
          class="profile__input"
          type="text"
          id="city"
          placeholder="San Jose"
        />
      </div>
      <div class="flex flex-col">
        <label for="postal-code">Postal Code</label>
        <input
          class="profile__input"
          type="text"
          id="postal-code"
          placeholder="45962"
        />
      </div>

      <div class="flex flex-col">
        <label for="country">Country</label>
        <input
          class="profile__input"
          type="text"
          id="country"
          placeholder="USA"
        />
      </div>
      <div class="w-full flex mobile:justify-end">
        <button
          class="bg-[#1814F3] text-white text-[18px] rounded-[15px] w-screen mobile:w-[190px] h-[50px] hover:bg-[#1814F3]/80"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>
<style scoped></style>
