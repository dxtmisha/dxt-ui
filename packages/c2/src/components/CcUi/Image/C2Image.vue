<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
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
  name: 'C2Image'
})

const emits = defineEmits<ImageEmits>()
const props = withDefaults(defineProps<ImageProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'c2-image': true,
    'c2-image--turn': props.turn,
    'c2-image--disabled': props.disabled,
    'c2-image--hide': props.hide,
    'c2-image--adaptive': props.adaptive,
    [`c2-image--size--${props.size}`]: inArray(propsValues.size, props.size),
    [`c2-image--padding--${props.padding}`]: inArray(propsValues.padding, props.padding)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ImageDesign(
  'c2.image',
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
