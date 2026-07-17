<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  SkeletonItemDesign,
  type SkeletonItemEmits,
  type SkeletonItemSlots
} from '@dxtmisha/constructor/SkeletonItem'

import { defaults, type SkeletonItemProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1SkeletonItem'
})

const emits = defineEmits<SkeletonItemEmits>()
const props = withDefaults(defineProps<SkeletonItemProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-skeletonItem': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new SkeletonItemDesign(
  'd1.skeletonItem',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<SkeletonItemSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
