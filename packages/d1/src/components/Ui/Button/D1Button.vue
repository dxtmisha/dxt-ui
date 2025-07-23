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

import D1Icon from '../Icon/D1Icon.vue'
import D1Progress from '../Progress/D1Progress.vue'
import D1Ripple from '../Ripple/D1Ripple.vue'

import { defaults, type ButtonProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Button'
})

const emits = defineEmits<ButtonEmits>()
const props = withDefaults(defineProps<ButtonProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-button': true,
    'd1-button--focus': props.focus,
    'd1-button--disabled': props.disabled,
    'd1-button--selected': props.selected,
    'd1-button--readonly': props.readonly,
    [`d1-button--adaptive--${props.adaptive}`]: inArray(propsValues.adaptive, props.adaptive),
    'd1-button--inverse': props.inverse,
    'd1-button--grid': props.grid,
    [`d1-button--textAlign--${props.textAlign}`]: inArray(propsValues.textAlign, props.textAlign),
    'd1-button--primary': props.primary && !props.secondary && !props.outline && !props.text,
    'd1-button--secondary': props.secondary,
    'd1-button--outline': props.outline,
    'd1-button--text': props.text,
    [`d1-button--size--${props.size}`]: inArray(propsValues.size, props.size),
    'd1-button--roundedFull': props.roundedFull,
    [`d1-button--container--${props.container}`]: inArray(propsValues.container, props.container),
    [`d1-palette d1-palette--${props.palette}`]: inArray(propsValues.palette, props.palette)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ButtonDesign(
  'd1.button',
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

defineSlots<ButtonSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>
