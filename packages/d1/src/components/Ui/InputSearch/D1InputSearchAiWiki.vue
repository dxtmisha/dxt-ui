<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1InputSearch } from './index'
import { InputSearchWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1InputSearchAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="InputSearchWikiStorybook"
    :component="D1InputSearch"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
