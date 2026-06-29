<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  BulletDesign,
  type BulletEmits,
  type BulletSlots
} from '@dxtmisha/constructor/Bullet'

import { defaults, type BulletProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Bullet'
})

const emits = defineEmits<BulletEmits>()
const props = withDefaults(defineProps<BulletProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-bullet': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new BulletDesign(
  'd1.bullet',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<BulletSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
