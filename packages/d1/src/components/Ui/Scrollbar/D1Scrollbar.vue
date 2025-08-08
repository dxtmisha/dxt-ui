<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxt-ui/functional'
import {
  ScrollbarDesign,
  type ScrollbarEmits,
  type ScrollbarSlots
} from '@dxt-ui/constructor/Scrollbar'

import { defaults, type ScrollbarProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Scrollbar'
})

const emits = defineEmits<ScrollbarEmits>()
const props = withDefaults(defineProps<ScrollbarProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-scrollbar': true,
    'd1-scrollbar--visible': props.visible,
    'd1-scrollbar--divider': props.divider,
    'd1-scrollbar--dividerTop': props.dividerTop,
    'd1-scrollbar--dividerBottom': props.dividerBottom,
    'd1-scrollbar--dividerHide': props.dividerHide,
    'd1-scrollbar--inverse': props.inverse,
    'd1-scrollbar--standard': props.standard
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ScrollbarDesign(
  'd1.scrollbar',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<ScrollbarSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>
