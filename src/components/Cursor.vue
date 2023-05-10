<script setup>
import { onMounted } from 'vue';

const mouseMove = () => {
  const dot = document.querySelector('.dot'),
        html = document.querySelector('html'),
        dotW = dot.clientWidth / 2,
        dotH = dot.clientHeight / 2;
  
  html.addEventListener('mousemove',function(e){
    dot.style.left = (e.pageX - dotW) + 'px';
    dot.style.top = (e.clientY - dotH) + 'px';
  })
}
onMounted(() => {
  mouseMove();
})

</script>

<template>
  <div class="dot">
    
  </div>
</template>

<style lang="scss">
  .dot {
    // position: absolute;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgb(142, 9, 182);
    mix-blend-mode: multiply;
    pointer-events: none;
  }
</style>