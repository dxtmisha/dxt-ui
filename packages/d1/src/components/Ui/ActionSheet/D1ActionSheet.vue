<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  ActionSheetDesign,
  type ActionSheetEmits,
  type ActionSheetSlots
} from '@dxtmisha/constructor/ActionSheet'

import { D1Bars } from '../Bars'
import { D1Window } from '../Window'

import { defaults, type ActionSheetProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1ActionSheet'
})

const emits = defineEmits<ActionSheetEmits>()
const props = withDefaults(defineProps<ActionSheetProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-actionSheet': true,
    [`d1-actionSheet--padding--${props.padding}`]: inArray(propsValues.padding, props.padding),
    'd1-actionSheet--paddingByIndent': props.paddingByIndent
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ActionSheetDesign(
  'd1.actionSheet',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      bars: D1Bars,
      window: D1Window
    },
    compMod: {
      window: {
        divider: true
      }
    }
  }
)

const render = design.render()

defineSlots<ActionSheetSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>
