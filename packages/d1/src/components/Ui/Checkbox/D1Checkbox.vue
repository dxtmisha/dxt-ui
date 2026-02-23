<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  CheckboxDesign,
  type CheckboxEmits,
  type CheckboxSlots
} from '@dxtmisha/constructor/Checkbox'

import { D1Image } from '../Image'
import { D1FieldMessage } from '../FieldMessage'
import { D1Progress } from '../Progress'
import { D1Ripple } from '../Ripple'

import { defaults, type CheckboxProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Checkbox'
})

const emits = defineEmits<CheckboxEmits>()
const props = withDefaults(defineProps<CheckboxProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-checkbox': true,
    'd1-checkbox--block': props.block,
    [`d1-checkbox--adaptive--${props.adaptive}`]: inArray(propsValues.adaptive, props.adaptive),
    [`d1-checkbox--container--${props.container}`]: inArray(propsValues.container, props.container),
    'd1-checkbox--required': props.required,
    'd1-checkbox--itemCenter': props.itemCenter,
    'd1-checkbox--focus': props.focus,
    'd1-checkbox--disabled': props.disabled
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new CheckboxDesign(
  'd1.checkbox',
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

defineSlots<CheckboxSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
