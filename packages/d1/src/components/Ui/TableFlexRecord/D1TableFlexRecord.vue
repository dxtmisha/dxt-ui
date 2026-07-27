<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  TableFlexRecordDesign,
  type TableFlexRecordEmits,
  type TableFlexRecordSlots
} from '@dxtmisha/constructor/TableFlexRecord'

import { D1TableFlexItem } from '../TableFlexItem'
import { D1TableFlexHeaderItem } from '../TableFlexHeaderItem'

import { defaults, type TableFlexRecordProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1TableFlexRecord'
})

const emits = defineEmits<TableFlexRecordEmits>()
const props = withDefaults(defineProps<TableFlexRecordProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-tableFlexRecord': true,
    'd1-tableFlexRecord--disabled': props.disabled,
    'd1-tableFlexRecord--selected': props.selected
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new TableFlexRecordDesign(
  'd1.tableFlexRecord',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      tableHeaderItem: D1TableFlexHeaderItem,
      tableItem: D1TableFlexItem
    }
  }
)

const render = design.render()

defineSlots<TableFlexRecordSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
