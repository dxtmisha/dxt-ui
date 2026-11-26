<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1MotionFlip } from './index'
import { MotionFlipWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1MotionFlipAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="MotionFlipWikiStorybook"
    :component="D1MotionFlip"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1MotionFlip v-bind="args" style="display: flex; gap: 8px;">
    <div v-for="item in 3" :key="item">
      <div style="padding: 8px; border: 1px solid currentColor;">Item {{ item }}</div>
    </div>
  </D1MotionFlip>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
