<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1InputSocial } from './index'
import { InputSocialWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1InputSocialAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="InputSocialWikiStorybook"
    :component="D1InputSocial"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
