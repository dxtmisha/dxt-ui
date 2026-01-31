<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Window } from './index'
import { WindowWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
import { DxtTestButton } from '@dxtmisha/test'
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1WindowAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="WindowWikiStorybook"
    :component="D1Window"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <iframe style="width: 320px; height: 240px;">
    <D1Window v-bind="args">
      <template #control="{ binds }">
        <a v-bind="binds">Open Window</a>
      </template>
      <template #default>
        <p>Window content goes here.</p>
      </template>
    </D1Window>
  </iframe>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
