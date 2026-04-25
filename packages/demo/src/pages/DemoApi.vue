<script async setup lang="ts">
import { useApiRef } from '@dxtmisha/functional'
import { watchEffect } from 'vue'

const { data, init } = useApiRef('hello')

await init()

watchEffect(() => {
  console.log('data', data.value)
})
</script>

<template>
  <section>
    <h1>Test Api</h1>
    {{ data }}
  </section>
</template>

<style lang="scss"></style>
