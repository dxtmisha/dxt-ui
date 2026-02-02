<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Dialog } from './index'
import { DialogWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1DialogAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="DialogWikiStorybook"
    :component="D1Dialog"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1Dialog embedded open label="Dialog Title" description="This is a description text." v-bind="args"/>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
