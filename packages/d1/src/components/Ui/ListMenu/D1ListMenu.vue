<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  ListMenuDesign,
  type ListMenuEmits,
  type ListMenuSlots
} from '@dxtmisha/constructor/ListMenu'

import { D1Window } from '../Window'

import { defaults, type ListMenuProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1ListMenu'
})

const emits = defineEmits<ListMenuEmits>()
const props = withDefaults(defineProps<ListMenuProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-listMenu': true,
    'd1-listMenu--open': props.open,
    [`d1-listMenu--axis--${props.axis}`]: inArray(propsValues.axis, props.axis),
    'd1-listMenu--divider': props.divider
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ListMenuDesign(
  'd1.listMenu',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      window: D1Window
    }
  }
)

const render = design.render()

defineSlots<ListMenuSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
