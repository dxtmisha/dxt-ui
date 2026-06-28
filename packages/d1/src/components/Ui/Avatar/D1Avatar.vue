<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  AvatarDesign,
  type AvatarEmits,
  type AvatarSlots
} from '@dxtmisha/constructor/Avatar'

import { D1Image } from '../Image'
import { D1Badge } from '../Badge'

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
    'd1-avatar': true,
    'd1-avatar--focus': props.focus,
    'd1-avatar--disabled': props.disabled,
    'd1-avatar--readonly': props.readonly,
    'd1-avatar--primary': props.primary,
    [`d1-avatar--size--${props.size}`]: inArray(propsValues.size, props.size),
    [`d1-palette d1-palette--${props.palette}`]: inArray(propsValues.palette, props.palette)
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
    styles: stylesToken,
    components: {
      image: D1Image,
      badge: D1Badge
    }
  }
)

const render = design.render()

defineSlots<AvatarSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
