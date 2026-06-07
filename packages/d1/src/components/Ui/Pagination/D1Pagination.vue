<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles,
  inArray
} from '@dxtmisha/functional'
import {
  PaginationDesign,
  type PaginationEmits,
  type PaginationSlots
} from '@dxtmisha/constructor/Pagination'

import { D1Button } from '../Button'
import { D1Menu } from '../Menu'

import { defaults, type PaginationProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Pagination'
})

const emits = defineEmits<PaginationEmits>()
const props = withDefaults(defineProps<PaginationProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-pagination': true,
    [`d1-pagination--adaptive--${props.adaptive}`]: inArray(propsValues.adaptive, props.adaptive),
    [`d1-pagination--adaptiveMore--${props.adaptiveMore}`]: inArray(propsValues.adaptiveMore, props.adaptiveMore)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new PaginationDesign(
  'd1.pagination',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      button: D1Button,
      menu: D1Menu
    },
    compMod: {
      button: {
        text: true,
        size: 'sm',
        inverse: true
      },
      selected: {
        secondary: true,
        size: 'sm'
      },
      more: {
        secondary: true,
        size: 'sm'
      }
    }
  }
)

const render = design.render()

defineSlots<PaginationSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
