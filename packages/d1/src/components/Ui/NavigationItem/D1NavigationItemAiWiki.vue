<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1NavigationItem } from './index'
import { NavigationItemWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1NavigationItemAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="NavigationItemWikiStorybook"
    :component="D1NavigationItem"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <DesignComponent v-bind="args" icon="home" label="Home" description="Dashboard overview"/>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
