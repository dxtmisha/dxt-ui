<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Button } from './index'
import { ButtonWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1ButtonAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="ButtonWikiStorybook"
    :component="D1Button"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
