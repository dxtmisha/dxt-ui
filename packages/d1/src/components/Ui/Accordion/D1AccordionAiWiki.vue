<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Accordion } from './index'
import { AccordionWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1AccordionAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="AccordionWikiStorybook"
    :component="D1Accordion"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1Accordion :open="true" v-bind="args">
    <div class="wiki-storybook-item--padding">
      Hidden content
    </div>
  </D1Accordion>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
