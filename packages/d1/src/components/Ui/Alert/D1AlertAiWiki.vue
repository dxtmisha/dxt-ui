<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Alert } from './index'
import { AlertWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1AlertAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="AlertWikiStorybook"
    :component="D1Alert"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1Alert label="Alert component" description="Alert component for AI code generator demo" icon="info" v-bind="args"/>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
