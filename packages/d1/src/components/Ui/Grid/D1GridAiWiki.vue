<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Grid } from './index'
import { GridWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1GridAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="GridWikiStorybook"
    :component="D1Grid"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
