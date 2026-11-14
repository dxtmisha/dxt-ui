<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  ButtonDesign,
  type ButtonEmits,
  type ButtonSlots
} from '@dxtmisha/constructor/Button'

import { defaults, type ButtonProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'UiButton'
})

const emits = defineEmits<ButtonEmits>()
const props = withDefaults(defineProps<ButtonProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'ui-button': true,
    'ui-button--focus': props.focus,
    'ui-button--disabled': props.disabled,
    'ui-button--selected': props.selected,
    'ui-button--readonly': props.readonly,
    [`ui-button--adaptive--${props.adaptive}`]: inArray(propsValues.adaptive, props.adaptive),
    'ui-button--container': props.container,
    'ui-button--inverse': props.inverse,
    'ui-button--grid': props.grid,
    [`ui-button--textAlign--${props.textAlign}`]: inArray(propsValues.textAlign, props.textAlign)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ButtonDesign(
  'ui.button',
  props,
  {
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
  <render/>
</template>
