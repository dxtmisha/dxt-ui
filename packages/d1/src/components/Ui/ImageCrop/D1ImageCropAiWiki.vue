<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1ImageCrop } from './index'
import { ImageCropWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1ImageCropAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="ImageCropWikiStorybook"
    :component="D1ImageCrop"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
