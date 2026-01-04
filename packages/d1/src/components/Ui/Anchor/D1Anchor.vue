<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  AnchorDesign,
  type AnchorEmits,
  type AnchorSlots
} from '@dxtmisha/constructor/Anchor'

import { D1Icon } from '../Icon'
import { D1Tooltip } from '../Tooltip'

import { defaults, type AnchorProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Anchor'
})

const emits = defineEmits<AnchorEmits>()
const props = withDefaults(defineProps<AnchorProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-anchor': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new AnchorDesign(
  'd1.anchor',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      icon: D1Icon,
      tooltip: D1Tooltip
    }
  }
)

const render = design.render()

defineSlots<AnchorSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
