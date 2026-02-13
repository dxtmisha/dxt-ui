<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  HorizontalScrollDesign,
  type HorizontalScrollEmits,
  type HorizontalScrollSlots
} from '@dxtmisha/constructor/HorizontalScroll'

import { defaults, type HorizontalScrollProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1HorizontalScroll'
})

const emits = defineEmits<HorizontalScrollEmits>()
const props = withDefaults(defineProps<HorizontalScrollProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-horizontalScroll': true,
    'd1-horizontalScroll--flush': props.flush
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new HorizontalScrollDesign(
  'd1.horizontalScroll',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<HorizontalScrollSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
