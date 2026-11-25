<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1FormattedUnit } from './index'
import { FormattedUnitWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1FormattedUnitAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="FormattedUnitWikiStorybook"
    :component="D1FormattedUnit"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <DesignComponent :value="100" unit="celsius" language="en-US"/>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
