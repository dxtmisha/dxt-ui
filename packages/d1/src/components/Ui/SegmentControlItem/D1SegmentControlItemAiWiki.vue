<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1SegmentControlItem } from './index'
import { SegmentControlItemWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1SegmentControlItemAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="SegmentControlItemWikiStorybook"
    :component="D1SegmentControlItem"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
