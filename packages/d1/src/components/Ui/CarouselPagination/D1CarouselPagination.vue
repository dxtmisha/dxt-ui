<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  CarouselPaginationDesign,
  type CarouselPaginationEmits,
  type CarouselPaginationSlots
} from '@dxtmisha/constructor/CarouselPagination'

import { defaults, type CarouselPaginationProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1CarouselPagination'
})

const emits = defineEmits<CarouselPaginationEmits>()
const props = withDefaults(defineProps<CarouselPaginationProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-carouselPagination': true,
    [`d1-carouselPagination--type--${props.type}`]: inArray(propsValues.type, props.type),
    'd1-carouselPagination--vertical': props.vertical,
    'd1-carouselPagination--dynamic': props.dynamic,
    'd1-carouselPagination--control': props.control,
    [`d1-palette d1-palette--${props.palette}`]: inArray(propsValues.palette, props.palette)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new CarouselPaginationDesign(
  'd1.carouselPagination',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<CarouselPaginationSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
