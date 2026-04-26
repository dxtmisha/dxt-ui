<script setup lang="ts">
import { provide } from 'vue'
provide('test', 'ok')
</script>

<template>
  <div class="app-demo">
    <RouterView/>
  </div>
</template>

<style lang="scss"></style>
