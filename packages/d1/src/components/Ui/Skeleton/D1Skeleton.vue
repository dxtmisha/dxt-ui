<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxt-ui/functional'
import {
  SkeletonDesign,
  type SkeletonEmits,
  type SkeletonSlots
} from '@dxt-ui/constructor/Skeleton'

import { defaults, type SkeletonProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Skeleton'
})

const emits = defineEmits<SkeletonEmits>()
const props = withDefaults(defineProps<SkeletonProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-skeleton': true,
    'd1-skeleton--active': props.active
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new SkeletonDesign(
  'd1.skeleton',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<SkeletonSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>
