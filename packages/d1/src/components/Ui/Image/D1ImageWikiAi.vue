<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Image } from './index'
import { ImageWikiStorybook } from './wiki'

defineOptions({
  name: 'D1ImageWikiAi'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="ImageWikiStorybook"
    :component="D1Image"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
      <div
        :class="classDemo.item"
        style="position: relative; width: 48px; height: 48px;"
      >
        <D1Image v-bind="args"/>
      </div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss">

</style>
