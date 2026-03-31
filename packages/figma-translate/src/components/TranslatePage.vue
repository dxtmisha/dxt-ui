<script setup lang="ts">

</script>

<template>
  <D1Section class="translate-page">
    <slot/>
  </D1Section>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.translate-page {
  display: flex;
  flex-direction: column;
  row-gap: var(--d1-layout-gapY);

  @include ui.marginX(var(--d1-layout-paddingX));
  @include ui.marginY(var(--d1-layout-paddingY));
}
</style>
