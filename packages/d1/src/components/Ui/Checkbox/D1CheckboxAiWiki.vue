<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Checkbox } from './index'
import { CheckboxWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1CheckboxAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="CheckboxWikiStorybook"
    :component="D1Checkbox"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
