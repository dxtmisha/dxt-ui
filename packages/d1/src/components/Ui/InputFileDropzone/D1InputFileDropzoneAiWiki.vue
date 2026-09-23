<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1InputFileDropzone } from './index'
import { InputFileDropzoneWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1InputFileDropzoneAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="InputFileDropzoneWikiStorybook"
    :component="D1InputFileDropzone"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
