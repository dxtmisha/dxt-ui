<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1DraggableWrapper } from './index'
import { DraggableWrapperWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1DraggableWrapperAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="DraggableWrapperWikiStorybook"
    :component="D1DraggableWrapper"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1DraggableWrapper v-bind="args">
    <template #default="{ className, classClick, classPosition }">
      <div v-for="item in 5" :key="item" :class="[className, classPosition]" :data-value="item">
        <span :class="classClick">☰</span>
        Item {{ item }}
      </div>
    </template>
  </D1DraggableWrapper>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
