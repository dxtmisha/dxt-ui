<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  ContainerDesign,
  type ContainerEmits,
  type ContainerSlots
} from '@dxtmisha/constructor/Container'

import { defaults, type ContainerProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Container'
})

const emits = defineEmits<ContainerEmits>()
const props = withDefaults(defineProps<ContainerProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-container': true,
    [`d1-container--align--${props.align}`]: inArray(propsValues.align, props.align)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ContainerDesign(
  'd1.container',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<ContainerSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
