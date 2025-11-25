<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  DialogDesign,
  type DialogEmits,
  type DialogSlots
} from '@dxtmisha/constructor/Dialog'

import { D1Window } from '../Window'
import { D1Bars } from '../Bars'
import { D1Actions } from '../Actions'
import { D1Icon } from '../Icon'

import { defaults, type DialogProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Dialog'
})

const emits = defineEmits<DialogEmits>()
const props = withDefaults(defineProps<DialogProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-dialog': true,
    'd1-dialog--success': props.success,
    'd1-dialog--error': props.error,
    [`d1-dialog--imagePosition--${props.imagePosition}`]: inArray(propsValues.imagePosition, props.imagePosition),
    [`d1-dialog--padding--${props.padding}`]: inArray(propsValues.padding, props.padding),
    'd1-dialog--paddingByIndent': props.paddingByIndent,
    [`d1-dialog--width--${props.width}`]: inArray(propsValues.width, props.width)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new DialogDesign(
  'd1.dialog',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      window: D1Window,
      bars: D1Bars,
      actions: D1Actions,
      icon: D1Icon
    }
  }
)

const render = design.render()

defineSlots<DialogSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
