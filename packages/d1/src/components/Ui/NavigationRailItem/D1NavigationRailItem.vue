<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  NavigationRailItemDesign,
  type NavigationRailItemEmits,
  type NavigationRailItemSlots
} from '@dxtmisha/constructor/NavigationRailItem'
import { D1Icon } from '../Icon'
import { D1Badge } from '../Badge'
import { D1Progress } from '../Progress'
import { D1Ripple } from '../Ripple'

import { defaults, type NavigationRailItemProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1NavigationRailItem'
})

const emits = defineEmits<NavigationRailItemEmits>()
const props = withDefaults(defineProps<NavigationRailItemProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-navigationRailItem': true,
    'd1-navigationRailItem--focus': props.focus,
    'd1-navigationRailItem--open': props.open,
    'd1-navigationRailItem--selectedChild': props.selectedChild,
    'd1-navigationRailItem--readonly': props.readonly,
    'd1-navigationRailItem--disabled': props.disabled,
    'd1-navigationRailItem--divider': props.divider,
    [`d1-palette d1-palette--${props.palette}`]: inArray(propsValues.palette, props.palette)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new NavigationRailItemDesign(
  'd1.navigationRailItem',
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
    },
    compMod: {
      badge: {
        size: 'sm'
      }
    }
  }
)

const render = design.render()

defineSlots<NavigationRailItemSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
