<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1FieldLabel } from './index'
import { FieldLabelWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1FieldLabelAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="FieldLabelWikiStorybook"
    :component="D1FieldLabel"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1FieldLabel label="Username" required v-bind="args"/>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
