<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1MotionSticky } from './index'
import { MotionStickyWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1MotionStickyAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="MotionStickyWikiStorybook"
    :component="D1MotionSticky"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
