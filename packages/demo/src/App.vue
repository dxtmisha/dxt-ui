<script setup lang="ts">
import { D1Image } from '@dxtmisha/d1/D1Image'

// is Comid
const ad = 'sdsd'

</script>

<template>
  <div class="app-demo">
    {{ ad }}
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
