<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  DummyDesign,
  type DummyEmits,
  type DummySlots
} from '@dxtmisha/constructor/Dummy'

import { defaults, type DummyProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Dummy'
})

const emits = defineEmits<DummyEmits>()
const props = withDefaults(defineProps<DummyProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-dummy': true,
    [`d1-dummy--size--${props.size}`]: inArray(propsValues.size, props.size),
    [`d1-palette d1-palette--${props.palette}`]: inArray(propsValues.palette, props.palette)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new DummyDesign(
  'd1.dummy',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<DummySlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
