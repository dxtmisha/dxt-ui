<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  ClockDialDesign,
  type ClockDialEmits,
  type ClockDialSlots
} from '@dxtmisha/constructor/ClockDial'

import { defaults, type ClockDialProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1ClockDial'
})

const emits = defineEmits<ClockDialEmits>()
const props = withDefaults(defineProps<ClockDialProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-clockDial': true,
    'd1-clockDial--disabled': props.disabled,
    'd1-clockDial--readonly': props.readonly,
    [`d1-clockDial--type--${props.type}`]: inArray(propsValues.type, props.type),
    [`d1-palette d1-palette--${props.palette}`]: inArray(propsValues.palette, props.palette)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ClockDialDesign(
  'd1.clockDial',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<ClockDialSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
