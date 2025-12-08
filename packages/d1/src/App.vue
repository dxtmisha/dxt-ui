<script setup lang="ts">
import D1Image from './components/Ui/Image/D1Image.vue'

</script>

<template>
  <div class="test-image">
    <div class="test-image__item"
         v-for="num in 1000" :key="num"
    >
      <div class="test-image__text">{{ num }}</div>
      <D1Image
        :value="`/v2.jpeg?num=${num}`"
        lazy
        tagImg
      />

    </div>
  </div>
</template>

<style lang="scss">
.test-image {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  &__text {
    position: absolute;
    z-index: 999;
  }

  &__item {
    position: relative;
    width: 280px;
    height: 320px;

    border-radius: 8px;
    border: 2px solid #fff;
  }
}
</style>
