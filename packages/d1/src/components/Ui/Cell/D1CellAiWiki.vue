<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Cell } from './index'
import { CellWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1CellAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="CellWikiStorybook"
    :component="D1Cell"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
