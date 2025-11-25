<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  WindowDesign,
  type WindowEmits,
  type WindowSlots
} from '@dxtmisha/constructor/Window'

import D1Scrollbar from '../Scrollbar/D1Scrollbar.vue'
import D1Button from '../Button/D1Button.vue'
import D1Image from '../Image/D1Image.vue'

import { defaults, type WindowProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Window'
})

const emits = defineEmits<WindowEmits>()
const props = withDefaults(defineProps<WindowProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-window': true,
    'd1-window--width--custom': isFilled(props.width) && !inArray(propsValues.width, props.width),
    [`d1-window--width--${props.width}`]: inArray(propsValues.width, props.width),
    'd1-window--height--custom': isFilled(props.height) && !inArray(propsValues.height, props.height),
    [`d1-window--height--${props.height}`]: inArray(propsValues.height, props.height),
    'd1-window--hide': props.hide,
    [`d1-window--axis--${props.axis}`]: inArray(propsValues.axis, props.axis),
    [`d1-window--imagePosition--${props.imagePosition}`]: inArray(propsValues.imagePosition, props.imagePosition),
    'd1-window--dense': props.dense,
    [`d1-window--alignment--${props.alignment}`]: inArray(propsValues.alignment, props.alignment),
    [`d1-window--origin--${props.origin}`]: inArray(propsValues.origin, props.origin),
    [`d1-window--adaptive--${props.adaptive}`]: inArray(propsValues.adaptive, props.adaptive),
    'd1-window--fullscreen': props.fullscreen,
    'd1-window--overscroll': props.overscroll,
    'd1-window--closeMobileHide': props.closeMobileHide,
    'd1-window--widthMatch': props.widthMatch,
    [`d1-window--imageSize--${props.imageSize}`]: inArray(propsValues.imageSize, props.imageSize)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  '--d1-window-sys-width': props.width ?? null,
  '--d1-window-sys-height': props.height ?? null
  // :styles-values [!] System label / Системная метка
}))

const design = new WindowDesign(
  'd1.window',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      scrollbar: D1Scrollbar,
      button: D1Button,
      image: D1Image
    },
    compMod: {
      button: {
        secondary: true,
        roundedFull: true,
        size: 'xs',
        palette: 'neutral'
      }
    }
  }
)

const render = design.render()

defineSlots<WindowSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
