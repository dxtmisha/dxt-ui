<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  InputSearchDesign,
  type InputSearchEmits,
  type InputSearchSlots
} from '@dxtmisha/constructor/InputSearch'

import { D1Field } from '../Field'

import { defaults, type InputSearchProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1InputSearch'
})

const emits = defineEmits<InputSearchEmits>()
const props = withDefaults(defineProps<InputSearchProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-inputSearch': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new InputSearchDesign(
  'd1.inputSearch',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      field: D1Field
    }
  }
)

const render = design.render()

defineSlots<InputSearchSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
