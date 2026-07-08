<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Table } from './index'
import { TableWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1TableAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="TableWikiStorybook"
    :component="D1Table"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
