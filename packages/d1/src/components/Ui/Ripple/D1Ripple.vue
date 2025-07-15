<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxt-ui/functional'
import {
  RippleDesign,
  type RippleEmits,
  type RippleSlots
} from '@dxt-ui/constructor/Ripple'

import { defaults, type RippleProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Ripple'
})

const emits = defineEmits<RippleEmits>()
const props = withDefaults(defineProps<RippleProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-ripple': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new RippleDesign(
  'd1.ripple',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<RippleSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>
