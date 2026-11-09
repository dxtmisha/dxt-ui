<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1ComponentOutlet } from './index'
import { ComponentOutletWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1ComponentOutletAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="ComponentOutletWikiStorybook"
    :component="D1ComponentOutlet"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1ComponentOutlet v-bind="args">
    <div>Fallback content when component is not registered in ComponentStorage.</div>
  </D1ComponentOutlet>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
