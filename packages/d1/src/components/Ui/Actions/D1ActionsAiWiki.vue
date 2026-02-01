<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Actions } from './index'
import { ActionsWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1ActionsAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="ActionsWikiStorybook"
    :component="D1Actions"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
