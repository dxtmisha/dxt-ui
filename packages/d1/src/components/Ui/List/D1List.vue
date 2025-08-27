<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxt-ui/functional'
import {
  ListDesign,
  type ListEmits,
  type ListSlots
} from '@dxt-ui/constructor/List'

import { D1ListGroupAny } from '../ListGroup'
// import { D1ListItem } from '../ListItem'
// import { D1Menu } from '../Menu'

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
    'd1-list': true
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
      listGroup: D1ListGroupAny
      // listItem: D1ListItem
      // menu: D1Menu
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
