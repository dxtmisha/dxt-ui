<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1TableFlexHeaderItem } from './index'
import { TableFlexHeaderItemWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1TableFlexHeaderItemAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="TableFlexHeaderItemWikiStorybook"
    :component="D1TableFlexHeaderItem"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
