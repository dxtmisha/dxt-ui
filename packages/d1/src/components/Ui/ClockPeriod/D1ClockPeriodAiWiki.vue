<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1ClockPeriod } from './index'
import { ClockPeriodWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1ClockPeriodAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="ClockPeriodWikiStorybook"
    :component="D1ClockPeriod"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
