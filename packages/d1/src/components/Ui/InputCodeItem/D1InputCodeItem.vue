<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  InputCodeItemDesign,
  type InputCodeItemEmits,
  type InputCodeItemSlots
} from '@dxtmisha/constructor/InputCodeItem'

import { defaults, type InputCodeItemProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1InputCodeItem'
})

const emits = defineEmits<InputCodeItemEmits>()
const props = withDefaults(defineProps<InputCodeItemProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-inputCodeItem': true,
    'd1-inputCodeItem--disabled': props.disabled,
    'd1-inputCodeItem--success': props.success,
    'd1-inputCodeItem--error': props.error,
    'd1-inputCodeItem--hide': props.hide
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new InputCodeItemDesign(
  'd1.inputCodeItem',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<InputCodeItemSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
