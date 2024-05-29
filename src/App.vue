<script setup>
import { ref, defineExpose } from 'vue';
import Book from './pages/book/Book.vue';

const appRef = ref(null);
//defineExpose({ x, y, width });

// Expose reactive variables to the template
</script>


<template>
  <div id="app" ref="appRef" @mouseover="handleMouseMove">
    <Book  @test="handleTestEvent"/>
  </div>
</template>

<style lang="scss">
  /* Your styles here */
</style>
