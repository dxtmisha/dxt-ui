<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Block } from './index'
import { BlockWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1BlockAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="BlockWikiStorybook"
    :component="D1Block"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1Block v-bind="args">
      Main content goes here.
  </D1Block>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
