<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxt-ui/functional'
import {
  FieldDesign,
  type FieldEmits,
  type FieldSlots
} from '@dxt-ui/constructor/Field'

import { D1Icon } from '../Icon'
import { D1FieldLabel } from '../FieldLabel'
import { D1FieldMessage } from '../FieldMessage'
import { D1Progress } from '../Progress'

import { defaults, type FieldProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Field'
})

const emits = defineEmits<FieldEmits>()
const props = withDefaults(defineProps<FieldProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-field': true,
    'd1-field--focus': props.focus,
    'd1-field--disabled': props.disabled,
    'd1-field--selected': props.selected,
    'd1-field--readonly': props.readonly,
    'd1-field--block': props.block,
    'd1-field--isValue': props.isValue,
    'd1-field--basic': props.basic,
    'd1-field--boxed': props.boxed,
    'd1-field--tonal': props.tonal,
    'd1-field--filled': props.filled,
    'd1-field--outlined': props.outlined,
    'd1-field--classic': props.classic && !props.basic && !props.boxed && !props.tonal && !props.filled && !props.outlined,
    'd1-field--arrow': props.arrow,
    [`d1-field--align--${props.align}`]: inArray(propsValues.align, props.align),
    'd1-field--width--custom': isFilled(props.width) && !inArray(propsValues.width, props.width)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  '--d1-field-sys-width': props.width ?? null
  // :styles-values [!] System label / Системная метка
}))

const design = new FieldDesign(
  'd1.field',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      icon: D1Icon,
      fieldLabel: D1FieldLabel,
      fieldMessage: D1FieldMessage,
      progress: D1Progress
    }
  }
)

const render = design.render()

defineSlots<FieldSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>
