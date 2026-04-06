<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1GridItem } from './index'
import { GridItemWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1GridItemAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="GridItemWikiStorybook"
    :component="D1GridItem"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item" style="min-height: 48px;">
  <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 16px;">
    <D1GridItem v-bind="args">Item</D1GridItem>
  </div>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
