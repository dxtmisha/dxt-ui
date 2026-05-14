<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  DividerDesign,
  type DividerEmits,
  type DividerSlots
} from '@dxtmisha/constructor/Divider'

import { defaults, type DividerProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Divider'
})

const emits = defineEmits<DividerEmits>()
const props = withDefaults(defineProps<DividerProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-divider': true,
    [`d1-divider--size--${props.size}`]: inArray(propsValues.size, props.size),
    [`d1-divider--margin--${props.margin}`]: inArray(propsValues.margin, props.margin)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new DividerDesign(
  'd1.divider',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<DividerSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
