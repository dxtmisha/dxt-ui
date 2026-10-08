<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1InputImage } from './index'
import { InputImageWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1InputImageAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="InputImageWikiStorybook"
    :component="D1InputImage"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div
  :class="classDemo.item"
  style="position: relative; width: 320px;"
>
  <D1InputImage
    label="Upload Image"
    helper-message="PNG, JPG up to 10MB"
    v-bind="args"
  />
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
