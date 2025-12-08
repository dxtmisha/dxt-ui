<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  ActionsDesign,
  type ActionsEmits,
  type ActionsSlots
} from '@dxtmisha/constructor/Actions'

import { D1Button } from '../Button'

import { defaults, type ActionsProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Actions'
})

const emits = defineEmits<ActionsEmits>()
const props = withDefaults(defineProps<ActionsProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-actions': true,
    [`d1-actions--align--${props.align}`]: inArray(propsValues.align, props.align),
    [`d1-actions--flexible--${props.flexible}`]: inArray(propsValues.flexible, props.flexible),
    [`d1-actions--padding--${props.padding}`]: inArray(propsValues.padding, props.padding),
    'd1-actions--paddingByIndent': props.paddingByIndent
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ActionsDesign(
  'd1.actions',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      button: D1Button
    }
  }
)

const render = design.render()

defineSlots<ActionsSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
