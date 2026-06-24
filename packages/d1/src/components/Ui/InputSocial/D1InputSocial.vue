<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  InputSocialDesign,
  type InputSocialEmits,
  type InputSocialSlots
} from '@dxtmisha/constructor/InputSocial'

import { defaults, type InputSocialProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1InputSocial'
})

const emits = defineEmits<InputSocialEmits>()
const props = withDefaults(defineProps<InputSocialProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-inputSocial': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new InputSocialDesign(
  'd1.inputSocial',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<InputSocialSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
