<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Page } from './index'
import { PageWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1PageAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="PageWikiStorybook"
    :component="D1Page"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1Page v-bind="args">
      Main page content.
  </D1Page>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
