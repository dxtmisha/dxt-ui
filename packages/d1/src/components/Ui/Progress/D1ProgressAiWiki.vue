<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Progress } from './index'
import { ProgressWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1ProgressAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="ProgressWikiStorybook"
    :component="D1Progress"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div
  :class="classDemo.item"
  style="position: relative; width: 64px; height: 40px;"
>
  <D1Progress v-bind="args"/>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
