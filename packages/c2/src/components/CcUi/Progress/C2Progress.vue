<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  // isFilled,
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
  name: 'C2Progress'
})

const emits = defineEmits<ProgressEmits>()
const props = withDefaults(defineProps<ProgressProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'c2-progress': true,
    'c2-progress--point': props.point,
    'c2-progress--linear': props.linear && !props.circular,
    'c2-progress--circular': props.circular,
    [`c2-progress--indeterminate--${props.indeterminate}`]: inArray(propsValues.indeterminate, props.indeterminate),
    [`c2-progress--position--${props.position}`]: inArray(propsValues.position, props.position),
    'c2-progress--dense': props.dense,
    'c2-progress--inverse': props.inverse,
    [`c2-palette c2-palette--${props.palette}`]: inArray(propsValues.palette, props.palette)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ProgressDesign(
  'c2.progress',
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
