<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1NavigationRail } from './index'
import { NavigationRailWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1NavigationRailAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="NavigationRailWikiStorybook"
    :component="D1NavigationRail"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1NavigationRail v-bind="args"/>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
