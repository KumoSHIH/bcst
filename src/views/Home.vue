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
      <div class="scroll-wrap max-w-[1120px]">
        <div class="scroll-container">
          <img src="@/assets/images/h01.jpg" alt="" data-scroll-obj>
        </div>
      </div>
      <h2 class="mix-blend-color-dodge font-Playfair z-[1] m-[-30px] text-gray-300">
        <p class="text-[100px] tracking-[6px]">DARING</p>
        <p class="text-[42px]">TO BE</p>
        <p class="text-[100px] tracking-[8px] break-all">DIFFERENT</p>
      </h2>
    </section>
    <!-- section 1 -->
    <section class="section1 relative pb-10">
      <div class="scroll-wrap max-w-[1440px] mx-auto">
        <div class="scroll-container">
          <img src="@/assets/images/bg1.jpg" alt="" data-scroll-obj>
        </div>
      </div>
      <div class="ab-center w-100">
        <h6 class="sub-tit">CONTACT US</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </section>
    <!-- section 2 -->
    <section class="section2 max-w-[1000px] mx-auto my-[100px]">
      <h6 class="sub-tit">ABOUT BCST</h6>
      <div class="">
        <div class="flex items-center mb-[120px]">
          <div class="scroll-wrap max-w-[500px]">
            <div class="scroll-container">
              <img src="@/assets/images/str08.jpg" alt="" data-scroll-obj>
            </div>
          </div>
          <div class="pl-[60px] max-w-[500px]">
            <h3 class="content-tit">test title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident totam eaque optio, consequatur voluptatum quae modi labore rem hic mollitia saepe, laudantium eum placeat ipsum culpa vel molestias praesentium quaerat.</p>
          </div>
        </div>
        <div class="flex items-center flex-row-reverse">
          <div class="scroll-wrap max-w-[500px]">
            <div class="scroll-container">
              <img src="@/assets/images/str05.jpg" alt="" data-scroll-obj>
            </div>
          </div>
          <div class="pr-[60px] max-w-[500px]">
            <h3 class="content-tit">test title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident totam eaque optio, consequatur voluptatum quae modi labore rem hic mollitia saepe, laudantium eum placeat ipsum culpa vel molestias praesentium quaerat.</p>
            <h3 class="content-tit pt-[30px]">test title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident totam eaque optio, consequatur voluptatum quae modi labore rem hic mollitia saepe, laudantium eum placeat ipsum culpa vel molestias praesentium quaerat.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- section 3 -->
    <section>
      <h6 class="sub-tit">STORY</h6>
      <div class="row4">
        <div class="block-item">
          <div class="photo"></div>
          <div>
            <h6></h6>
            <p></p>
          </div>
        </div>
      </div>
    </section>
    <!-- section 4 -->
    <section>
      <h6 class="sub-tit">RESERVATION</h6>
      <div></div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  // 共用標題
  // 區塊大標題
  .sub-tit {
    font-family: 'Mulish', sans-serif;
    @apply pb-10;
    @apply tracking-wide font-bold text-5xl text-center
  }
  // 內文標題
  .content-tit {
    @apply tracking-wide font-bold text-2xl
  }
  // 圖片滾動視差
  .scroll-wrap {
    width: 100%;
    overflow: hidden;
  }

  .scroll-container {
    position: relative;
    img {
      position: absolute;
      left: 0;
      top: 0;
      transition: transform .5s ease-in-out;
    }
  }
  // banner
  .section-banner {
    .scroll-container {
      padding-bottom: 66.6%;
      img {
        height: 125%;
        width: auto;
        max-width: none;
      }
    }
  }
  // section1
  .section1 {
    .scroll-container {
      padding-bottom: 30%;
    }
  }
  // section2
  .section2 {
    .scroll-container {
      padding-bottom: 106%;
    }
  }
</style>