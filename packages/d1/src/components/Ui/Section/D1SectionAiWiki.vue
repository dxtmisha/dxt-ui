<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Section } from './index'
import { SectionWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1SectionAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="SectionWikiStorybook"
    :component="D1Section"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1Section v-bind="args">
      Content of the section.
  </D1Section>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
