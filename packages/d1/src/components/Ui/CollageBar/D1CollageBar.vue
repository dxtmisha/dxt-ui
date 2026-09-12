<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  CollageBarDesign,
  type CollageBarEmits,
  type CollageBarSlots
} from '@dxtmisha/constructor/CollageBar'

import { D1Button } from '../Button'

import { defaults, type CollageBarProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1CollageBar'
})

const emits = defineEmits<CollageBarEmits>()
const props = withDefaults(defineProps<CollageBarProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-collageBar': true,
    'd1-collageBar--selected': props.selected,
    [`d1-collageBar--position--${props.position}`]: inArray(propsValues.position, props.position)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new CollageBarDesign(
  'd1.collageBar',
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
        secondary: true,
        size: 'xs',
        roundedFull: true,
        inverse: true
      }
    }
  }
)

const render = design.render()

defineSlots<CollageBarSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
