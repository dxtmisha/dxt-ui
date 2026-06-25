<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  AlertLinkDesign,
  type AlertLinkEmits,
  type AlertLinkSlots
} from '@dxtmisha/constructor/AlertLink'

import { defaults, type AlertLinkProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1AlertLink'
})

const emits = defineEmits<AlertLinkEmits>()
const props = withDefaults(defineProps<AlertLinkProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-alertLink': true,
    'd1-alertLink--divider': props.divider
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new AlertLinkDesign(
  'd1.alertLink',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<AlertLinkSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
