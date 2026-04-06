<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Snackbar } from './index'
import { SnackbarWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1SnackbarAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="SnackbarWikiStorybook"
    :component="D1Snackbar"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
