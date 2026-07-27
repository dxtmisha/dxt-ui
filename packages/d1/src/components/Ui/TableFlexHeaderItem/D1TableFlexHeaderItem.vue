<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  TableFlexHeaderItemDesign,
  type TableFlexHeaderItemEmits,
  type TableFlexHeaderItemSlots
} from '@dxtmisha/constructor/TableFlexHeaderItem'

import { D1Chip } from '../Chip'
import { D1Icon } from '../Icon'
import { D1Tooltip } from '../Tooltip'

import { defaults, type TableFlexHeaderItemProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1TableFlexHeaderItem'
})

const emits = defineEmits<TableFlexHeaderItemEmits>()
const props = withDefaults(defineProps<TableFlexHeaderItemProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-tableFlexHeaderItem': true,
    'd1-tableFlexHeaderItem--selected': props.selected,
    'd1-tableFlexHeaderItem--disabled': props.disabled,
    [`d1-tableFlexHeaderItem--align--${props.align}`]: inArray(propsValues.align, props.align),
    [`d1-tableFlexHeaderItem--alignVertical--${props.alignVertical}`]: inArray(propsValues.alignVertical, props.alignVertical),
    'd1-tableFlexHeaderItem--dividerX': props.dividerX,
    'd1-tableFlexHeaderItem--dividerY': props.dividerY,
    'd1-tableFlexHeaderItem--labelClamp': props.labelClamp,
    'd1-tableFlexHeaderItem--stickyTop': props.stickyTop,
    'd1-tableFlexHeaderItem--stickyLeft': props.stickyLeft
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new TableFlexHeaderItemDesign(
  'd1.tableFlexHeaderItem',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      chip: D1Chip,
      icon: D1Icon,
      tooltip: D1Tooltip
    },
    compMod: {
      chip: {
        inverse: true,
        size: 'xs'
      }
    }
  }
)

const render = design.render()

defineSlots<TableFlexHeaderItemSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
