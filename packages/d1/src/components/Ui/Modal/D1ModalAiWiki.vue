<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Modal } from './index'
import { ModalWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1ModalAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="ModalWikiStorybook"
    :component="D1Modal"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1Modal embedded open v-bind="args">
    <template #default>
      <p>This is a modal dialog.</p>
    </template>
  </D1Modal>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
