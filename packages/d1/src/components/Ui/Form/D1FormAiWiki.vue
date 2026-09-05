<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Form } from './index'
import { FormWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
import { DxtTestButton } from '@dxtmisha/test'
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1FormAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="FormWikiStorybook"
    :component="D1Form"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1Form v-bind="args">
    <template #default>
      <input name="username" type="text" placeholder="Username" />
      <DxtTestButton type="submit">Submit</DxtTestButton>
    </template>
  </D1Form>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
