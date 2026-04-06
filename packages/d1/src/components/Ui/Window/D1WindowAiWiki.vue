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
        <D1Window embedded open v-bind="args">
            <template #control="{ binds }">
              <DxtTestButton v-bind="binds">Open Window</DxtTestButton>
            </template>
            <template #title>
              <h3>Window Title</h3>
            </template>
            <template #default>
              <p>Window content goes here. This is a demonstration of the window component capabilities.</p>
              <p>It can contain text, images, forms, or any other content.</p>
            </template>
            <template #footer>
              <div>
                <DxtTestButton>Cancel</DxtTestButton>
                <DxtTestButton>Save</DxtTestButton>
              </div>
            </template>
          </D1Window>
      </div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
