<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1SnackbarItem } from './index'
import { SnackbarItemWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1SnackbarItemAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="SnackbarItemWikiStorybook"
    :component="D1SnackbarItem"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
