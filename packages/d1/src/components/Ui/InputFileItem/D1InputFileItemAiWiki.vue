<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1InputFileItem } from './index'
import { InputFileItemWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1InputFileItemAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="InputFileItemWikiStorybook"
    :component="D1InputFileItem"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
