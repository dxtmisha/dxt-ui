<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Bullet } from './index'
import { BulletWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1BulletAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="BulletWikiStorybook"
    :component="D1Bullet"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
