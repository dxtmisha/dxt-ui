<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Input } from './index'
import { InputWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1InputAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="InputWikiStorybook"
    :component="D1Input"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
