<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1ScrollSticky } from './index'
import { ScrollStickyWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1ScrollStickyAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="ScrollStickyWikiStorybook"
    :component="D1ScrollSticky"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
