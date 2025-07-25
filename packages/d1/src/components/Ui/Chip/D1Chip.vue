<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxt-ui/functional'
import {
  ChipDesign,
  type ChipEmits,
  type ChipSlots
} from '@dxt-ui/constructor/Chip'

import D1Icon from '../Icon/D1Icon.vue'
import D1Progress from '../Progress/D1Progress.vue'
import D1Ripple from '../Ripple/D1Ripple.vue'

import { defaults, type ChipProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Chip'
})

const emits = defineEmits<ChipEmits>()
const props = withDefaults(defineProps<ChipProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-chip': true,
    'd1-chip--focus': props.focus,
    'd1-chip--disabled': props.disabled,
    'd1-chip--selected': props.selected,
    'd1-chip--readonly': props.readonly,
    [`d1-chip--adaptive--${props.adaptive}`]: inArray(propsValues.adaptive, props.adaptive),
    'd1-chip--inverse': props.inverse,
    'd1-chip--grid': props.grid,
    [`d1-chip--textAlign--${props.textAlign}`]: inArray(propsValues.textAlign, props.textAlign),
    'd1-chip--input': props.input && !props.assistive,
    'd1-chip--assistive': props.assistive,
    [`d1-chip--size--${props.size}`]: inArray(propsValues.size, props.size),
    'd1-chip--roundedFull': props.roundedFull,
    [`d1-chip--container--${props.container}`]: inArray(propsValues.container, props.container),
    [`d1-palette d1-palette--${props.palette}`]: inArray(propsValues.palette, props.palette)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ChipDesign(
  'd1.chip',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      icon: D1Icon,
      progress: D1Progress,
      ripple: D1Ripple
    }
  }
)

const render = design.render()

defineSlots<ChipSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>
