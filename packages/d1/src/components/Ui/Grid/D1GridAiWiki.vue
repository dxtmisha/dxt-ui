<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Grid } from './index'
import { GridWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1GridAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="GridWikiStorybook"
    :component="D1Grid"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
        <D1Grid v-bind="args">
          <div style="grid-column: span 4;">1</div>
          <div style="grid-column: span 4;">2</div>
          <div style="grid-column: span 4;">3</div>
        </D1Grid>
      </div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
