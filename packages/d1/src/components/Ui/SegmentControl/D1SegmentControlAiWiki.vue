<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1SegmentControl } from './index'
import { SegmentControlWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1SegmentControlAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="SegmentControlWikiStorybook"
    :component="D1SegmentControl"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
