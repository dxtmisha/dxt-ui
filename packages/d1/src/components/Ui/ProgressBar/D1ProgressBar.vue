<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  ProgressBarDesign,
  type ProgressBarEmits,
  type ProgressBarSlots
} from '@dxtmisha/constructor/ProgressBar'

import { defaults, type ProgressBarProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1ProgressBar'
})

const emits = defineEmits<ProgressBarEmits>()
const props = withDefaults(defineProps<ProgressBarProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-progressBar': true,
    'd1-progressBar--overlay': props.overlay
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ProgressBarDesign(
  'd1.progressBar',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<ProgressBarSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
