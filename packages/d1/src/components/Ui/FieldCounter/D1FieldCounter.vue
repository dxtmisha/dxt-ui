<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  FieldCounterDesign,
  type FieldCounterEmits,
  type FieldCounterSlots
} from '@dxtmisha/constructor/FieldCounter'

import { defaults, type FieldCounterProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1FieldCounter'
})

const emits = defineEmits<FieldCounterEmits>()
const props = withDefaults(defineProps<FieldCounterProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-fieldCounter': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new FieldCounterDesign(
  'd1.fieldCounter',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<FieldCounterSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
