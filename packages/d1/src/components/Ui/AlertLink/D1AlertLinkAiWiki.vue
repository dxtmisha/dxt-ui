<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1AlertLink } from './index'
import { AlertLinkWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1AlertLinkAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="AlertLinkWikiStorybook"
    :component="D1AlertLink"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
