<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  RadioDesign,
  type RadioEmits,
  type RadioSlots
} from '@dxtmisha/constructor/Radio'

import { D1Image } from '../Image'
import { D1FieldMessage } from '../FieldMessage'
import { D1Progress } from '../Progress'
import { D1Ripple } from '../Ripple'

import { defaults, type RadioProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Radio'
})

const emits = defineEmits<RadioEmits>()
const props = withDefaults(defineProps<RadioProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-radio': true,
    'd1-radio--block': props.block,
    [`d1-radio--adaptive--${props.adaptive}`]: inArray(propsValues.adaptive, props.adaptive),
    [`d1-radio--container--${props.container}`]: inArray(propsValues.container, props.container),
    'd1-radio--required': props.required,
    'd1-radio--itemCenter': props.itemCenter,
    'd1-radio--focus': props.focus,
    'd1-radio--disabled': props.disabled
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new RadioDesign(
  'd1.radio',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      image: D1Image,
      fieldMessage: D1FieldMessage,
      progress: D1Progress,
      ripple: D1Ripple
    }
  }
)

const render = design.render()

defineSlots<RadioSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
