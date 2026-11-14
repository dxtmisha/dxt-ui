<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { UiButton } from './index'
import { ButtonWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'UiButtonAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="Ui"
    :wiki="ButtonWikiStorybook"
    :component="UiButton"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
