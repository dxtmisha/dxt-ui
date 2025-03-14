<script setup lang="ts">
import UiStyleColor from './components/UiStyleColor.vue'
import UiStyleDimension from './components/UiStyleDimension.vue'
import UiStyleDir from './components/UiStyleDir.vue'

const onDir = () => {
  const dir = document.documentElement.dir
  document.documentElement.dir = dir === 'rtl' ? 'ltr' : 'rtl'
}
</script>

<template>
  <div class="ui-app-styles">
    <div class="ui-app-styles__title">
      styles
      <button @click="onDir">Dir</button>
    </div>
    <UiStyleColor/>
    <UiStyleDimension/>
    <UiStyleDir/>
  </div>
</template>

<style lang="scss">
.ui-app-styles {
  &__title {
    font-size: 20px;
    padding-bottom: 16px;

    & a {
      color: red;
    }

    color: blue;
  }
}
</style>
