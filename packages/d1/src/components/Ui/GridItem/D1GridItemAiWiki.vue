<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1GridItem } from './index'
import { GridItemWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1GridItemAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="GridItemWikiStorybook"
    :component="D1GridItem"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
