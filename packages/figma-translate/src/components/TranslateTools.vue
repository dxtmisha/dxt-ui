<script setup lang="ts">
import { usePage } from '../composables/usePage'

const {
  list
} = usePage()
</script>

<template>
  <div class="translate-tools">
    {{ list }}
    <D1TabsNavigation :list="list"/>
  </div>
</template>

<style lang="scss">
.translate-tools {

}
</style>
