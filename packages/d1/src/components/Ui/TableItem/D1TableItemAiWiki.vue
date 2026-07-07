<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1TableItem } from './index'
import { TableItemWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1TableItemAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="TableItemWikiStorybook"
    :component="D1TableItem"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
