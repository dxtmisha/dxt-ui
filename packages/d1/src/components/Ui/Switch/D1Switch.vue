<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  SwitchDesign,
  type SwitchEmits,
  type SwitchSlots
} from '@dxtmisha/constructor/Switch'

import { D1Image } from '../Image'
import { D1FieldMessage } from '../FieldMessage'
import { D1Progress } from '../Progress'
import { D1Ripple } from '../Ripple'

import { defaults, type SwitchProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Switch'
})

const emits = defineEmits<SwitchEmits>()
const props = withDefaults(defineProps<SwitchProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-switch': true,
    'd1-switch--block': props.block,
    [`d1-switch--adaptive--${props.adaptive}`]: inArray(propsValues.adaptive, props.adaptive),
    [`d1-switch--container--${props.container}`]: inArray(propsValues.container, props.container),
    'd1-switch--required': props.required,
    'd1-switch--itemCenter': props.itemCenter,
    'd1-switch--focus': props.focus,
    'd1-switch--disabled': props.disabled
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new SwitchDesign(
  'd1.switch',
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

defineSlots<SwitchSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
