<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Select } from './index'
import { SelectWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1SelectAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="SelectWikiStorybook"
    :component="D1Select"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
