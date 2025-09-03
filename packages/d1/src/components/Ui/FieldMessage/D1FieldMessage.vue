<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxt-ui/functional'
import {
  FieldMessageDesign,
  type FieldMessageEmits,
  type FieldMessageSlots
} from '@dxt-ui/constructor/FieldMessage'

import { D1FieldCounter } from '../FieldCounter'

import { defaults, type FieldMessageProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1FieldMessage'
})

const emits = defineEmits<FieldMessageEmits>()
const props = withDefaults(defineProps<FieldMessageProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-fieldMessage': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new FieldMessageDesign(
  'd1.fieldMessage',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      fieldCounter: D1FieldCounter
    }
  }
)

const render = design.render()

defineSlots<FieldMessageSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>
