<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1SelectableArea } from './index'
import { SelectableAreaWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1SelectableAreaAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="SelectableAreaWikiStorybook"
    :component="D1SelectableArea"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1SelectableArea :selected="['1', '2']" v-bind="args">
    <template #default="{ className, classNameClick, onClick }">
      <div v-for="item in 5" :key="item" :class="[className, classNameClick]" :data-value="item" @click="onClick">
        Item {{ item }}
      </div>
    </template>
  </D1SelectableArea>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
