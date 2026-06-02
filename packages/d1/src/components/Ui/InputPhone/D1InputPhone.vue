<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  InputPhoneDesign,
  type InputPhoneEmits,
  type InputPhoneSlots
} from '@dxtmisha/constructor/InputPhone'

import { D1Field } from '../Field'
import { D1InputPhoneDialCode } from '../InputPhoneDialCode'
import { D1Mask } from '../Mask'

import { defaults, type InputPhoneProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1InputPhone'
})

const emits = defineEmits<InputPhoneEmits>()
const props = withDefaults(defineProps<InputPhoneProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-inputPhone': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new InputPhoneDesign(
  'd1.inputPhone',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      mask: D1Mask,
      inputPhoneDialCode: D1InputPhoneDialCode,
      field: D1Field
    }
  }
)

const render = design.render()

defineSlots<InputPhoneSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
