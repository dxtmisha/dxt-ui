<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  ListItemDesign,
  type ListItemEmits,
  type ListItemSlots
} from '@dxtmisha/constructor/ListItem'

import D1Icon from '../Icon/D1Icon.vue'
import D1Badge from '../Badge/D1Badge.vue'
import D1Progress from '../Progress/D1Progress.vue'
import D1Ripple from '../Ripple/D1Ripple.vue'

import { defaults, type ListItemProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1ListItem'
})

const emits = defineEmits<ListItemEmits>()
const props = withDefaults(defineProps<ListItemProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-listItem': true,
    'd1-listItem--focus': props.focus,
    'd1-listItem--open': props.open,
    'd1-listItem--selected': props.selected,
    'd1-listItem--selectedChild': props.selectedChild,
    'd1-listItem--readonly': props.readonly,
    'd1-listItem--disabled': props.disabled,
    'd1-listItem--iconTop': props.iconTop,
    [`d1-listItem--iconAlign--${props.iconAlign}`]: inArray(propsValues.iconAlign, props.iconAlign),
    'd1-listItem--fill--custom': isFilled(props.fill) && !inArray(propsValues.fill, props.fill),
    'd1-listItem--divider': props.divider,
    [`d1-listItem--size--${props.size}`]: inArray(propsValues.size, props.size),
    [`d1-palette d1-palette--${props.palette}`]: inArray(propsValues.palette, props.palette)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  '--d1-listItem-sys-fill': props.fill ?? null
  // :styles-values [!] System label / Системная метка
}))

const design = new ListItemDesign(
  'd1.listItem',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      icon: D1Icon,
      badge: D1Badge,
      progress: D1Progress,
      ripple: D1Ripple
    }
  }
)

const render = design.render()

defineSlots<ListItemSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>
