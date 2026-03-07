<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  GridItemDesign,
  type GridItemEmits,
  type GridItemSlots
} from '@dxtmisha/constructor/GridItem'

import { defaults, type GridItemProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1GridItem'
})

const emits = defineEmits<GridItemEmits>()
const props = withDefaults(defineProps<GridItemProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-gridItem': true,
    [`d1-gridItem--base--${props.base}`]: inArray(propsValues.base, props.base),
    [`d1-gridItem--sm--${props.sm}`]: inArray(propsValues.sm, props.sm),
    [`d1-gridItem--md--${props.md}`]: inArray(propsValues.md, props.md),
    [`d1-gridItem--lg--${props.lg}`]: inArray(propsValues.lg, props.lg),
    [`d1-gridItem--xl--${props.xl}`]: inArray(propsValues.xl, props.xl),
    [`d1-gridItem--xl2--${props.xl2}`]: inArray(propsValues.xl2, props.xl2)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new GridItemDesign(
  'd1.gridItem',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<GridItemSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
