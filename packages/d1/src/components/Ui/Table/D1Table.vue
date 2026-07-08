<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  TableDesign,
  type TableEmits,
  type TableSlots
} from '@dxtmisha/constructor/Table'

import { D1ScrollSticky } from '../ScrollSticky'

import { defaults, type TableProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Table'
})

const emits = defineEmits<TableEmits>()
const props = withDefaults(defineProps<TableProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-table': true,
    'd1-table--headerTop': props.headerTop
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new TableDesign(
  'd1.table',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      scrollSticky: D1ScrollSticky
    }
  }
)

const render = design.render()

defineSlots<TableSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
