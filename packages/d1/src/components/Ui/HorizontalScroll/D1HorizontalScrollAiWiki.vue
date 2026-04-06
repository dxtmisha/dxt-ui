<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1HorizontalScroll } from './index'
import { HorizontalScrollWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1HorizontalScrollAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="HorizontalScrollWikiStorybook"
    :component="D1HorizontalScroll"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
