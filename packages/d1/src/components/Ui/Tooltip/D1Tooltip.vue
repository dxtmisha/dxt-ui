<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  TooltipDesign,
  type TooltipEmits,
  type TooltipSlots
} from '@dxtmisha/constructor/Tooltip'

import { D1Arrow } from '../Arrow'

import { defaults, type TooltipProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Tooltip'
})

const emits = defineEmits<TooltipEmits>()
const props = withDefaults(defineProps<TooltipProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-tooltip': true,
    'd1-tooltip--interactive': props.interactive,
    'd1-tooltip--embedded': props.embedded,
    [`d1-tooltip--maxWidth--${props.maxWidth}`]: inArray(propsValues.maxWidth, props.maxWidth)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new TooltipDesign(
  'd1.tooltip',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      arrow: D1Arrow
    }
  }
)

const render = design.render()

defineSlots<TooltipSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
