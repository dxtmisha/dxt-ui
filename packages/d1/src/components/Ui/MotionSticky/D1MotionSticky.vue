<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  MotionStickyDesign,
  type MotionStickyEmits,
  type MotionStickySlots
} from '@dxtmisha/constructor/MotionSticky'

import { defaults, type MotionStickyProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1MotionSticky'
})

const emits = defineEmits<MotionStickyEmits>()
const props = withDefaults(defineProps<MotionStickyProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-motionSticky': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new MotionStickyDesign(
  'd1.motionSticky',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<MotionStickySlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
