<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1MotionSticky } from './index'
import { MotionStickyWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1MotionStickyAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="MotionStickyWikiStorybook"
    :component="D1MotionSticky"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
        <p>
          In today's digital landscape, creating high-quality user interfaces has
          become a critical aspect of web application development.
        </p>
        <D1MotionSticky
          v-bind="args"
          style="position: sticky; top: 0; padding: 16px;"
        >
          Sticky Header
        </D1MotionSticky>
        <p>
          Scrollbars play a particularly important role in content navigation
          and information architecture. They allow users to easily navigate through
          large volumes of information.
        </p>
      </div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
