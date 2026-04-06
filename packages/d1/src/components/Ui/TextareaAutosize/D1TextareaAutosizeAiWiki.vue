<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1TextareaAutosize } from './index'
import { TextareaAutosizeWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1TextareaAutosizeAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="TextareaAutosizeWikiStorybook"
    :component="D1TextareaAutosize"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
