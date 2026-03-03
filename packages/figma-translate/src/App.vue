<script setup lang="ts">
import { usePage } from './composables/usePage'

import TranslateTools from './components/TranslateTools.vue'
import TranslatePage from './components/TranslatePage.vue'

import TranslateKeyCreation from './components/KeyCreation/TranslateKeyCreation.vue'
import TranslateLocalization from './components/Localization/TranslateLocalization.vue'

const { selected } = usePage().init()
</script>

<template>
  <TranslateTools/>
  <TranslatePage>
    <TranslateKeyCreation v-if="selected === 'key-creation'"/>
    <TranslateLocalization v-else-if="selected === 'localization'"/>
  </TranslatePage>
</template>

<style lang="scss"></style>
