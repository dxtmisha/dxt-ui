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

import { D1Image } from '../Image'

import { defaults, type IconProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Icon'
})

const emits = defineEmits<IconEmits>()
const props = withDefaults(defineProps<IconProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-icon': true,
    'd1-icon--turn': props.turn,
    'd1-icon--disabled': props.disabled,
    'd1-icon--hide': props.hide,
    'd1-icon--asPalette': props.asPalette,
    'd1-icon--dir': props.dir,
    'd1-icon--overlay': props.overlay,
    'd1-icon--dynamic': props.dynamic,
    'd1-icon--start': props.start,
    'd1-icon--end': props.end,
    'd1-icon--high': props.high,
    [`d1-icon--animationType--${props.animationType}`]: inArray(propsValues.animationType, props.animationType),
    'd1-icon--animationShow': props.animationShow,
    'd1-icon--square': props.square && !props.circle && !props.rect,
    'd1-icon--circle': props.circle,
    'd1-icon--rect': props.rect,
    [`d1-icon--size--${props.size}`]: inArray(propsValues.size, props.size),
    'd1-icon--inverse': props.inverse,
    [`d1-icon--rounded--${props.rounded}`]: inArray(propsValues.rounded, props.rounded)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new IconDesign(
  'd1.icon',
  props,
  {
    emits,
    components: {
      image: D1Image
    },
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
