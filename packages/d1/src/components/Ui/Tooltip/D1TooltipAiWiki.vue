<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Tooltip } from './index'
import { TooltipWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
import { DxtTestButton } from '@dxtmisha/test'
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1TooltipAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="TooltipWikiStorybook"
    :component="D1Tooltip"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1Tooltip open embedded v-bind="args">
    <template #control="{ binds }">
      <DxtTestButton v-bind="binds">Hover me</DxtTestButton>
    </template>
  </D1Tooltip>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
