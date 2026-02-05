<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  AccordionDesign,
  type AccordionEmits,
  type AccordionSlots
} from '@dxtmisha/constructor/Accordion'

import { D1Cell } from '../Cell'
import { D1MotionTransform } from '../MotionTransform'

import { defaults, type AccordionProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Accordion'
})

const emits = defineEmits<AccordionEmits>()
const props = withDefaults(defineProps<AccordionProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-accordion': true,
    'd1-accordion--divider': props.divider
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new AccordionDesign(
  'd1.accordion',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      cell: D1Cell,
      motionTransform: D1MotionTransform
    }
  }
)

const render = design.render()

defineSlots<AccordionSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
