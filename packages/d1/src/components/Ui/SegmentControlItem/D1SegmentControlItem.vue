<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  SegmentControlItemDesign,
  type SegmentControlItemEmits,
  type SegmentControlItemSlots
} from '@dxtmisha/constructor/SegmentControlItem'

import D1Icon from '../Icon/D1Icon.vue'
import D1Badge from '../Badge/D1Badge.vue'
import D1Progress from '../Progress/D1Progress.vue'
import D1Ripple from '../Ripple/D1Ripple.vue'

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
    'd1-segmentControlItem': true,
    'd1-segmentControlItem--focus': props.focus,
    'd1-segmentControlItem--open': props.open,
    'd1-segmentControlItem--selected': props.selected,
    'd1-segmentControlItem--readonly': props.readonly,
    'd1-segmentControlItem--disabled': props.disabled,
    [`d1-segmentControlItem--adaptive--${props.adaptive}`]: inArray(propsValues.adaptive, props.adaptive),
    [`d1-segmentControlItem--container--${props.container}`]: inArray(propsValues.container, props.container)
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
    styles: stylesToken,
    components: {
      icon: D1Icon,
      badge: D1Badge,
      progress: D1Progress,
      ripple: D1Ripple
    }
  }
)

const render = design.render()

defineSlots<SegmentControlItemSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
