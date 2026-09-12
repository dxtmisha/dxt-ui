<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1CollageItem } from './index'
import { CollageItemWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1CollageItemAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="CollageItemWikiStorybook"
    :component="D1CollageItem"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
