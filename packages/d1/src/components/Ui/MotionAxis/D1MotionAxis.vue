<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  MotionAxisDesign,
  type MotionAxisEmits,
  type MotionAxisSlots
} from '@dxtmisha/constructor/MotionAxis'

import { defaults, type MotionAxisProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1MotionAxis'
})

const emits = defineEmits<MotionAxisEmits>()
const props = withDefaults(defineProps<MotionAxisProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-motionAxis': true,
    [`d1-motionAxis--axis--${props.axis}`]: inArray(propsValues.axis, props.axis),
    [`d1-motionAxis--direction--${props.direction}`]: inArray(propsValues.direction, props.direction)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new MotionAxisDesign(
  'd1.motionAxis',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<MotionAxisSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
