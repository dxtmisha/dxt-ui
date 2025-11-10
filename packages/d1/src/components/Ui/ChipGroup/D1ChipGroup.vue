<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  ChipGroupDesign,
  type ChipGroupEmits,
  type ChipGroupSlots
} from '@dxtmisha/constructor/ChipGroup'

import { D1Chip } from '../Chip'

import { defaults, type ChipGroupProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1ChipGroup'
})

const emits = defineEmits<ChipGroupEmits>()
const props = withDefaults(defineProps<ChipGroupProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-chipGroup': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ChipGroupDesign(
  'd1.chipGroup',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      chip: D1Chip
    }
  }
)

const render = design.render()

defineSlots<ChipGroupSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>
