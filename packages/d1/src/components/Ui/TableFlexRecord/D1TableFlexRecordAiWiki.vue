<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1TableFlexRecord } from './index'
import { TableFlexRecordWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1TableFlexRecordAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="TableFlexRecordWikiStorybook"
    :component="D1TableFlexRecord"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
