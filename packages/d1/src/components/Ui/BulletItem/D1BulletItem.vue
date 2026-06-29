<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  BulletItemDesign,
  type BulletItemEmits,
  type BulletItemSlots
} from '@dxtmisha/constructor/BulletItem'

import { defaults, type BulletItemProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1BulletItem'
})

const emits = defineEmits<BulletItemEmits>()
const props = withDefaults(defineProps<BulletItemProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-bulletItem': true,
    [`d1-bulletItem--size--${props.size}`]: inArray(propsValues.size, props.size)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new BulletItemDesign(
  'd1.bulletItem',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<BulletItemSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
