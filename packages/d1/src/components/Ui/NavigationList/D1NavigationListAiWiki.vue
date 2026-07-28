<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1NavigationList } from './index'
import { NavigationListWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1NavigationListAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="NavigationListWikiStorybook"
    :component="D1NavigationList"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
