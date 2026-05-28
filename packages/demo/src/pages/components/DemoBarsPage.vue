<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const isAction = ref(false)
const isActionSlots = ref(false)
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="Bars">
    <D1Section>
      <D1Group label="Basic">
        <D1Bars
          label="Page Title"
          description="A concise description for this page"
          :bars="[
            { icon: 'search', value: 'search' },
            { icon: 'refresh', value: 'refresh' },
            { icon: 'more_vert', value: 'more' }
          ]"
          @click="(_, v) => onEvent(`click: ${v.value}`)"
        />
      </D1Group>

      <D1Group label="Action Mode">
        <DemoFlex>
          <D1Button
            :label="isAction ? 'Exit Action Mode' : 'Enter Action Mode'"
            @click="isAction = !isAction"
          />
        </DemoFlex>
        <D1Bars
          v-model:action="isAction"
          label="Standard View"
          description="Toggle action mode above or click back to close action mode"
          :bars="[
            { icon: 'search', value: 'search' },
            { icon: 'more_vert', value: 'more' }
          ]"
          action-label="Selected Item State"
          action-description="Perform action on the selected elements"
          :action-bars="[
            { icon: 'share', value: 'share' },
            { icon: 'edit', value: 'edit' },
            { icon: 'delete', value: 'delete' }
          ]"
          @click="(_, v) => onEvent(`click: ${v.value}`)"
        />
      </D1Group>

      <D1Group label="Paddings">
        <D1Bars
          label="Small Padding"
          description="padding='sm'"
          padding="sm"
          :bars="[{ icon: 'search', value: 'search' }]"
        />
        <D1Bars
          label="Large Padding"
          description="padding='lg'"
          padding="lg"
          :bars="[{ icon: 'search', value: 'search' }]"
        />
        <D1Bars
          label="No Padding"
          description="padding='none'"
          padding="none"
          :bars="[{ icon: 'search', value: 'search' }]"
        />
        <D1Bars
          label="Padding by Indent False"
          description="paddingByIndent=false"
          :paddingByIndent="false"
          :bars="[{ icon: 'search', value: 'search' }]"
        />
      </D1Group>

      <D1Group label="Skeleton">
        <D1Skeleton active>
          <D1Bars
          isSkeleton
          label="Skeleton Title"
            description="Skeleton description text placeholder"
            :bars="[
              { icon: 'search', value: 'search' },
              { icon: 'refresh', value: 'refresh' }
            ]"
          />
        </D1Skeleton>
      </D1Group>

      <D1Group label="Slots">
        <DemoFlex>
          <D1Button
            :label="isActionSlots ? 'Exit Action Mode' : 'Enter Action Mode'"
            @click="isActionSlots = !isActionSlots"
          />
        </DemoFlex>
        <D1Bars
          v-model:action="isActionSlots"
          @click="(_, v) => onEvent(`click: ${v.value}`)"
        >
          <template #default>
            <span class="demo-bars-page__custom-label">Custom Label Slot</span>
          </template>
          <template #description>
            <span class="demo-bars-page__custom-desc">Custom Description Slot text content</span>
          </template>
          <template #bars>
            <D1Button label="Search" size="xs" primary icon="search" value="search" />
            <D1Button label="Refresh" size="xs" outline icon="refresh" value="refresh" />
          </template>
          <template #actionBars>
            <D1Button label="Delete" size="xs" palette="red" icon="delete" value="delete" />
          </template>
        </D1Bars>
      </D1Group>

      <D1Group label="Events">
        <D1Bars
          label="Event Tracker"
          description="Interact with the buttons to track click and state events"
          :bars="[
            { icon: 'thumb_up', value: 'like' },
            { icon: 'thumb_down', value: 'dislike' }
          ]"
          @click="(_, v) => onEvent(`click: ${v.value}`)"
        />
        <DemoValue :value="eventName" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-bars-page {
  &__custom-label {
    font-weight: 700;
    color: var(--sys-palette-primary);
  }

  &__custom-desc {
    font-style: italic;
    color: var(--sys-palette-secondary);
  }
}
</style>
