<script  setup lang="ts">
import { useApiRef } from '@dxtmisha/functional'

const { data, init } = useApiRef('hello')

await init()
</script>

<template>
  <section>
    <h1>Test Api</h1>
    {{ data }}
  </section>
</template>

<style lang="scss"></style>
