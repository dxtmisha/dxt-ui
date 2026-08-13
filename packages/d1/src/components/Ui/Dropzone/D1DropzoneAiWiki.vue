<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Dropzone } from './index'
import { DropzoneWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1DropzoneAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="DropzoneWikiStorybook"
    :component="D1Dropzone"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div
  :class="classDemo.item"
  style="position: relative; width: 240px; height: 160px;"
>
  <D1Dropzone v-bind="args"/>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
