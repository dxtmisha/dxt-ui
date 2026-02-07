<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1FieldMessage } from './index'
import { FieldMessageWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1FieldMessageAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="FieldMessageWikiStorybook"
    :component="D1FieldMessage"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
