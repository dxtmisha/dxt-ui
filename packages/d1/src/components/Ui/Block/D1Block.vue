<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  BlockDesign,
  type BlockEmits,
  type BlockSlots
} from '@dxtmisha/constructor/Block'

import { D1Icon } from '../Icon'

import { defaults, type BlockProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Block'
})

const emits = defineEmits<BlockEmits>()
const props = withDefaults(defineProps<BlockProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-block': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new BlockDesign(
  'd1.block',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      icon: D1Icon
    }
  }
)

const render = design.render()

defineSlots<BlockSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
