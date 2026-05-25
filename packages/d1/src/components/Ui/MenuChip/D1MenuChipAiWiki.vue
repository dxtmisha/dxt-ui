<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1MenuChip } from './index'
import { MenuChipWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
import { DxtTestButton } from '@dxtmisha/test'
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1MenuChipAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="MenuChipWikiStorybook"
    :component="D1MenuChip"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1MenuChip :menu-attrs="{windowAttrs: {open: true}, embedded: true}" v-bind="args">
    <template #default="{ binds }">
      <DxtTestButton class="wiki-storybook-button" v-bind="binds">
        Open Menu
      </DxtTestButton>
    </template>
  </D1MenuChip>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
