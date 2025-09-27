<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxt-ui/functional'
import {
  MaskDesign,
  type MaskEmits,
  type MaskSlots
} from '@dxt-ui/constructor/Mask'

import { defaults, type MaskProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Mask'
})

const emits = defineEmits<MaskEmits>()
const props = withDefaults(defineProps<MaskProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-mask': true,
    'd1-mask--visible': props.visible,
    'd1-mask--visiblePartly': props.visiblePartly,
    [`d1-mask--align--${props.align}`]: inArray(propsValues.align, props.align),
    [`d1-mask--dir--${props.dir}`]: inArray(propsValues.dir, props.dir)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new MaskDesign(
  'd1.mask',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<MaskSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>
