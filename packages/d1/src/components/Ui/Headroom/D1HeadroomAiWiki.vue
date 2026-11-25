<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Headroom } from './index'
import { HeadroomWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1HeadroomAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="HeadroomWikiStorybook"
    :component="D1Headroom"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <DesignComponent scroll-element="#container" disappears :transform-threshold="100" v-bind="args">
    Sticky Header
  </DesignComponent>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
