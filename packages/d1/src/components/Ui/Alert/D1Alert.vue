<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  AlertDesign,
  type AlertEmits,
  type AlertSlots
} from '@dxtmisha/constructor/Alert'

import { defaults, type AlertProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Alert'
})

const emits = defineEmits<AlertEmits>()
const props = withDefaults(defineProps<AlertProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-alert': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new AlertDesign(
  'd1.alert',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<AlertSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
