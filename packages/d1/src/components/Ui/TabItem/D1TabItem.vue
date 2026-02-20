<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  TabItemDesign,
  type TabItemEmits,
  type TabItemSlots
} from '@dxtmisha/constructor/TabItem'

import D1Icon from '../Icon/D1Icon.vue'
import D1Badge from '../Badge/D1Badge.vue'
import D1Progress from '../Progress/D1Progress.vue'
import D1Ripple from '../Ripple/D1Ripple.vue'

import { defaults, type TabItemProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1TabItem'
})

const emits = defineEmits<TabItemEmits>()
const props = withDefaults(defineProps<TabItemProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-tabItem': true,
    'd1-tabItem--focus': props.focus,
    'd1-tabItem--open': props.open,
    'd1-tabItem--selected': props.selected,
    'd1-tabItem--disabled': props.disabled,
    [`d1-tabItem--adaptive--${props.adaptive}`]: inArray(propsValues.adaptive, props.adaptive),
    [`d1-tabItem--container--${props.container}`]: inArray(propsValues.container, props.container)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new TabItemDesign(
  'd1.tabItem',
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

defineSlots<TabItemSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
