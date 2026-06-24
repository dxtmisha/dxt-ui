<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  MenuLanguageDesign,
  type MenuLanguageEmits,
  type MenuLanguageSlots
} from '@dxtmisha/constructor/MenuLanguage'

import { D1Menu } from '../Menu'

import { defaults, type MenuLanguageProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1MenuLanguage'
})

const emits = defineEmits<MenuLanguageEmits>()
const props = withDefaults(defineProps<MenuLanguageProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-menuLanguage': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new MenuLanguageDesign(
  'd1.menuLanguage',
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

defineSlots<MenuLanguageSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
