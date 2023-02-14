<script setup>
import parallax from '@/tools/parallax.js';
import { onMounted } from 'vue';

onMounted(() => {
  parallax.scroll();
})
</script>

<template>
  <div>
    <!-- banner -->
    <section class="section-banner flex items-center h-screen">
      <div class="scroll-wrap">
        <div class="scroll-container">
          <img src="@/assets/images/4.jpeg" alt="">
        </div>
      </div>
      <h2 class="font-Playfair z-[1] m-[-30px]">
        <p class="text-[100px] tracking-[6px]">DARING</p>
        <p class="text-[42px]">TO BE</p>
        <p class="text-[100px] tracking-[10px] break-all">DIFFERENT</p>
      </h2>
    </section>
    <!-- section 1 -->
    <section class="section1">
      <div class="scroll-wrap">
        <div class="scroll-container">
          <img src="@/assets/images/4.jpeg" alt="">
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/common/parallax.scss';

  .section-banner {
    .scroll-wrap {
      max-width: 1120px;
    }
  }

  .section1 {
    .scroll-wrap {
      max-width: 1440px;
    }
  }
</style>