<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1MenuCountry } from './index'
import { MenuCountryWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
import { DxtTestButton } from '@dxtmisha/test'
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1MenuCountryAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="MenuCountryWikiStorybook"
    :component="D1MenuCountry"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <D1MenuCountry v-bind="args">
    <template #control="{ binds }">
      <DxtTestButton class="wiki-storybook-button" v-bind="binds">
        Select Country
      </DxtTestButton>
    </template>
  </D1MenuCountry>
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
