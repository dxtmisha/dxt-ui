<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1PageArea } from './index'
import { PageAreaWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1PageAreaAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="PageAreaWikiStorybook"
    :component="D1PageArea"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
