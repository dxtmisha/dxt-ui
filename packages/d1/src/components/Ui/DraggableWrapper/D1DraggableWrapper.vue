<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  DraggableWrapperDesign,
  type DraggableWrapperEmits,
  type DraggableWrapperSlots
} from '@dxtmisha/constructor/DraggableWrapper'

import { defaults, type DraggableWrapperProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1DraggableWrapper'
})

const emits = defineEmits<DraggableWrapperEmits>()
const props = withDefaults(defineProps<DraggableWrapperProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-draggableWrapper': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new DraggableWrapperDesign(
  'd1.draggableWrapper',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<DraggableWrapperSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
