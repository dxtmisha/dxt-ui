<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  TableFlexDesign,
  type TableFlexEmits,
  type TableFlexSlots
} from '@dxtmisha/constructor/TableFlex'

import { D1ScrollSticky } from '../ScrollSticky'
import { D1TableFlexRecord } from '../TableFlexRecord'

import { defaults, type TableFlexProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1TableFlex'
})

const emits = defineEmits<TableFlexEmits>()
const props = withDefaults(defineProps<TableFlexProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-tableFlex': true,
    'd1-tableFlex--headerTop': props.headerTop,
    'd1-tableFlex--captionBottom': props.captionBottom,
    'd1-tableFlex--bleed': props.bleed
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new TableFlexDesign(
  'd1.tableFlex',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      tableRecord: D1TableFlexRecord,
      scrollSticky: D1ScrollSticky
    }
  }
)

const render = design.render()

defineSlots<TableFlexSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
