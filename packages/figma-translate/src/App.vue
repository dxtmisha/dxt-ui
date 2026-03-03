<script setup lang="ts">
import { usePage } from './composables/usePage'

import TranslateTools from './components/TranslateTools.vue'

usePage().init()
</script>

<template>
  <div>@dxtmisha/figma-translate</div>
  <TranslateTools/>
</template>

<style lang="scss"></style>
