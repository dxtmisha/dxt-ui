<script setup lang="ts">
import { useFigmaClientStorage } from '@dxtmisha/figma-ref'

const { item, loading } = useFigmaClientStorage('ai-key')
</script>

<template>
  <div>
    <D1Input
      v-model="item"
      :loading="loading"
    />
  </div>
</template>

<style lang="scss"></style>
