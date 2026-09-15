<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Collage } from './index'
import { CollageWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1CollageAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="CollageWikiStorybook"
    :component="D1Collage"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1Collage v-bind="args"/>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
