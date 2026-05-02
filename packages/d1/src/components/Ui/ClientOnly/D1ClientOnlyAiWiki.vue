<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1ClientOnly } from './index'
import { ClientOnlyWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1ClientOnlyAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="ClientOnlyWikiStorybook"
    :component="D1ClientOnly"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1ClientOnly v-bind="args">
    <h4>Client-Side Content</h4>
    <p>This block is only visible when the component is mounted in the browser.</p>
    <p>Use it for components that depend on window, document, or other browser-specific APIs.</p>
  </D1ClientOnly>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
