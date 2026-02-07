<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1FieldCounter } from './index'
import { FieldCounterWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1FieldCounterAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="FieldCounterWikiStorybook"
    :component="D1FieldCounter"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
