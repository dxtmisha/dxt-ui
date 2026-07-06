<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  SegmentControlDesign,
  type SegmentControlEmits,
  type SegmentControlSlots
} from '@dxtmisha/constructor/SegmentControl'

import { D1HorizontalScroll } from '../HorizontalScroll'
import { D1SegmentControlItem } from '../SegmentControlItem'

import { defaults, type SegmentControlProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1SegmentControl'
})

const emits = defineEmits<SegmentControlEmits>()
const props = withDefaults(defineProps<SegmentControlProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-segmentControl': true,
    'd1-segmentControl--divider': props.divider
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
    styles: stylesToken,
    components: {
      horizontalScroll: D1HorizontalScroll,
      segmentControlItem: D1SegmentControlItem
    }
  }
)

const render = design.render()

defineSlots<SegmentControlSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
