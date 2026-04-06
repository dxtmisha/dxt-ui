<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Mask } from './index'
import { MaskWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1MaskAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="MaskWikiStorybook"
    :component="D1Mask"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
