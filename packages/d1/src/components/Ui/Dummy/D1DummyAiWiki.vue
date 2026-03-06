<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Dummy } from './index'
import { DummyWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1DummyAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="DummyWikiStorybook"
    :component="D1Dummy"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
