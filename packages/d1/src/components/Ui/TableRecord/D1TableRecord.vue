<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  TableRecordDesign,
  type TableRecordEmits,
  type TableRecordSlots
} from '@dxtmisha/constructor/TableRecord'

import { defaults, type TableRecordProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1TableRecord'
})

const emits = defineEmits<TableRecordEmits>()
const props = withDefaults(defineProps<TableRecordProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-tableRecord': true,
    'd1-tableRecord--disabled': props.disabled,
    'd1-tableRecord--selected': props.selected
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new TableRecordDesign(
  'd1.tableRecord',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<TableRecordSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
