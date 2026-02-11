<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1TabItem } from './index'
import { TabItemWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1TabItemAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="TabItemWikiStorybook"
    :component="D1TabItem"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1TabItem v-bind="args"/>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
