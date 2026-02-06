<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1ListGroup } from './index'
import { ListGroupWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1ListGroupAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="ListGroupWikiStorybook"
    :component="D1ListGroup"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1ListGroup v-bind="args">
    <template #head="{ binds }">
      <span v-bind="binds">head</span>
    </template>
    <template #list>
      list
    </template>
  </D1ListGroup>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
