<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  MotionFlipDesign,
  type MotionFlipEmits,
  type MotionFlipSlots
} from '@dxtmisha/constructor/MotionFlip'

import { defaults, type MotionFlipProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1MotionFlip'
})

const emits = defineEmits<MotionFlipEmits>()
const props = withDefaults(defineProps<MotionFlipProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-motionFlip': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new MotionFlipDesign(
  'd1.motionFlip',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<MotionFlipSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
