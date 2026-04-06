<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1MotionAxis } from './index'
import { MotionAxisWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1MotionAxisAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="MotionAxisWikiStorybook"
    :component="D1MotionAxis"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
