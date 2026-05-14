<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Divider } from './index'
import { DividerWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1DividerAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="DividerWikiStorybook"
    :component="D1Divider"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
