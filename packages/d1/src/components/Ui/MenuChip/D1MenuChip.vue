<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  MenuChipDesign,
  type MenuChipEmits,
  type MenuChipSlots
} from '@dxtmisha/constructor/MenuChip'

import { D1Menu } from '../Menu'
import { D1Chip } from '../Chip'

import { defaults, type MenuChipProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1MenuChip'
})

const emits = defineEmits<MenuChipEmits>()
const props = withDefaults(defineProps<MenuChipProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-menuChip': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new MenuChipDesign(
  'd1.menuChip',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      menu: D1Menu,
      chip: D1Chip
    }
  }
)

const render = design.render()

defineSlots<MenuChipSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
