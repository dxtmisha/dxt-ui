<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Skeleton } from './index'
import { SkeletonWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1SkeletonAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="SkeletonWikiStorybook"
    :component="D1Skeleton"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1Skeleton :active="true" v-bind="args">
    <div style="display: flex; gap: 16px; align-items: center; width: 100%;">
      <div class="skeleton__background" style="width: 48px; height: 48px; border-radius: 50%;"></div>
      <div style="flex: 1;">
        <div class="skeleton__text" style="width: 60%; margin-bottom: 8px;"></div>
        <div class="skeleton__text" style="width: 90%;"></div>
      </div>
    </div>
  </D1Skeleton>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
