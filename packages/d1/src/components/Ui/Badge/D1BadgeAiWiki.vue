<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Badge } from './index'
import { BadgeWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1BadgeAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="BadgeWikiStorybook"
    :component="D1Badge"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item" style="min-width: 48px; min-height: 48px;">
  <D1Badge overlap="static" v-bind="args"/>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
