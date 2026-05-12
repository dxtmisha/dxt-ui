<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1ButtonGroup } from './index'
import { ButtonGroupWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1ButtonGroupAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="ButtonGroupWikiStorybook"
    :component="D1ButtonGroup"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
