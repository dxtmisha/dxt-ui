<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  SelectDesign,
  type SelectEmits,
  type SelectSlots
} from '@dxtmisha/constructor/Select'

import { D1Menu } from '../Menu'
import { D1Field } from '../Field'
import { D1SelectValue } from '../SelectValue'
import { D1Input } from '../Input'

import { defaults, type SelectProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Select'
})

const emits = defineEmits<SelectEmits>()
const props = withDefaults(defineProps<SelectProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-select': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new SelectDesign(
  'd1.select',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      menu: D1Menu,
      field: D1Field,
      selectValue: D1SelectValue,
      input: D1Input
    }
  }
)

const render = design.render()

defineSlots<SelectSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
