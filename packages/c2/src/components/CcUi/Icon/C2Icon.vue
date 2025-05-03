<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxt-ui/functional'
import {
  IconDesign,
  type IconEmits,
  type IconSlots
} from '@dxt-ui/constructor/Icon'

import { C2Image } from '../Image'

import { defaults, type IconProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'C2Icon'
})

const emits = defineEmits<IconEmits>()
const props = withDefaults(defineProps<IconProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'c2-icon': true,
    'c2-icon--turn': props.turn,
    'c2-icon--disabled': props.disabled,
    'c2-icon--hide': props.hide,
    'c2-icon--asPalette': props.asPalette,
    'c2-icon--dir': props.dir,
    'c2-icon--overlay': props.overlay,
    'c2-icon--dynamic': props.dynamic,
    'c2-icon--start': props.start,
    'c2-icon--end': props.end,
    'c2-icon--high': props.high,
    [`c2-icon--animationType--${props.animationType}`]: inArray(propsValues.animationType, props.animationType),
    'c2-icon--animationShow': props.animationShow,
    'c2-icon--circle': props.circle,
    'c2-icon--box': props.box,
    'c2-icon--rect': props.rect,
    'c2-icon--round': props.round,
    [`c2-icon--size--${props.size}`]: inArray(propsValues.size, props.size),
    'c2-icon--secondary': props.secondary,
    'c2-icon--success': props.success,
    'c2-icon--successInverse': props.successInverse,
    'c2-icon--error': props.error,
    'c2-icon--errorInverse': props.errorInverse
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new IconDesign(
  'c2.icon',
  props,
  {
    emits,
    components: { image: C2Image },
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<IconSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>
