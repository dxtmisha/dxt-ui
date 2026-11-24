<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Breadcrumbs } from './index'
import { BreadcrumbsWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1BreadcrumbsAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="BreadcrumbsWikiStorybook"
    :component="D1Breadcrumbs"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <DesignComponent
    v-bind="args"
    :list="args.list ?? [
      { label: 'Home', icon: 'home', href: '#' },
      { label: 'Catalog', href: '#catalog' },
      { label: 'Current Page' }
    ]"
  />
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
