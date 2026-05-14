<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  BleedDesign,
  type BleedEmits,
  type BleedSlots
} from '@dxtmisha/constructor/Bleed'

import { defaults, type BleedProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Bleed'
})

const emits = defineEmits<BleedEmits>()
const props = withDefaults(defineProps<BleedProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-bleed': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new BleedDesign(
  'd1.bleed',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<BleedSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
