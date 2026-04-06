<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Field } from './index'
import { FieldWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1FieldAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="FieldWikiStorybook"
    :component="D1Field"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1Field label="Field Label" helper-message="Helper text" v-bind="args">
    <template v-slot:default="{binds}">
      <input :value="args.value" readonly v-bind="binds as any"/>
    </template>
  </D1Field>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
