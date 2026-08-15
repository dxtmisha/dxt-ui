<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1ClockDial } from './index'
import { ClockDialWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1ClockDialAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="ClockDialWikiStorybook"
    :component="D1ClockDial"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
