<script setup lang="ts">
import { useWikiPropsHide } from '../../composables/useWikiPropsHide'

import DxtTestButton from '../DxtTestButton.vue'

defineOptions({
  name: 'DxtTestWikiHide'
})

const { hide, toggleHide } = useWikiPropsHide()
</script>

<template>
  <DxtTestButton
    label="Hide all obvious properties"
    :selected="hide"
    @click="toggleHide"
  />
</template>

<style lang="scss"></style>
