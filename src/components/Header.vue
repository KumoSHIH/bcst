<script setup>
import { onMounted } from "@vue/runtime-core";
import $ from "jquery";

let scroll = () => {
  let zero = 0,
      hd = document.querySelector('nav');
  $(window).on('scroll',function() {
    let scrollAfter = $(this).scrollTop();
    if(scrollAfter > zero) {
      hd.classList.add('bg')
    }
    else if(scrollAfter === 0){
      hd.classList.remove('bg')
    }
    zero = scrollAfter
  })
}

onMounted(() => {
  // scroll();
})
</script>
<template>
  <nav class="fixed flex w-full py-3 px-10 z-[10] por">
    <div class="w-full flex justify-between items-center">
      
      <ul class="flex">
        <li><router-link to="/about" class="hd-link font-Playfair">About</router-link></li>
        <li><router-link to="" class="hd-link font-Playfair">Service</router-link></li>
        <li><router-link to="" class="hd-link font-Playfair">Product</router-link></li>
        <li><router-link to="/news" class="hd-link font-Playfair">News</router-link></li>
        <li><router-link to="/reservation" class="hd-link font-Playfair">Reservation</router-link></li>
        
      </ul>
      <router-link to="/" class="logo">
        <img src="@/assets/images/logo_main.png" alt="">
      </router-link>
      <ul>
        <li><router-link to="" class="hd-link font-Playfair">Cart</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  nav{
    height: 90px;
    background-color: #fff;
    // transition: background-color .3s ease-in-out;
    &.bg{
      
    }
  }
  .hd-link {
    @apply px-10 py-2;
    @apply tracking-wide font-bold hover:text-gray-400;
    transition: .3s ease-in-out;
  }
  .logo {
    max-width: 80px;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>
