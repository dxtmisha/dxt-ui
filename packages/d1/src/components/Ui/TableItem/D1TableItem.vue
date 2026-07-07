<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  TableItemDesign,
  type TableItemEmits,
  type TableItemSlots
} from '@dxtmisha/constructor/TableItem'

import { defaults, type TableItemProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1TableItem'
})

const emits = defineEmits<TableItemEmits>()
const props = withDefaults(defineProps<TableItemProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-tableItem': true,
    'd1-tableItem--disabled': props.disabled,
    'd1-tableItem--selected': props.selected,
    'd1-tableItem--header': props.header,
    [`d1-tableItem--vertical--${props.vertical}`]: inArray(propsValues.vertical, props.vertical),
    'd1-tableItem--right': props.right,
    [`d1-tableItem--basis--${props.basis}`]: inArray(propsValues.basis, props.basis),
    'd1-tableItem--labelClamp': props.labelClamp,
    'd1-tableItem--stickyLeft': props.stickyLeft
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new TableItemDesign(
  'd1.tableItem',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<TableItemSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
