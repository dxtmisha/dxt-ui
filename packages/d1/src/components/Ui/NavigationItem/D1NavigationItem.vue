<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  NavigationItemDesign,
  type NavigationItemEmits,
  type NavigationItemSlots
} from '@dxtmisha/constructor/NavigationItem'

import { D1Icon } from '../Icon'
import { D1Badge } from '../Badge'
import { D1Progress } from '../Progress'
import { D1Ripple } from '../Ripple'
import { D1Checkbox } from '../Checkbox'
import { D1Radio } from '../Radio'

import { defaults, type NavigationItemProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1NavigationItem'
})

const emits = defineEmits<NavigationItemEmits>()
const props = withDefaults(defineProps<NavigationItemProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-navigationItem': true,
    'd1-navigationItem--focus': props.focus,
    'd1-navigationItem--open': props.open,
    'd1-navigationItem--selectedChild': props.selectedChild,
    'd1-navigationItem--readonly': props.readonly,
    'd1-navigationItem--disabled': props.disabled,
    'd1-navigationItem--iconTop': props.iconTop,
    [`d1-navigationItem--iconAlign--${props.iconAlign}`]: inArray(propsValues.iconAlign, props.iconAlign),
    [`d1-navigationItem--controlPosition--${props.controlPosition}`]: inArray(propsValues.controlPosition, props.controlPosition),
    'd1-navigationItem--fill--custom': isFilled(props.fill) && !inArray(propsValues.fill, props.fill),
    'd1-navigationItem--divider': props.divider,
    [`d1-navigationItem--size--${props.size}`]: inArray(propsValues.size, props.size),
    'd1-navigationItem--dense': props.dense,
    [`d1-palette d1-palette--${props.palette}`]: inArray(propsValues.palette, props.palette)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  '--d1-navigationItem-sys-fill': props.fill ?? null
  // :styles-values [!] System label / Системная метка
}))

const design = new NavigationItemDesign(
  'd1.navigationItem',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      icon: D1Icon,
      badge: D1Badge,
      progress: D1Progress,
      ripple: D1Ripple,
      checkbox: D1Checkbox,
      radio: D1Radio
    }
  }
)

const render = design.render()

defineSlots<NavigationItemSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
