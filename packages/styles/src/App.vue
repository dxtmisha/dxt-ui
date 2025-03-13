<script setup lang="ts">
import UiStyleColor from './components/UiStyleColor.vue'
import UiStyleDimension from './components/UiStyleDimension.vue'
</script>

<template>
  <div class="ui-app-styles">
    <div class="ui-app-styles__title">styles</div>
    <UiStyleColor/>
    <UiStyleDimension/>
  </div>
</template>

<style lang="scss">
.ui-app-styles {
  &__title {
    font-size: 20px;
    padding-bottom: 16px;
  }
}
</style>
