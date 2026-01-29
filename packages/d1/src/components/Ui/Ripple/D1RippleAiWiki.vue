<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Ripple } from './index'
import { RippleWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1RippleAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="RippleWikiStorybook"
    :component="D1Ripple"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div
  :class="classDemo.item"
  style="position: relative; width: 64px; height: 48px;"
>
  <D1Ripple v-bind="args"/>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
