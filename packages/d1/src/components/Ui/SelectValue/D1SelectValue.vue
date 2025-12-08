<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  SelectValueDesign,
  type SelectValueEmits,
  type SelectValueSlots
} from '@dxtmisha/constructor/SelectValue'

import { D1Chip } from '../Chip'

import { defaults, type SelectValueProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1SelectValue'
})

const emits = defineEmits<SelectValueEmits>()
const props = withDefaults(defineProps<SelectValueProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-selectValue': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new SelectValueDesign(
  'd1.selectValue',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      chip: D1Chip
    }
  }
)

const render = design.render()

defineSlots<SelectValueSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
