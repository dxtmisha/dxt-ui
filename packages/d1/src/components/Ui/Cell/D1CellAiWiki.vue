<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Cell } from './index'
import { CellWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1CellAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="CellWikiStorybook"
    :component="D1Cell"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1Cell
    v-bind="args"
    label="Account Profile"
    description="Manage your account preferences and notifications"
    caption="Admin"
    icon="account_circle"
    iconTrailing="chevron_right"
    dynamic
    dynamicHover
  />
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
