<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  TextLabelDesign,
  type TextLabelEmits,
  type TextLabelSlots
} from '@dxtmisha/constructor/TextLabel'

import { defaults, type TextLabelProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1TextLabel'
})

const emits = defineEmits<TextLabelEmits>()
const props = withDefaults(defineProps<TextLabelProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-textLabel': true,
    [`d1-textLabel--size--${props.size}`]: inArray(propsValues.size, props.size)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new TextLabelDesign(
  'd1.textLabel',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<TextLabelSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
