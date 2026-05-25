<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  MenuButtonDesign,
  type MenuButtonEmits,
  type MenuButtonSlots
} from '@dxtmisha/constructor/MenuButton'

import { D1Menu } from '../Menu'
import { D1Button } from '../Button'

import { defaults, type MenuButtonProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1MenuButton'
})

const emits = defineEmits<MenuButtonEmits>()
const props = withDefaults(defineProps<MenuButtonProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-menuButton': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new MenuButtonDesign(
  'd1.menuButton',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      menu: D1Menu,
      button: D1Button
    },
    compMod: {
      button: {
        secondary: true,
        size: 'sm'
      }
    }
  }
)

const render = design.render()

defineSlots<MenuButtonSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
