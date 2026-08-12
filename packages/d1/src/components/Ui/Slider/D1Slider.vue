<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  SliderDesign,
  type SliderEmits,
  type SliderSlots
} from '@dxtmisha/constructor/Slider'

import { defaults, type SliderProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Slider'
})

const emits = defineEmits<SliderEmits>()
const props = withDefaults(defineProps<SliderProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-slider': true,
    'd1-slider--selected': props.selected,
    'd1-slider--disabled': props.disabled,
    'd1-slider--vertical': props.vertical
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
