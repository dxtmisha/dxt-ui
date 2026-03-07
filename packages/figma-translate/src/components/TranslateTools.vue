<script setup lang="ts">
import { usePage } from '../composables/usePage'

const {
  selected,
  list
} = usePage()
</script>

<template>
  <D1TabsNavigation
    v-model:selected="selected"
    :list="list"
  />
</template>

<style lang="scss"></style>
