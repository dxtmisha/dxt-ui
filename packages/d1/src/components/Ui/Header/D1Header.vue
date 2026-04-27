<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  HeaderDesign,
  type HeaderEmits,
  type HeaderSlots
} from '@dxtmisha/constructor/Header'

import { defaults, type HeaderProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Header'
})

const emits = defineEmits<HeaderEmits>()
const props = withDefaults(defineProps<HeaderProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-header': true,
    [`d1-header--tag--${props.tag}`]: inArray(propsValues.tag, props.tag)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new HeaderDesign(
  'd1.header',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<HeaderSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
