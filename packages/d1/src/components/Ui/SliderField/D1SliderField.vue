<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  SliderFieldDesign,
  type SliderFieldEmits,
  type SliderFieldSlots
} from '@dxtmisha/constructor/SliderField'

import { D1Icon } from '../Icon'
import { D1FieldLabel } from '../FieldLabel'
import { D1FieldMessage } from '../FieldMessage'
import { D1Slider } from '../Slider'

import { defaults, type SliderFieldProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1SliderField'
})

const emits = defineEmits<SliderFieldEmits>()
const props = withDefaults(defineProps<SliderFieldProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-sliderField': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new SliderFieldDesign(
  'd1.sliderField',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      icon: D1Icon,
      fieldLabel: D1FieldLabel,
      fieldMessage: D1FieldMessage,
      slider: D1Slider
    }
  }
)

const render = design.render()

defineSlots<SliderFieldSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
