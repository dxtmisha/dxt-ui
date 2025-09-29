<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  MenuDesign,
  type MenuEmits,
  type MenuSlots
} from '@dxtmisha/constructor/Menu'

import { D1List } from '../List'
import { D1Bars } from '../Bars'
import { D1Window } from '../Window'

import { defaults, type MenuProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Menu'
})

const emits = defineEmits<MenuEmits>()
const props = withDefaults(defineProps<MenuProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-menu': true,
    'd1-menu--hideList': props.hideList,
    [`d1-menu--barsAdaptive--${props.barsAdaptive}`]: inArray(propsValues.barsAdaptive, props.barsAdaptive)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new MenuDesign(
  'd1.menu',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      list: D1List,
      bars: D1Bars,
      window: D1Window
    }
  }
)

const render = design.render()

defineSlots<MenuSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>
