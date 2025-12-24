<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  ArrowDesign,
  type ArrowEmits,
  type ArrowSlots
} from '@dxtmisha/constructor/Arrow'

import { defaults, type ArrowProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Arrow'
})

const emits = defineEmits<ArrowEmits>()
const props = withDefaults(defineProps<ArrowProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-arrow': true,
    [`d1-arrow--size--${props.size}`]: inArray(propsValues.size, props.size)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ArrowDesign(
  'd1.arrow',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<ArrowSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
