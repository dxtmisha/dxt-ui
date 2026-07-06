<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  SegmentControlDesign,
  type SegmentControlEmits,
  type SegmentControlSlots
} from '@dxtmisha/constructor/SegmentControl'

import { defaults, type SegmentControlProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1SegmentControl'
})

const emits = defineEmits<SegmentControlEmits>()
const props = withDefaults(defineProps<SegmentControlProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-segmentControl': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new SegmentControlDesign(
  'd1.segmentControl',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<SegmentControlSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
