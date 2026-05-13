<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Radio } from './index'
import { RadioWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1RadioAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="RadioWikiStorybook"
    :component="D1Radio"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
