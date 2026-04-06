<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1SelectValue } from './index'
import { SelectValueWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1SelectValueAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="SelectValueWikiStorybook"
    :component="D1SelectValue"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
