<script setup lang="ts">
import { useFigmaUiSelected } from '@dxtmisha/figma-ref'

import type { FieldValidationItem } from '@dxtmisha/constructor'
import type { TranslateFrameItem } from '../../../types/TranslateTypes'

defineOptions({
  name: 'TranslateKeyCreationFramesItem'
})

const props = defineProps<TranslateFrameItem>()

const { isSelected, toggleSelected } = useFigmaUiSelected()

/**
 * Indicates if the current frame is selected/
 * Указывает, выбран ли текущий фрейм
 */
const value = isSelected(props.id)

/**
 * Toggles the selection state of the current frame.
 *
 * Переключает состояние выбора текущего фрейма.
 * @param event Change event object / Объект события изменения
 */
const onChange = ({ value }: FieldValidationItem<boolean>) => toggleSelected(props.id, value)
</script>

<template>
  <D1Cell
    :icon="image"
    :label="name"
    is-skeleton
  >
    <template #trailing>
      <D1Checkbox
        :value="value"
        @change-lite="onChange"
      />
    </template>
  </D1Cell>
</template>

<style lang="scss">

</style>
