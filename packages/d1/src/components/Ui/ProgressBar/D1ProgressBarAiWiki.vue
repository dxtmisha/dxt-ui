<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1ProgressBar } from './index'
import { ProgressBarWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1ProgressBarAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="ProgressBarWikiStorybook"
    :component="D1ProgressBar"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item" style="width: 240px; height: 40px; display: flex; align-items: center;">
  <D1ProgressBar v-bind="args"/>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
