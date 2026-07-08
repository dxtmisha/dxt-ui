<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  TableHeaderItemDesign,
  type TableHeaderItemEmits,
  type TableHeaderItemSlots
} from '@dxtmisha/constructor/TableHeaderItem'

import { defaults, type TableHeaderItemProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1TableHeaderItem'
})

const emits = defineEmits<TableHeaderItemEmits>()
const props = withDefaults(defineProps<TableHeaderItemProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-tableHeaderItem': true,
    'd1-tableHeaderItem--disabled': props.disabled,
    'd1-tableHeaderItem--selected': props.selected,
    [`d1-tableHeaderItem--align--${props.align}`]: inArray(propsValues.align, props.align),
    [`d1-tableHeaderItem--alignVertical--${props.alignVertical}`]: inArray(propsValues.alignVertical, props.alignVertical),
    'd1-tableHeaderItem--labelClamp': props.labelClamp,
    'd1-tableHeaderItem--stickyTop': props.stickyTop,
    'd1-tableHeaderItem--stickyLeft': props.stickyLeft
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new TableHeaderItemDesign(
  'd1.tableHeaderItem',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<TableHeaderItemSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
