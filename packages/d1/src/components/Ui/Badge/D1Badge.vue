<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  BadgeDesign,
  type BadgeEmits,
  type BadgeSlots
} from '@dxtmisha/constructor/Badge'

import D1Icon from '../Icon/D1Icon.vue'

import { defaults, type BadgeProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Badge'
})

const emits = defineEmits<BadgeEmits>()
const props = withDefaults(defineProps<BadgeProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-badge': true,
    'd1-badge--selected': props.selected,
    'd1-badge--hide': props.hide,
    'd1-badge--dot': props.dot,
    [`d1-badge--overlap--${props.overlap}`]: inArray(propsValues.overlap, props.overlap),
    [`d1-badge--vertical--${props.vertical}`]: inArray(propsValues.vertical, props.vertical),
    [`d1-badge--horizontal--${props.horizontal}`]: inArray(propsValues.horizontal, props.horizontal),
    'd1-badge--primary': props.primary && !props.secondary && !props.outline,
    'd1-badge--secondary': props.secondary,
    'd1-badge--outline': props.outline,
    [`d1-badge--size--${props.size}`]: inArray(propsValues.size, props.size),
    [`d1-palette d1-palette--${props.palette}`]: inArray(propsValues.palette, props.palette)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new BadgeDesign(
  'd1.badge',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      icon: D1Icon
    }
  }
)

const render = design.render()

defineSlots<BadgeSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>
