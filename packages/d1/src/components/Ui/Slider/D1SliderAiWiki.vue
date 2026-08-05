<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Slider } from './index'
import { SliderWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1SliderAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="SliderWikiStorybook"
    :component="D1Slider"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
      <div :class="classDemo.item">
        <D1Slider v-bind="args"/>
      </div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
