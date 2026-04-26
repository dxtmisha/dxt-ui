<script  setup lang="ts">
import { useApiAsyncRef, Geo } from '@dxtmisha/functional'

const { data } = useApiAsyncRef('hello')
</script>

<template>
  <section>
    {{ Geo.getLocation() }}
    <h1>Test Api</h1>
    {{ data }}
  </section>
</template>

<style lang="scss"></style>
