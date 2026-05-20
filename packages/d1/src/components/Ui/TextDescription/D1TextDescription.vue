<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  TextDescriptionDesign,
  type TextDescriptionEmits,
  type TextDescriptionSlots
} from '@dxtmisha/constructor/TextDescription'

import { defaults, type TextDescriptionProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1TextDescription'
})

const emits = defineEmits<TextDescriptionEmits>()
const props = withDefaults(defineProps<TextDescriptionProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-textDescription': true,
    [`d1-textDescription--size--${props.size}`]: inArray(propsValues.size, props.size)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new TextDescriptionDesign(
  'd1.textDescription',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<TextDescriptionSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
