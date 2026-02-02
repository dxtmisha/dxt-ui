<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Dialog } from './index'
import { DialogWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1DialogAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="DialogWikiStorybook"
    :component="D1Dialog"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
