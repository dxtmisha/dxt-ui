<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1TabsNavigation } from './index'
import { TabsNavigationWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1TabsNavigationAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="TabsNavigationWikiStorybook"
    :component="D1TabsNavigation"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
