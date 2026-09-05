<script setup lang="ts">
import { computed } from 'vue'
import type {
  ConstrClasses,
  ConstrStyles
} from '@dxtmisha/functional'
import {
  FormDesign,
  type FormEmits,
  type FormSlots
} from '@dxtmisha/constructor/Form'

import { defaults, type FormProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Form'
})

const emits = defineEmits<FormEmits>()
const props = withDefaults(defineProps<FormProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-form': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new FormDesign(
  'd1.form',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<FormSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
