<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Bleed } from './index'
import { BleedWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1BleedAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="BleedWikiStorybook"
    :component="D1Bleed"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1Bleed v-bind="args">
    <p>The component allows content to expand beyond the boundaries of the parent container by applying negative horizontal margins.</p>
  </D1Bleed>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
