<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1ListItem } from './index'
import { ListItemWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1ListItemAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="ListItemWikiStorybook"
    :component="D1ListItem"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
