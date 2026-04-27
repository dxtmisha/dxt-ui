<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  AreaDesign,
  type AreaEmits,
  type AreaSlots
} from '@dxtmisha/constructor/Area'

import { defaults, type AreaProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Area'
})

const emits = defineEmits<AreaEmits>()
const props = withDefaults(defineProps<AreaProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-area': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new AreaDesign(
  'd1.area',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<AreaSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
