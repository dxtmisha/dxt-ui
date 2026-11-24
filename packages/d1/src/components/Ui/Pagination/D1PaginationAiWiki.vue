<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Pagination } from './index'
import { PaginationWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1PaginationAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="PaginationWikiStorybook"
    :component="D1Pagination"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <DesignComponent :count="100" :rows="10"/>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
