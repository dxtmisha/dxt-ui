<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  CellDesign,
  type CellEmits,
  type CellSlots
} from '@dxtmisha/constructor/Cell'

import D1Icon from '../Icon/D1Icon.vue'
import D1Progress from '../Progress/D1Progress.vue'
import D1Ripple from '../Ripple/D1Ripple.vue'

import { defaults, type CellProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Cell'
})

const emits = defineEmits<CellEmits>()
const props = withDefaults(defineProps<CellProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-cell': true,
    'd1-cell--focus': props.focus,
    'd1-cell--selected': props.selected,
    'd1-cell--readonly': props.readonly,
    'd1-cell--disabled': props.disabled,
    'd1-cell--dynamic': props.dynamic,
    'd1-cell--dynamicHover': props.dynamicHover,
    'd1-cell--divider': props.divider,
    [`d1-cell--dividerLabel--${props.dividerLabel}`]: inArray(propsValues.dividerLabel, props.dividerLabel),
    'd1-cell--iconTop': props.iconTop,
    [`d1-cell--padding--${props.padding}`]: inArray(propsValues.padding, props.padding),
    'd1-cell--paddingByIndent': props.paddingByIndent
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new CellDesign(
  'd1.cell',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      icon: D1Icon,
      progress: D1Progress,
      ripple: D1Ripple
    }
  }
)

const render = design.render()

defineSlots<CellSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
