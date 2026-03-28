<script setup lang="ts">

import { useApiRequest } from '@dxtmisha/functional'

const { send } = useApiRequest('test')
send()
</script>

<template>
  <div class="app-demo">
    Hi!
    <D1Image  value="home"/>
  </div>
</template>

<style lang="scss">
@use '@dxtmisha/d1/style/ui-properties.scss' as *;
.app-demo {
  color: var(--test, #ffffff);
  background-color: var(--ref-palette-sky-500);
  border-color: var(--ref-palette-sky-700);
  border-width: 4px;
  /* Add your styles here */
}
</style>
