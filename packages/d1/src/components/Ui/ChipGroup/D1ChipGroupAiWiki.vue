<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1ChipGroup } from './index'
import { ChipGroupWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1ChipGroupAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="ChipGroupWikiStorybook"
    :component="D1ChipGroup"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
