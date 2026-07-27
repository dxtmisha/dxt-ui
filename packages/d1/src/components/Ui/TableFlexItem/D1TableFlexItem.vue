<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  TableFlexItemDesign,
  type TableFlexItemEmits,
  type TableFlexItemSlots
} from '@dxtmisha/constructor/TableFlexItem'

import { defaults, type TableFlexItemProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1TableFlexItem'
})

const emits = defineEmits<TableFlexItemEmits>()
const props = withDefaults(defineProps<TableFlexItemProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-tableFlexItem': true,
    'd1-tableFlexItem--selected': props.selected,
    'd1-tableFlexItem--disabled': props.disabled,
    [`d1-tableFlexItem--align--${props.align}`]: inArray(propsValues.align, props.align),
    [`d1-tableFlexItem--alignVertical--${props.alignVertical}`]: inArray(propsValues.alignVertical, props.alignVertical),
    'd1-tableFlexItem--dividerX': props.dividerX,
    'd1-tableFlexItem--dividerY': props.dividerY,
    'd1-tableFlexItem--labelClamp': props.labelClamp,
    'd1-tableFlexItem--stickyTop': props.stickyTop,
    'd1-tableFlexItem--stickyLeft': props.stickyLeft
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new TableFlexItemDesign(
  'd1.tableFlexItem',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<TableFlexItemSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
