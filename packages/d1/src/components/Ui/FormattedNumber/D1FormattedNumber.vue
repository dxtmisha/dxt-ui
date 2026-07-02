<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  FormattedNumberDesign,
  type FormattedNumberEmits,
  type FormattedNumberSlots
} from '@dxtmisha/constructor/FormattedNumber'

import { defaults, type FormattedNumberProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1FormattedNumber'
})

const emits = defineEmits<FormattedNumberEmits>()
const props = withDefaults(defineProps<FormattedNumberProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-formattedNumber': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new FormattedNumberDesign(
  'd1.formattedNumber',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<FormattedNumberSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
