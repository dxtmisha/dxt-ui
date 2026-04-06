<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1ListMenu } from './index'
import { ListMenuWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1ListMenuAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="ListMenuWikiStorybook"
    :component="D1ListMenu"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1ListMenu embedded :window-attrs="{open: true}" v-bind="args">
    <template #head="{ binds }">
      <span v-bind="binds as any">head</span>
    </template>
    <template #list>
      list
    </template>
  </D1ListMenu>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
