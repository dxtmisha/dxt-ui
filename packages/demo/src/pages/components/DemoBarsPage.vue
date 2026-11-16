<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const isAction = ref(false)
const isModelAction = ref(false)
const isActionSlots = ref(false)
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Bars">
    <D1Section>
      <D1Group label="Basic">
        <DemoBox>
          <D1Bars
            label="Page Title"
            description="A concise description for this page"
            :bars="[
              { icon: 'search', value: 'search' },
              { icon: 'refresh', value: 'refresh' },
              { label: 'Save', value: 'save' }
            ]"
            @click="(_, value) => onEvent(`click: ${value.value}`)"
          />
        </DemoBox>
        <DemoBox>
          <D1Bars
            :label="0"
            :description="0"
            back-hide
            :bars="[{ label: 'Action', value: 'action' }]"
            :button-attrs="{ outline: true, size: 'sm' }"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Action Mode">
        <DemoFlex>
          <D1Button
            :label="isAction ? 'Exit Action Mode' : 'Enter Action Mode'"
            @click="isAction = !isAction"
          />
          <DemoValue label="action" :value="isAction"/>
        </DemoFlex>
        <DemoBox>
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
            @click="(_, value) => onEvent(`click: ${value.value}`)"
          />
        </DemoBox>

        <DemoFlex>
          <D1Button
            :label="isModelAction ? 'Exit Model Action' : 'Enter Model Action'"
            @click="isModelAction = !isModelAction"
          />
          <DemoValue label="modelAction" :value="isModelAction"/>
        </DemoFlex>
        <DemoBox>
          <D1Bars
            v-model:model-action="isModelAction"
            label="Model Action Standard"
            description="Uses modelAction and hides back button in action mode"
            back-action-hide
            action-label="Model Action Active"
            action-description="Back button hidden via backActionHide"
            :action-bars="[
              { label: 'Done', value: 'done' }
            ]"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Back Button & Custom Icons">
        <DemoBox>
          <D1Bars
            label="Hidden Back Button"
            description="backHide=true"
            back-hide
            :bars="[{ icon: 'settings', value: 'settings' }]"
          />
        </DemoBox>
        <DemoBox>
          <D1Bars
            label="Custom Back Button"
            description="backButton, iconBack, iconClose, textClose"
            icon-back="chevron_left"
            icon-close="cancel"
            text-close="Close bar"
            :back-button="{ label: 'Back', outline: true }"
            :bars="[{ icon: 'check', value: 'check' }]"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Paddings">
        <DemoBox>
          <D1Bars
            label="Small Padding"
            description="padding='sm', paddingByIndent=false"
            padding="sm"
            :padding-by-indent="false"
            :bars="[{ icon: 'search', value: 'search' }]"
          />
        </DemoBox>
        <DemoBox>
          <D1Bars
            label="Medium Padding"
            description="padding='md', paddingByIndent=false"
            padding="md"
            :padding-by-indent="false"
            :bars="[{ icon: 'search', value: 'search' }]"
          />
        </DemoBox>
        <DemoBox>
          <D1Bars
            label="Large Padding"
            description="padding='lg', paddingByIndent=false"
            padding="lg"
            :padding-by-indent="false"
            :bars="[{ icon: 'search', value: 'search' }]"
          />
        </DemoBox>
        <DemoBox>
          <D1Bars
            label="Vertical Small Padding"
            description="padding='ySm', paddingByIndent=false"
            padding="ySm"
            :padding-by-indent="false"
            :bars="[{ icon: 'search', value: 'search' }]"
          />
        </DemoBox>
        <DemoBox>
          <D1Bars
            label="Vertical Medium Padding"
            description="padding='yMd', paddingByIndent=false"
            padding="yMd"
            :padding-by-indent="false"
            :bars="[{ icon: 'search', value: 'search' }]"
          />
        </DemoBox>
        <DemoBox>
          <D1Bars
            label="Vertical Large Padding"
            description="padding='yLg', paddingByIndent=false"
            padding="yLg"
            :padding-by-indent="false"
            :bars="[{ icon: 'search', value: 'search' }]"
          />
        </DemoBox>
        <DemoBox>
          <D1Bars
            label="No Padding"
            description="padding='none', paddingByIndent=false"
            padding="none"
            :padding-by-indent="false"
            :bars="[{ icon: 'search', value: 'search' }]"
          />
        </DemoBox>
        <DemoBox>
          <D1Bars
            label="Padding by Indent Default"
            description="paddingByIndent=true (default)"
            :bars="[{ icon: 'search', value: 'search' }]"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Skeleton">
        <DemoBox>
          <D1Skeleton active>
            <D1Bars
              is-skeleton
              label="Skeleton Title"
              description="Skeleton description text placeholder"
              :bars="[
                { icon: 'search', value: 'search' },
                { icon: 'refresh', value: 'refresh' }
              ]"
            />
          </D1Skeleton>
        </DemoBox>
      </D1Group>

      <D1Group label="Slots">
        <DemoFlex>
          <D1Button
            :label="isActionSlots ? 'Exit Action Mode' : 'Enter Action Mode'"
            @click="isActionSlots = !isActionSlots"
          />
        </DemoFlex>
        <DemoBox>
          <D1Bars
            v-model:action="isActionSlots"
            @click="(_, value) => onEvent(`click: ${value.value}`)"
          >
            <template #default>
              <span class="demo-bars-page__custom-label">Custom Label Slot</span>
            </template>
            <template #description>
              <span class="demo-bars-page__custom-desc">Custom Description Slot text content</span>
            </template>
            <template #bars>
              <D1Button label="Search" size="xs" primary icon="search" value="search"/>
              <D1Button label="Refresh" size="xs" outline icon="refresh" value="refresh"/>
            </template>
            <template #actionBars>
              <D1Button label="Delete" size="xs" palette="red" icon="delete" value="delete"/>
            </template>
          </D1Bars>
        </DemoBox>
      </D1Group>

      <D1Group label="Events & IDs">
        <DemoBox>
          <D1Bars
            label-id="demo-bars-title"
            description-id="demo-bars-desc"
            label="Event Tracker"
            description="Interact with the buttons to track click and state events"
            :bars="[
              { icon: 'thumb_up', value: 'like' },
              { icon: 'thumb_down', value: 'dislike' }
            ]"
            @click="(_, value) => onEvent(`click: ${value.value}`)"
            @click-lite="(value) => onEvent(`clickLite: ${value.value}`)"
          />
        </DemoBox>
        <DemoValue :value="eventName"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-bars-page {
  &__custom-label {
    font-weight: 700;
  }

  &__custom-desc {
    font-style: italic;
  }
}
</style>
