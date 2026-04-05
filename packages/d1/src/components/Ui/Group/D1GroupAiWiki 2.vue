<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Group } from './index'
import { GroupWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1GroupAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="GroupWikiStorybook"
    :component="D1Group"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1Group v-bind="args">
      Content of the group.
  </D1Group>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
