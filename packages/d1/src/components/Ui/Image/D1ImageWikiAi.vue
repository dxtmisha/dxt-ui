<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { ImageWikiStorybook } from './wiki'

defineOptions({
  name: 'D1ImageWikiAi'
})
</script>

<template>
  <DxtTestWiki design="D1" :wiki="ImageWikiStorybook">

  </DxtTestWiki>
</template>

<style lang="scss">

</style>
