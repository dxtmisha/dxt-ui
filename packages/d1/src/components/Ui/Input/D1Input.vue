<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  InputDesign,
  type InputEmits,
  type InputSlots
} from '@dxtmisha/constructor/Input'

import { D1Mask } from '../Mask'
import { D1Field } from '../Field'

import { defaults, type InputProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Input'
})

const emits = defineEmits<InputEmits>()
const props = withDefaults(defineProps<InputProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-input': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new InputDesign(
  'd1.input',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      mask: D1Mask,
      field: D1Field
    }
  }
)

const render = design.render()

defineSlots<InputSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>
