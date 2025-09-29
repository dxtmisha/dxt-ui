<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  ListDesign,
  type ListEmits,
  type ListSlots
} from '@dxtmisha/constructor/List'

import { D1ListItem } from '../ListItem'
import { D1ListGroup } from '../ListGroup'
import { D1ListMenu } from '../ListMenu'

import { defaults, type ListProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1List'
})

const emits = defineEmits<ListEmits>()
const props = withDefaults(defineProps<ListProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-list': true,
    [`d1-list--axis--${props.axis}`]: inArray(propsValues.axis, props.axis),
    'd1-list--divider': props.divider
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ListDesign(
  'd1.list',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      listItem: D1ListItem,
      listGroup: D1ListGroup,
      listMenu: D1ListMenu
    }
  }
)

const render = design.render()

defineSlots<ListSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>
