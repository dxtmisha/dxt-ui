<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Scrollbar } from './index'
import { ScrollbarWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1ScrollbarAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="ScrollbarWikiStorybook"
    :component="D1Scrollbar"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1Scrollbar v-bind="args" style="height: 128px">
    <h3>Modern Web Interfaces and User Experience Design</h3>
    <p>In today's digital landscape, creating high-quality user
    interfaces has become a critical aspect of web application development.
    User interface components must not only be functional but also provide
    intuitive interaction patterns that enhance the overall user experience.</p>
    <p>Scrollbars play a particularly important role in content navigation
    and information architecture.</p>
  </D1Scrollbar>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
