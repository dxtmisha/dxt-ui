<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Bars } from './index'
import { BarsWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1BarsAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="BarsWikiStorybook"
    :component="D1Bars"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
