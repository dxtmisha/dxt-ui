<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1TextDescription } from './index'
import { TextDescriptionWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1TextDescriptionAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="TextDescriptionWikiStorybook"
    :component="D1TextDescription"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
