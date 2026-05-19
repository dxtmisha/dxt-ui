<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1TextLabel } from './index'
import { TextLabelWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1TextLabelAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="TextLabelWikiStorybook"
    :component="D1TextLabel"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
