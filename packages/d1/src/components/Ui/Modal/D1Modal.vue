<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  ModalDesign,
  type ModalEmits,
  type ModalSlots
} from '@dxtmisha/constructor/Modal'

import { D1Window } from '../Window'
import { D1Bars } from '../Bars'
import { D1Actions } from '../Actions'

import { defaults, type ModalProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Modal'
})

const emits = defineEmits<ModalEmits>()
const props = withDefaults(defineProps<ModalProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-modal': true,
    [`d1-modal--imagePosition--${props.imagePosition}`]: inArray(propsValues.imagePosition, props.imagePosition),
    [`d1-modal--padding--${props.padding}`]: inArray(propsValues.padding, props.padding),
    'd1-modal--paddingByIndent': props.paddingByIndent,
    [`d1-modal--width--${props.width}`]: inArray(propsValues.width, props.width)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ModalDesign(
  'd1.modal',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      window: D1Window,
      bars: D1Bars,
      actions: D1Actions
    }
  }
)

const render = design.render()

defineSlots<ModalSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
