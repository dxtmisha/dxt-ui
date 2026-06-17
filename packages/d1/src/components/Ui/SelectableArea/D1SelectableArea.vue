<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  SelectableAreaDesign,
  type SelectableAreaEmits,
  type SelectableAreaSlots
} from '@dxtmisha/constructor/SelectableArea'

import { defaults, type SelectableAreaProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1SelectableArea'
})

const emits = defineEmits<SelectableAreaEmits>()
const props = withDefaults(defineProps<SelectableAreaProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-selectableArea': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new SelectableAreaDesign(
  'd1.selectableArea',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<SelectableAreaSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
