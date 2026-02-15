<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  TabsNavigationDesign,
  type TabsNavigationEmits,
  type TabsNavigationSlots
} from '@dxtmisha/constructor/TabsNavigation'

import { D1HorizontalScroll } from '../HorizontalScroll'
import { D1TabItem } from '../TabItem'

import { defaults, type TabsNavigationProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1TabsNavigation'
})

const emits = defineEmits<TabsNavigationEmits>()
const props = withDefaults(defineProps<TabsNavigationProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-tabsNavigation': true,
    'd1-tabsNavigation--focus': props.focus,
    'd1-tabsNavigation--scrollable': props.scrollable,
    'd1-tabsNavigation--divider': props.divider
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new TabsNavigationDesign(
  'd1.tabsNavigation',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      horizontalScroll: D1HorizontalScroll,
      tabItem: D1TabItem
    }
  }
)

const render = design.render()

defineSlots<TabsNavigationSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
