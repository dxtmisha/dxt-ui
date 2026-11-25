<script setup lang="ts">
import { ref } from 'vue'
import type { ListList } from '@dxtmisha/functional'
import type { EventClickValue } from '@dxtmisha/constructor'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const selectedChips = ref<ListList>([
  { label: 'Design', value: 'design', index: 'design', type: 'item', icon: 'palette' },
  { label: 'Frontend', value: 'frontend', index: 'frontend', type: 'item', icon: 'code' },
  { label: 'Accessibility', value: 'a11y', index: 'a11y', type: 'item', icon: 'accessibility_new' }
])

const isLifecycleMounted = ref<boolean>(true)

const { eventName, onEvent } = useDemoEvent()
const lastClickPayload = ref<string>('No click events yet')

const handleChipRemove = (_event: MouseEvent, payload: EventClickValue): void => {
  onEvent('click', payload)
  lastClickPayload.value = JSON.stringify(payload)

  if (Array.isArray(selectedChips.value)) {
    selectedChips.value = selectedChips.value.filter(
      item => String(item.value) !== String(payload.value)
    )
  }
}

const handleResetChips = (): void => {
  selectedChips.value = [
    { label: 'Design', value: 'design', index: 'design', type: 'item', icon: 'palette' },
    { label: 'Frontend', value: 'frontend', index: 'frontend', type: 'item', icon: 'code' },
    { label: 'Accessibility', value: 'a11y', index: 'a11y', type: 'item', icon: 'accessibility_new' }
  ]
}

const handleAddChip = (): void => {
  if (Array.isArray(selectedChips.value)) {
    const nextIndex = selectedChips.value.length + 1
    selectedChips.value = [
      ...selectedChips.value,
      {
        label: `Tag ${nextIndex}`,
        value: `tag-${nextIndex}`,
        index: `tag-${nextIndex}`,
        type: 'item'
      }
    ]
  }
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="SelectValue">
    <D1Section class="demo-select-value-page">
      <D1Group label="Basic Modes (Placeholder, Single, Zero)">
        <DemoFlex>
          <DemoBox>
            <D1SelectValue placeholder="Choose an option"/>
          </DemoBox>
          <DemoBox>
            <D1SelectValue :value="[{ label: 'Single Option', value: 'single', index: 'single', type: 'item' }]"/>
          </DemoBox>
          <DemoBox>
            <D1SelectValue :value="[{ label: '0', value: 0, index: '0', type: 'item' }]"/>
          </DemoBox>
          <DemoBox>
            <D1SelectValue :value="[]" placeholder="Empty list fallback"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Multiple Chips, Icons & Interactive Removal">
        <DemoFlex>
          <D1Button label="Add Chip" @click="handleAddChip"/>
          <D1Button label="Reset Chips" outline @click="handleResetChips"/>
        </DemoFlex>
        <D1SelectValue
          multiple
          icon-show
          :value="selectedChips"
          @click="handleChipRemove"
          @click-lite="(payload) => onEvent('clickLite', payload)"
        />
        <DemoValue :value="selectedChips" label="Selected items"/>
        <DemoValue :value="eventName" label="Last event"/>
        <DemoValue :value="lastClickPayload" label="Last click payload"/>
      </D1Group>

      <D1Group label="Customization (chipAttrs, iconCancel) & Disabled">
        <DemoFlex>
          <DemoBox>
            <D1SelectValue
              multiple
              icon-cancel="delete"
              :chip-attrs="{ outline: true, size: 'xs' }"
              :value="[
                { label: 'Outlined', value: '1', index: '1', type: 'item' },
                { label: 'Custom Cancel', value: '2', index: '2', type: 'item' }
              ]"
            />
          </DemoBox>
          <DemoBox>
            <D1SelectValue
              multiple
              disabled
              :value="[
                { label: 'Disabled 1', value: '1', index: '1', type: 'item' },
                { label: 'Disabled 2', value: '2', index: '2', type: 'item' }
              ]"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Boundary & Lifecycle">
        <DemoBox style="width: 220px;">
          <D1SelectValue
            :value="[{ label: 'Extremely long selected label in Tiếng Việt and Кириллица 🚀', value: 'long', index: 'long', type: 'item' }]"
          />
        </DemoBox>
        <DemoBox style="width: 240px;">
          <D1SelectValue
            multiple
            :value="[
              { label: 'One', value: '1', index: '1', type: 'item' },
              { label: 'Two', value: '2', index: '2', type: 'item' },
              { label: 'Three', value: '3', index: '3', type: 'item' },
              { label: 'Four', value: '4', index: '4', type: 'item' }
            ]"
          />
        </DemoBox>
        <DemoFlex>
          <D1Button label="Toggle Mount (v-if)" outline @click="isLifecycleMounted = !isLifecycleMounted"/>
        </DemoFlex>
        <D1SelectValue
          v-if="isLifecycleMounted"
          placeholder="Lifecycle controlled placeholder"
        />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
