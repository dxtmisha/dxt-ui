<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  InputCodeDesign,
  type InputCodeEmits,
  type InputCodeSlots
} from '@dxtmisha/constructor/InputCode'

import { D1FieldLabel } from '../FieldLabel'
import { D1FieldMessage } from '../FieldMessage'
import { D1InputCodeItem } from '../InputCodeItem'

import { defaults, type InputCodeProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1InputCode'
})

const emits = defineEmits<InputCodeEmits>()
const props = withDefaults(defineProps<InputCodeProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-inputCode': true,
    'd1-inputCode--validation': props.validation
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new InputCodeDesign(
  'd1.inputCode',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      inputCodeItem: D1InputCodeItem,
      fieldLabel: D1FieldLabel,
      fieldMessage: D1FieldMessage
    }
  }
)

const render = design.render()

defineSlots<InputCodeSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
