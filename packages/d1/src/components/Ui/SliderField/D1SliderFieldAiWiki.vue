<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1SliderField } from './index'
import { SliderFieldWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1SliderFieldAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="SliderFieldWikiStorybook"
    :component="D1SliderField"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
