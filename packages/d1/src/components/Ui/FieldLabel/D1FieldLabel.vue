<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  FieldLabelDesign,
  type FieldLabelEmits,
  type FieldLabelSlots
} from '@dxtmisha/constructor/FieldLabel'

import { D1FieldCounter } from '../FieldCounter'
import { D1Progress } from '../Progress'

import { defaults, type FieldLabelProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1FieldLabel'
})

const emits = defineEmits<FieldLabelEmits>()
const props = withDefaults(defineProps<FieldLabelProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-fieldLabel': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new FieldLabelDesign(
  'd1.fieldLabel',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      fieldCounter: D1FieldCounter,
      progress: D1Progress
    }
  }
)

const render = design.render()

defineSlots<FieldLabelSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
