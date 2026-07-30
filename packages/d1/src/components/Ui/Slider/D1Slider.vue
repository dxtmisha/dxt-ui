<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  SliderDesign,
  type SliderEmits,
  type SliderSlots
} from '@dxtmisha/constructor/Slider'

import { defaults, type SliderProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Slider'
})

const emits = defineEmits<SliderEmits>()
const props = withDefaults(defineProps<SliderProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-slider': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new SliderDesign(
  'd1.slider',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<SliderSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
