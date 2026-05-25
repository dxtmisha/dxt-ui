<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1MenuButton } from './index'
import { MenuButtonWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
import { DxtTestButton } from '@dxtmisha/test'
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1MenuButtonAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="MenuButtonWikiStorybook"
    :component="D1MenuButton"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1MenuButton :menu-attrs="{windowAttrs: {open: true}, embedded: true}" v-bind="args">
    <template #default="{ binds }">
      <DxtTestButton class="wiki-storybook-button" v-bind="binds">
        Open Menu
      </DxtTestButton>
    </template>
  </D1MenuButton>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
