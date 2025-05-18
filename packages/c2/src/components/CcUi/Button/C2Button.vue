<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxt-ui/functional'
import {
  ButtonDesign,
  type ButtonEmits,
  type ButtonSlots
} from '@dxt-ui/constructor/Button'

import { C2Icon } from '../Icon'
import { C2Progress } from '../Progress'

import { defaults, type ButtonProps, propsValues } from './props'
import './styleToken.scss'
import { C2Ripple } from '../Ripple'

defineOptions({
  name: 'C2Button'
})

const emits = defineEmits<ButtonEmits>()
const props = withDefaults(defineProps<ButtonProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'c2-button': true,
    'c2-button--focus': props.focus,
    'c2-button--disabled': props.disabled,
    'c2-button--selected': props.selected,
    'c2-button--readonly': props.readonly,
    [`c2-button--adaptive--${props.adaptive}`]: inArray(propsValues.adaptive, props.adaptive),
    'c2-button--inverse': props.inverse,
    'c2-button--grid': props.grid,
    [`c2-button--textAlign--${props.textAlign}`]: inArray(propsValues.textAlign, props.textAlign),
    'c2-button--primary': props.primary && !props.primaryInverse && !props.secondary && !props.outlined && !props.ghost && !props.link,
    'c2-button--primaryInverse': props.primaryInverse,
    'c2-button--secondary': props.secondary,
    'c2-button--outlined': props.outlined,
    'c2-button--ghost': props.ghost,
    'c2-button--link': props.link,
    [`c2-button--size--${props.size}`]: inArray(propsValues.size, props.size),
    'c2-button--rounded': props.rounded,
    [`c2-palette c2-palette--${props.palette}`]: inArray(propsValues.palette, props.palette)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ButtonDesign(
  'c2.button',
  props,
  {
    components: {
      icon: C2Icon,
      progress: C2Progress,
      ripple: C2Ripple
    },
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<ButtonSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>
