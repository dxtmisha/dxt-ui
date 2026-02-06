<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Chip } from './index'
import { ChipWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1ChipAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="ChipWikiStorybook"
    :component="D1Chip"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
