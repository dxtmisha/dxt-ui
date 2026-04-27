<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Area } from './index'
import { AreaWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1AreaAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="AreaWikiStorybook"
    :component="D1Area"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
