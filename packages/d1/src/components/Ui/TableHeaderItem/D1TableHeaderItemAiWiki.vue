<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1TableHeaderItem } from './index'
import { TableHeaderItemWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1TableHeaderItemAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="TableHeaderItemWikiStorybook"
    :component="D1TableHeaderItem"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
