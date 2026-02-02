<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1MotionTransform } from './index'
import { MotionTransformWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
import { DxtTestButton } from '@dxtmisha/test'
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1MotionTransformAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="MotionTransformWikiStorybook"
    :component="D1MotionTransform"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1MotionTransform :auto-close="false" v-bind="args">
    <template #head>
      <DxtTestButton class="wiki-storybook-button">Toggle Content</DxtTestButton>
    </template>
    <template #body>
      <div class="wiki-storybook-item--padding">
        <p>Expandable content goes here.</p>
      </div>
    </template>
  </D1MotionTransform>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
