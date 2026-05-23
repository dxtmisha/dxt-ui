<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1MenuButton } from './index'
import { MenuButtonWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1MenuButtonAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="MenuButtonWikiStorybook"
    :component="D1MenuButton"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
