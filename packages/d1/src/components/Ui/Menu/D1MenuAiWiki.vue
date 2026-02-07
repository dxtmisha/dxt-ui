<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Menu } from './index'
import { MenuWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
import { DxtTestButton } from '@dxtmisha/test'
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1MenuAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="MenuWikiStorybook"
    :component="D1Menu"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1Menu embedded :window-attrs="{open: true}" v-bind="args">
    <template #control="{ binds }">
      <DxtTestButton class="wiki-storybook-button" v-bind="binds">
        Open Menu
      </DxtTestButton>
    </template>
  </D1Menu>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
