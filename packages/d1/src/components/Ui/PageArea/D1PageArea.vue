<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  PageAreaDesign,
  type PageAreaEmits,
  type PageAreaSlots
} from '@dxtmisha/constructor/PageArea'

import { D1Block } from '../Block'
import { D1Group } from '../Group'
import { D1Page } from '../Page'
import { D1Section } from '../Section'

import { defaults, type PageAreaProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1PageArea'
})

const emits = defineEmits<PageAreaEmits>()
const props = withDefaults(defineProps<PageAreaProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-pageArea': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new PageAreaDesign(
  'd1.pageArea',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      block: D1Block,
      group: D1Group,
      page: D1Page,
      section: D1Section
    }
  }
)

const render = design.render()

defineSlots<PageAreaSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
