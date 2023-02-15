<script setup>
import parallax from '@/tools/parallax.js';
import { onMounted } from 'vue';

onMounted(() => {
  parallax.scroll();
})
</script>

<template>
  <div style="height: 3000px">
    <!-- banner -->
    <section class="section-banner flex items-center h-screen">
      <div class="scroll-wrap">
        <div class="scroll-container">
          <img src="@/assets/images/4.jpeg" alt="" data-scroll-obj>
        </div>
      </div>
      <h2 class="font-Playfair z-[1] m-[-30px]">
        <p class="text-[100px] tracking-[6px]">DARING</p>
        <p class="text-[42px]">TO BE</p>
        <p class="text-[100px] tracking-[10px] break-all">DIFFERENT</p>
      </h2>
    </section>
    <!-- section 1 -->
    <section class="section1 pb-10">
      <div class="scroll-wrap">
        <div class="scroll-container">
          <img src="@/assets/images/bg1.jpg" alt="" data-scroll-obj>
        </div>
      </div>
    </section>
    <!-- section 2 -->
    <section class="section2">
      <h6>ABOUT BCST</h6>
      <div class="">
        <div class="block-item flex">
          <div class="scroll-wrap">
            <div class="scroll-container">
              <img src="@/assets/images/9.jpg" alt="" data-scroll-obj>
            </div>
          </div>
          <div class="text">
            <h3></h3>
            <p></p>
          </div>
        </div>
        <div class="block-item flex flex-row-reverse">
          <div class="scroll-wrap">
            <div class="scroll-container">
              <img src="@/assets/images/8.jpg" alt="" data-scroll-obj>
            </div>
          </div>
          <div class="text">
            <h3></h3>
            <p></p>
          </div>
        </div>
      </div>
    </section>
    <!-- section 3 -->
    <section>
      <h6>STORY</h6>
      <div class="row4">
        <div class="block-item">
          <div class="photo"></div>

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
    .scroll-container {
      padding-bottom: 66.6%;
      img {
        height: 125%;
        width: auto;
      }
    }
  }

  .section1 {
    .scroll-wrap {
      max-width: 1440px;
      width: 90%;
      margin: 0 auto;
    }
    .scroll-container{
      padding-bottom: 23%;
      img {
        height: auto;
        width: 100%;
      }
    }
  }

  .section2 {
    .scroll-wrap {
      max-width: 600px;
    }
    .scroll-container {
      padding-bottom: 110%;
      img {
        height: 100%;
        width: auto;
      }
    }
  }
</style>