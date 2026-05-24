<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1MenuChip } from './index'
import { MenuChipWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1MenuChipAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="MenuChipWikiStorybook"
    :component="D1MenuChip"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
