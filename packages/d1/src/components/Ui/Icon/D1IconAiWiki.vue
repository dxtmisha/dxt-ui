<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Icon } from './index'
import { IconWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1IconAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="IconWikiStorybook"
    :component="D1Icon"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
