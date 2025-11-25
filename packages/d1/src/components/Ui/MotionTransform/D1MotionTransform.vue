<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  MotionTransformDesign,
  type MotionTransformEmits,
  type MotionTransformSlots
} from '@dxtmisha/constructor/MotionTransform'

import { defaults, type MotionTransformProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1MotionTransform'
})

const emits = defineEmits<MotionTransformEmits>()
const props = withDefaults(defineProps<MotionTransformProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-motionTransform': true,
    'd1-motionTransform--section': props.section,
    [`d1-motionTransform--animationHeadPosition--${props.animationHeadPosition}`]: inArray(propsValues.animationHeadPosition, props.animationHeadPosition),
    [`d1-motionTransform--adaptive--${props.adaptive}`]: inArray(propsValues.adaptive, props.adaptive)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new MotionTransformDesign(
  'd1.motionTransform',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<MotionTransformSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
