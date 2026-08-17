<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1CropArea } from './index'
import { CropAreaWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1CropAreaAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="CropAreaWikiStorybook"
    :component="D1CropArea"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
