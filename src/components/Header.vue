<script>
import $ from "jquery";

export default {
  scroll() {
    let zero = 0;
    $(window).on('scroll',function() {
      let scrollAfter = $(this).scrollTop();

      console.log(scrollAfter);

    })
  }

}
</script>
<template>
  <nav class="fixed w-full py-3 px-10 z-[10]">
    <div class="flex justify-between items-center">
      <router-link to="/" class="logo">
        <img src="@/assets/images/logo_main.png" alt="">
      </router-link>
      <ul class="flex">
        <li><router-link to="" class="hd-link font-Playfair">Product</router-link></li>
        <li><router-link to="" class="hd-link font-Playfair">News</router-link></li>
        <li><router-link to="" class="hd-link font-Playfair">Cart</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  .hd-link {
    @apply px-10 py-2;
    @apply tracking-wide font-bold hover:text-gray-400;
    transition: .3s ease-in-out;
  }
  .logo {
    max-width: 100px;
    width: 100%;
  }
</style>
