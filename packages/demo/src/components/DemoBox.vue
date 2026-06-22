<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    center?: boolean
    size?: 'sm' | 'md' | 'lg'
  }>(),
  {
    center: false,
    size: 'md'
  }
)

const classList = computed(() => ({
  'demo-box': true,
  'demo-box--center': props.center,
  [`demo-box--${props.size}`]: props.size
}))
</script>

<template>
  <div :class="classList">
    <slot/>
  </div>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-box {
  padding: ui.v('?layout.paddingY') ui.v('?layout.paddingX');

  border-width: 1px;
  @include ui.borderColor(ui.v('?sys.palette.outline'), ui.v('?sys.opacity.outline'));
  border-radius: ui.v('?sys.rounded.md');

  &--center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &--sm {
    min-width: 96px;
    min-height: 96px;
  }

  &--md {
    min-width: 128px;
    min-height: 128px;
  }

  &--lg {
    min-width: 192px;
    min-height: 192px;
  }
}
</style>
