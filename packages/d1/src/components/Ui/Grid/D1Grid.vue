<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  GridDesign,
  type GridEmits,
  type GridSlots
} from '@dxtmisha/constructor/Grid'

import { defaults, type GridProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Grid'
})

const emits = defineEmits<GridEmits>()
const props = withDefaults(defineProps<GridProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-grid': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new GridDesign(
  'd1.grid',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<GridSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
