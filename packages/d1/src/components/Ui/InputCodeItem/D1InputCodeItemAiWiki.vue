<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1InputCodeItem } from './index'
import { InputCodeItemWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1InputCodeItemAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="InputCodeItemWikiStorybook"
    :component="D1InputCodeItem"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
