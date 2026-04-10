<script setup lang="ts">
import { fetchStorage } from '@dxtmisha/figma'
import TranslateMain from './components/TranslateMain.vue'

fetchStorage('test', (value) => {
  console.log('value', value)
})
</script>

<template>
  <TranslateMain/>
</template>

<style lang="scss"></style>
