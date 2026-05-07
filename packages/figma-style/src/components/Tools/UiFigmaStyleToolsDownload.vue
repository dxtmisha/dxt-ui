<script setup lang="ts">
import { useStyles } from '../../composables/useStyles'

const { selection, update, loading } = useStyles()

const onClick = () => update()
</script>

<template>
  <D1Button
    v-if="selection.length > 0"
    :loading="loading"
    adaptive="block"
    label="Download"
    @click="onClick"
  />
</template>

<style lang="scss"></style>
