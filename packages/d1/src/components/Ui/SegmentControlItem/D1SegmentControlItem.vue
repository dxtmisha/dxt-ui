<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  SegmentControlItemDesign,
  type SegmentControlItemEmits,
  type SegmentControlItemSlots
} from '@dxtmisha/constructor/SegmentControlItem'

import { defaults, type SegmentControlItemProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1SegmentControlItem'
})

const emits = defineEmits<SegmentControlItemEmits>()
const props = withDefaults(defineProps<SegmentControlItemProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-segmentControlItem': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new SegmentControlItemDesign(
  'd1.segmentControlItem',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<SegmentControlItemSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
