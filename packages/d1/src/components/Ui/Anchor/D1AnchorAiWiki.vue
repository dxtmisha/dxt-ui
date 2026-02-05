<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Anchor } from './index'
import { AnchorWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1AnchorAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="AnchorWikiStorybook"
    :component="D1Anchor"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1Anchor href="#" v-bind="args"/>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
