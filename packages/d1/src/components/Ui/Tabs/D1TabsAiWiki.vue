<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Tabs } from './index'
import { TabsWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1TabsAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="TabsWikiStorybook"
    :component="D1Tabs"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
