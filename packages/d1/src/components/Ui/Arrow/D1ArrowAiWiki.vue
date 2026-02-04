<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Arrow } from './index'
import { ArrowWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1ArrowAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="ArrowWikiStorybook"
    :component="D1Arrow"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item" style="position: relative; width: 48px; height: 48px; background-color: oklch(93.2% 0.032 255.585);">
    <D1Arrow position="top" v-bind="args"/>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
