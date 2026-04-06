<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Skeleton } from './index'
import { SkeletonWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1SkeletonAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="SkeletonWikiStorybook"
    :component="D1Skeleton"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
