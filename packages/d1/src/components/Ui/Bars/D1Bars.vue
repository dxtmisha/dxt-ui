<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxt-ui/functional'
import {
  BarsDesign,
  type BarsEmits,
  type BarsSlots
} from '@dxt-ui/constructor/Bars'

import { defaults, type BarsProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Bars'
})

const emits = defineEmits<BarsEmits>()
const props = withDefaults(defineProps<BarsProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-bars': true,
    'd1-bars--action': props.action
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new BarsDesign(
  'd1.bars',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<BarsSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>
