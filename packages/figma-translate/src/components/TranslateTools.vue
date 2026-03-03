<script setup lang="ts">
import { usePage } from '../composables/usePage'

const {
  selected,
  list
} = usePage()
</script>

<template>
  <div class="translate-tools">
    <D1TabsNavigation :list="list" v-model:selected="selected"/>
  </div>
</template>

<style lang="scss"></style>
