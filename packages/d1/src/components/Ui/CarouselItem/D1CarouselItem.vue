<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  CarouselItemDesign,
  type CarouselItemEmits,
  type CarouselItemSlots
} from '@dxtmisha/constructor/CarouselItem'

import { defaults, type CarouselItemProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1CarouselItem'
})

const emits = defineEmits<CarouselItemEmits>()
const props = withDefaults(defineProps<CarouselItemProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-carouselItem': true,
    'd1-carouselItem--selected': props.selected,
    [`d1-carouselItem--snap--${props.snap}`]: inArray(propsValues.snap, props.snap)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new CarouselItemDesign(
  'd1.carouselItem',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<CarouselItemSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
