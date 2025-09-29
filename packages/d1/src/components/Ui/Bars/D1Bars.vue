<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  BarsDesign,
  type BarsEmits,
  type BarsSlots
} from '@dxtmisha/constructor/Bars'

import { D1Button } from '../Button'

import { defaults, type BarsProps } from './props'
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
    styles: stylesToken,
    components: {
      button: D1Button
    },
    compMod: {
      button: {
        text: true,
        size: 'xs',
        inverse: true
      }
    }
  }
)

const render = design.render()

defineSlots<BarsSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>
