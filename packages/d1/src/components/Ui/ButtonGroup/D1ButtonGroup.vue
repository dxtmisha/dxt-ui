<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  ButtonGroupDesign,
  type ButtonGroupEmits,
  type ButtonGroupSlots
} from '@dxtmisha/constructor/ButtonGroup'

import { D1Button } from '../Button'

import { defaults, type ButtonGroupProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1ButtonGroup'
})

const emits = defineEmits<ButtonGroupEmits>()
const props = withDefaults(defineProps<ButtonGroupProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-buttonGroup': true,
    [`d1-buttonGroup--orientation--${props.orientation}`]: inArray(propsValues.orientation, props.orientation),
    'd1-buttonGroup--wrap': props.wrap
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ButtonGroupDesign(
  'd1.buttonGroup',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      button: D1Button
    }
  }
)

const render = design.render()

defineSlots<ButtonGroupSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
