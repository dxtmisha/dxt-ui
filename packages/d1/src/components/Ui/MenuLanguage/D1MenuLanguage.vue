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
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<MenuLanguageSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
