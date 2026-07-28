<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  NavigationListDesign,
  type NavigationListEmits,
  type NavigationListSlots
} from '@dxtmisha/constructor/NavigationList'

import { D1NavigationItem } from '../NavigationItem'
import { D1ListGroup } from '../ListGroup'
import { D1ListMenu } from '../ListMenu'
import { D1Input } from '../Input'

import { defaults, type NavigationListProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1NavigationList'
})

const emits = defineEmits<NavigationListEmits>()
const props = withDefaults(defineProps<NavigationListProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-navigationList': true,
    [`d1-navigationList--axis--${props.axis}`]: inArray(propsValues.axis, props.axis),
    'd1-navigationList--divider': props.divider
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new NavigationListDesign(
  'd1.navigationList',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      listItem: D1NavigationItem,
      listGroup: D1ListGroup,
      listMenu: D1ListMenu,
      input: D1Input
    }
  }
)

const render = design.render()

defineSlots<NavigationListSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
