<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxt-ui/functional'
import {
  ScrollbarDesign,
  type ScrollbarEmits,
  type ScrollbarSlots
} from '@dxt-ui/constructor/Scrollbar'

import { defaults, type ScrollbarProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'C2Scrollbar'
})

const emits = defineEmits<ScrollbarEmits>()
const props = withDefaults(defineProps<ScrollbarProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'c2-scrollbar': true,
    'c2-scrollbar--visible': props.visible,
    'c2-scrollbar--divider': props.divider,
    'c2-scrollbar--dividerTop': props.dividerTop,
    'c2-scrollbar--dividerBottom': props.dividerBottom,
    'c2-scrollbar--inverse': props.inverse
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ScrollbarDesign(
  'c2.scrollbar',
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
