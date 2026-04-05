<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  SnackbarDesign,
  type SnackbarEmits,
  type SnackbarSlots
} from '@dxtmisha/constructor/Snackbar'

import { defaults, type SnackbarProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Snackbar'
})

const emits = defineEmits<SnackbarEmits>()
const props = withDefaults(defineProps<SnackbarProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-snackbar': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new SnackbarDesign(
  'd1.snackbar',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<SnackbarSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
