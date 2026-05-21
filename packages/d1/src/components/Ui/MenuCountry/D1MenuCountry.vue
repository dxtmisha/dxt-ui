<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  MenuCountryDesign,
  type MenuCountryEmits,
  type MenuCountrySlots
} from '@dxtmisha/constructor/MenuCountry'

import { D1Menu } from '../Menu'

import { defaults, type MenuCountryProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1MenuCountry'
})

const emits = defineEmits<MenuCountryEmits>()
const props = withDefaults(defineProps<MenuCountryProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-menuCountry': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new MenuCountryDesign(
  'd1.menuCountry',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      menu: D1Menu
    },
    compMod: {
      menu: {
        itemAttrs: {
          iconAttrs: {
            rect: true,
            size: 'xl'
          }
        }
      }
    }
  }
)

const render = design.render()

defineSlots<MenuCountrySlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
