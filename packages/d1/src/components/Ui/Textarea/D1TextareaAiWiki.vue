<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Textarea } from './index'
import { TextareaWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1TextareaAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="TextareaWikiStorybook"
    :component="D1Textarea"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
