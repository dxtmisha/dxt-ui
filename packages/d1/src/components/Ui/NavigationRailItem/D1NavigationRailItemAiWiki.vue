<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1NavigationRailItem } from './index'
import { NavigationRailItemWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1NavigationRailItemAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="NavigationRailItemWikiStorybook"
    :component="D1NavigationRailItem"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
