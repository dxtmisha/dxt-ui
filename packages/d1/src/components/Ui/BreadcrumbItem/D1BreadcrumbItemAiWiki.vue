<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1BreadcrumbItem } from './index'
import { BreadcrumbItemWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1BreadcrumbItemAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="BreadcrumbItemWikiStorybook"
    :component="D1BreadcrumbItem"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
