<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Switch } from './index'
import { SwitchWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1SwitchAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="SwitchWikiStorybook"
    :component="D1Switch"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
