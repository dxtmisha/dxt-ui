<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Placeholder } from './index'
import { PlaceholderWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1PlaceholderAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="PlaceholderWikiStorybook"
    :component="D1Placeholder"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
