<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  ClockPeriodDesign,
  type ClockPeriodEmits,
  type ClockPeriodSlots
} from '@dxtmisha/constructor/ClockPeriod'

import { defaults, type ClockPeriodProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1ClockPeriod'
})

const emits = defineEmits<ClockPeriodEmits>()
const props = withDefaults(defineProps<ClockPeriodProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-clockPeriod': true,
    'd1-clockPeriod--readonly': props.readonly,
    'd1-clockPeriod--disabled': props.disabled,
    [`d1-clockPeriod--orientation--${props.orientation}`]: inArray(propsValues.orientation, props.orientation),
    [`d1-palette d1-palette--${props.palette}`]: inArray(propsValues.palette, props.palette)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ClockPeriodDesign(
  'd1.clockPeriod',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<ClockPeriodSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
