<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxt-ui/functional'
import {
  ProgressDesign,
  type ProgressEmits,
  type ProgressSlots
} from '@dxt-ui/constructor/Progress'

import { defaults, type ProgressProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Progress'
})

const emits = defineEmits<ProgressEmits>()
const props = withDefaults(defineProps<ProgressProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-progress': true,
    'd1-progress--point': props.point,
    'd1-progress--linear': props.linear && !props.circular,
    'd1-progress--circular': props.circular,
    [`d1-progress--indeterminate--${props.indeterminate}`]: inArray(propsValues.indeterminate, props.indeterminate),
    [`d1-progress--position--${props.position}`]: inArray(propsValues.position, props.position),
    'd1-progress--dense': props.dense,
    'd1-progress--inverse': props.inverse,
    [`d1-progress--size--${props.size}`]: inArray(propsValues.size, props.size),
    [`d1-palette d1-palette--${props.palette}`]: inArray(propsValues.palette, props.palette)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ProgressDesign(
  'd1.progress',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<ProgressSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>
