<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1MenuLanguage } from './index'
import { MenuLanguageWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
import { DxtTestButton } from '@dxtmisha/test'
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1MenuLanguageAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="MenuLanguageWikiStorybook"
    :component="D1MenuLanguage"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1MenuLanguage v-bind="args">
    <template #control="{ binds }">
      <DxtTestButton class="wiki-storybook-button" v-bind="binds">
        Select Language
      </DxtTestButton>
    </template>
  </D1MenuLanguage>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
