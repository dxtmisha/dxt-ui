<script setup lang="ts">
import { TranslateFramesRead } from '../classes/TranslateFramesRead'
import { usePage } from '../composables/usePage'

import TranslateKeyCreation from './KeyCreation/TranslateKeyCreation.vue'
import TranslateLocalization from './Localization/TranslateLocalization.vue'
import TranslatePage from './TranslatePage.vue'
import TranslateTools from './TranslateTools.vue'

const { selected } = usePage().init()

TranslateFramesRead.make()
</script>

<template>
  <TranslatePage>
    <TranslateTools/>
    <TranslateKeyCreation v-if="selected === 'key-creation'"/>
    <TranslateLocalization v-else-if="selected === 'localization'"/>
  </TranslatePage>
</template>

<style lang="scss">

</style>
