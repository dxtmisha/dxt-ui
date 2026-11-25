<script setup lang="ts">
import DemoFlex from '../../DemoFlex.vue'
import DemoBox from '../../DemoBox.vue'

defineProps<{
  items: { value: string, label: string }[]
  className?: string
  classClick?: string
  classPosition?: string
  selectedValues?: string[]
}>()
</script>

<template>
  <DemoFlex class="demo-draggable-wrapper-list">
    <DemoBox
      v-for="item in items"
      :key="item.value"
      center
      size="sm"
      :class="[
        className,
        classClick,
        classPosition,
        selectedValues?.includes(item.value) ? 'd1-draggableWrapper__item--selected' : undefined,
        selectedValues?.includes(item.value) ? 'demo-draggable-wrapper-list__selected' : undefined
      ]"
      :data-value="item.value"
    >
      {{ item.label }}
    </DemoBox>
  </DemoFlex>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-draggable-wrapper-list {
  &__selected {
    @include ui.borderColor(ui.v('?sys.palette.primary'), ui.v('?sys.opacity.primary'));
  }
}
</style>
