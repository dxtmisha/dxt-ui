<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1TableFlex } from './index'
import { TableFlexWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1TableFlexAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="TableFlexWikiStorybook"
    :component="D1TableFlex"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1TableFlex v-bind="args" />
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
