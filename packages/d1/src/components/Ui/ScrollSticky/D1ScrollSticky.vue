<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  ScrollStickyDesign,
  type ScrollStickyEmits,
  type ScrollStickySlots
} from '@dxtmisha/constructor/ScrollSticky'

import { defaults, type ScrollStickyProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1ScrollSticky'
})

const emits = defineEmits<ScrollStickyEmits>()
const props = withDefaults(defineProps<ScrollStickyProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-scrollSticky': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ScrollStickyDesign(
  'd1.scrollSticky',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<ScrollStickySlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
