<script setup></script>

<template>
  <ul class="navList flex flex-col gap-10">
    <li>
      <a class="flex pl-11 hover:text-[#1814F3]" href="#">
        <img src="/home 2.svg" alt="home" />
        <p class="ml-6">Dashboard</p></a
      >
    </li>
    <li>
      <a class="flex pl-11 hover:text-[#1814F3]" href="#">
        <img src="/transfer 1.svg" alt="transfer" />
        <p class="ml-6">Transactions</p></a
      >
    </li>
    <li>
      <a class="flex pl-11 hover:text-[#1814F3]" href="#">
        <img src="/user 3 1.svg" alt="user" />
        <p class="ml-6">Accounts</p></a
      >
    </li>
    <li>
      <a class="flex pl-11 hover:text-[#1814F3]" href="#">
        <img src="/economic-investment 1.svg" alt="invest" />
        <p class="ml-6">Investments</p></a
      >
    </li>
    <li>
      <a class="flex pl-11 hover:text-[#1814F3]" href="#">
        <img src="/credit-card 1.svg" alt="credcards" />
        <p class="ml-6">Credit Cards</p></a
      >
    </li>
    <li>
      <a class="flex pl-11 hover:text-[#1814F3]" href="#">
        <img src="/loan 1.svg" alt="loan" />
        <p class="ml-6">Loans</p></a
      >
    </li>
    <li>
      <a class="flex pl-11 hover:text-[#1814F3]" href="#">
        <img src="/service 1.svg" alt="service" />
        <p class="ml-6">Services</p></a
      >
    </li>
    <li>
      <a class="flex pl-11 hover:text-[#1814F3]" href="#">
        <img src="/econometrics 1.svg" alt="privileges" />
        <p class="ml-6">My Privileges</p></a
      >
    </li>
    <li class="relative">
      <a class="flex pl-11 hover:text-[#1814F3]" href="#">
        <span class="active_navitem"></span>

        <img class="" src="/settings solid 1.svg" alt="setting" />
        <p class="ml-6">Setting</p>
      </a>
    </li>
  </ul>
</template>
<style scoped>
.active_navitem::before {
  content: '';
  background-color: #1814f3;
  width: 6px;
  height: 60px;
  left: 0;
  top: -50%;
  border-radius: 0px 10px 10px 0px;
  position: absolute;
}
</style>
