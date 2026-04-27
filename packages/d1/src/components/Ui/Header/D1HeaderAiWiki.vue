<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Header } from './index'
import { HeaderWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1HeaderAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="HeaderWikiStorybook"
    :component="D1Header"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
