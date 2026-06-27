<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1Avatar } from './index'
import { AvatarWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1AvatarAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="AvatarWikiStorybook"
    :component="D1Avatar"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
