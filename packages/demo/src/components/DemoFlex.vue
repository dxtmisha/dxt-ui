<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
}>()

const classes = computed(() => ({
  'demo-flex': true,
  [`demo-flex--align--${props.align}`]: !!props.align,
  [`demo-flex--justify--${props.justify}`]: !!props.justify,
  [`demo-flex--direction--${props.direction}`]: !!props.direction
}))
</script>

<template>
  <div :class="classes">
    <slot/>
  </div>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-flex {
  display: flex;
  flex-wrap: wrap;
  column-gap: ui.v('?layout.gapX');
  row-gap: ui.v('?layout.gapY');

  &--direction {
    &--row {
      flex-direction: row;
    }
    &--row-reverse {
      flex-direction: row-reverse;
    }
    &--column {
      flex-direction: column;
    }
    &--column-reverse {
      flex-direction: column-reverse;
    }
  }

  &--align {
    &--start {
      align-items: flex-start;
    }
    &--center {
      align-items: center;
    }
    &--end {
      align-items: flex-end;
    }
    &--baseline {
      align-items: baseline;
    }
    &--stretch {
      align-items: stretch;
    }
  }

  &--justify {
    &--start {
      justify-content: flex-start;
    }
    &--center {
      justify-content: center;
    }
    &--end {
      justify-content: flex-end;
    }
    &--between {
      justify-content: space-between;
    }
    &--around {
      justify-content: space-around;
    }
    &--evenly {
      justify-content: space-evenly;
    }
  }
}
</style>
