<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  SectionDesign,
  type SectionEmits,
  type SectionSlots
} from '@dxtmisha/constructor/Section'

import { defaults, type SectionProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Section'
})

const emits = defineEmits<SectionEmits>()
const props = withDefaults(defineProps<SectionProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-section': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new SectionDesign(
  'd1.section',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<SectionSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
