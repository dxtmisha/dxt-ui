<script setup lang="ts">

</script>

<template>
  <div class="ui-test-group">
    <slot/>
  </div>
</template>

<style lang="scss">
.ui-test-group {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;

  width: 100%;
}
</style>
