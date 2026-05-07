<script setup lang="ts">
import { type UiFigmaFramesItem } from '@dxtmisha/figma'

defineProps<UiFigmaFramesItem>()
</script>

<template>
  <div class="ui-figma-style-selection-item">
    <div
      v-if="image"
      class="ui-figma-style-selection-item__image"
    >
      <D1Image :value="image" size="contain"/>
    </div>
    <D1Cell :label="name" :description="id"/>
  </div>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.ui-figma-style-selection-item {
  border-style: solid;
  border-width: 1px;
  border-color: var(--sys-palette-outline);
  @include ui.borderOpacity(ui.v('?sys.opacity.outline'));
  border-radius: var(--sys-rounded-md);

  &__image {
    position: relative;
    margin-top: ui.v('?layout.paddingY');
    @include ui.marginX(ui.v('?layout.paddingX'));
    height: 256px;
  }
}
</style>
