<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1SkeletonItem } from './index'
import { SkeletonItemWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1SkeletonItemAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="SkeletonItemWikiStorybook"
    :component="D1SkeletonItem"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
