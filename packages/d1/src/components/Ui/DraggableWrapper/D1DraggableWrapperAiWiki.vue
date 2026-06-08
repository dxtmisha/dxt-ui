<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1DraggableWrapper } from './index'
import { DraggableWrapperWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1DraggableWrapperAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="DraggableWrapperWikiStorybook"
    :component="D1DraggableWrapper"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
