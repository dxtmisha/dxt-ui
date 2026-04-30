<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Container } from './index'
import { ContainerWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1ContainerAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="ContainerWikiStorybook"
    :component="D1Container"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1Container v-bind="args">
    Main content goes here.
  </D1Container>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
