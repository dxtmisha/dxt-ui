<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  AvatarDesign,
  type AvatarEmits,
  type AvatarSlots
} from '@dxtmisha/constructor/Avatar'

import { defaults, type AvatarProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Avatar'
})

const emits = defineEmits<AvatarEmits>()
const props = withDefaults(defineProps<AvatarProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-avatar': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new AvatarDesign(
  'd1.avatar',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<AvatarSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
