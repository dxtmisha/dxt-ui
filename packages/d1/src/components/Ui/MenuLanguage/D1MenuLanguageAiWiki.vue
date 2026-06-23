<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1MenuLanguage } from './index'
import { MenuLanguageWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1MenuLanguageAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="MenuLanguageWikiStorybook"
    :component="D1MenuLanguage"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
