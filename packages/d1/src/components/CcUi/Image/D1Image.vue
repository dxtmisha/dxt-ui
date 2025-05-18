<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxt-ui/functional'
import {
  ImageDesign,
  type ImageEmits,
  type ImageSlots
} from '@dxt-ui/constructor/Image'

import { defaults, type ImageProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Image'
})

const emits = defineEmits<ImageEmits>()
const props = withDefaults(defineProps<ImageProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-image': true,
    'd1-image--turn': props.turn,
    'd1-image--disabled': props.disabled,
    'd1-image--hide': props.hide,
    'd1-image--adaptive': props.adaptive,
    [`d1-image--size--${props.size}`]: inArray(propsValues.size, props.size)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ImageDesign(
  'd1.image',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<ImageSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>
