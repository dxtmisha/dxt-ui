<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1ActionSheet } from './index'
import { ActionSheetWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
import { DxtTestButton } from '@dxtmisha/test'
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1ActionSheetAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="ActionSheetWikiStorybook"
    :component="D1ActionSheet"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item" style="min-width: 800px;">
  <D1ActionSheet embedded open v-bind="args">
    <template #control="{ binds }">
      <DxtTestButton v-bind="binds">Open Menu</DxtTestButton>
    </template>
    <template #default>Content goes here...</template>
  </D1ActionSheet>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
