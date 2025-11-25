<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  ListGroupDesign,
  type ListGroupEmits,
  type ListGroupSlots
} from '@dxtmisha/constructor/ListGroup'

import { D1MotionTransform } from '../MotionTransform'

import { defaults, type ListGroupProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1ListGroup'
})

const emits = defineEmits<ListGroupEmits>()
const props = withDefaults(defineProps<ListGroupProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-listGroup': true,
    'd1-listGroup--open': props.open,
    'd1-listGroup--divider': props.divider
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ListGroupDesign(
  'd1.listGroup',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      motionTransform: D1MotionTransform
    }
  }
)

const render = design.render()

defineSlots<ListGroupSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
