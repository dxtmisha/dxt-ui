<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  CollageItemDesign,
  type CollageItemEmits,
  type CollageItemSlots
} from '@dxtmisha/constructor/CollageItem'

import { defaults, type CollageItemProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1CollageItem'
})

const emits = defineEmits<CollageItemEmits>()
const props = withDefaults(defineProps<CollageItemProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-collageItem': true,
    'd1-collageItem--selected': props.selected,
    [`d1-collageItem--span--${props.span}`]: inArray(propsValues.span, props.span)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new CollageItemDesign(
  'd1.collageItem',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<CollageItemSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
