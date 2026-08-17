<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  CropAreaDesign,
  type CropAreaEmits,
  type CropAreaSlots
} from '@dxtmisha/constructor/CropArea'

import { defaults, type CropAreaProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1CropArea'
})

const emits = defineEmits<CropAreaEmits>()
const props = withDefaults(defineProps<CropAreaProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-cropArea': true,
    'd1-cropArea--disabled': props.disabled,
    'd1-cropArea--disabledTop': props.disabledTop,
    'd1-cropArea--disabledRight': props.disabledRight,
    'd1-cropArea--disabledBottom': props.disabledBottom,
    'd1-cropArea--disabledLeft': props.disabledLeft
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new CropAreaDesign(
  'd1.cropArea',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<CropAreaSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
