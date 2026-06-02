<script setup lang="ts">
import { DxtTestWiki } from '@dxtmisha/test'
import { D1InputPhoneDialCode } from './index'
import { InputPhoneDialCodeWikiStorybook } from './wiki'

// :component-import [!] System label / Системная метка
// :component-import [!] System label / Системная метка

defineOptions({
  name: 'D1InputPhoneDialCodeAiWiki'
})
</script>

<template>
  <DxtTestWiki
    design="D1"
    :wiki="InputPhoneDialCodeWikiStorybook"
    :component="D1InputPhoneDialCode"
  >
    <!-- :component-render [!] System label / Системная метка -->
    <template #render="{ args, classDemo }">
    <div :class="classDemo.item">
  <DesignComponent v-bind="args" />
</div>
    </template>
    <!-- :component-render [!] System label / Системная метка -->
  </DxtTestWiki>
</template>

<style lang="scss"></style>
