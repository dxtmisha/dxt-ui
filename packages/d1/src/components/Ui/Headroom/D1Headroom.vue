<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  HeadroomDesign,
  type HeadroomEmits,
  type HeadroomSlots
} from '@dxtmisha/constructor/Headroom'

import { defaults, type HeadroomProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Headroom'
})

const emits = defineEmits<HeadroomEmits>()
const props = withDefaults(defineProps<HeadroomProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-headroom': true,
    'd1-headroom--disappears': props.disappears
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new HeadroomDesign(
  'd1.headroom',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<HeadroomSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
