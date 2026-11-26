<script setup lang="ts">
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { PlaceholderProps } from '@dxtmisha/d1/D1Placeholder'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const sizes: readonly NonNullable<PlaceholderProps['size']>[] = ['sm', 'md', 'lg']
const selectedSize = ref<NonNullable<PlaceholderProps['size']>>('md')
const hideActions = ref<boolean>(false)
const lifecycleMounted = ref<boolean>(true)
const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const sampleSvgImage = `data:image/svg+xml;utf8,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" rx="24" fill="#e0e7ff"/><circle cx="60" cy="60" r="32" fill="#4f46e5"/></svg>'
)}`

const handleActionClick = (event: MouseEvent, value: EventClickValue): void => {
  onEvent('actions', value)
  eventPayload.value = JSON.stringify({ eventType: event.type, value: value.value, type: value.type })
}

const handleActionLite = (value: EventClickValue): void => {
  onEvent('actionsLite', value)
}

const handleImageLoad = (data: unknown): void => {
  onEvent('load', data)
  eventPayload.value = 'image loaded'
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Placeholder">
    <D1Section class="demo-placeholder-page">
      <D1Group label="Basic Empty & Error States">
        <DemoFlex>
          <DemoBox class="demo-placeholder-page__card">
            <D1Placeholder
              data-testid="demo-placeholder-basic"
              image="wifi_off"
              label="No Internet Connection"
              description="Please check your network settings and try again."
              :actions-list="[
                { label: 'Retry', value: 'retry' },
                { label: 'Settings', value: 'settings', outline: true }
              ]"
            />
          </DemoBox>
          <DemoBox class="demo-placeholder-page__card">
            <D1Placeholder
              data-testid="demo-placeholder-image"
              :image="sampleSvgImage"
              :image-attrs="{ alt: 'Empty folder illustration' }"
              label="No Files Uploaded"
              description="Drag documents here or browse your device to get started."
              :actions-list="[{ label: 'Upload File', value: 'upload' }]"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Sizes (sm, md, lg)">
        <DemoFlex>
          <D1Button
            v-for="sizeOption in sizes"
            :key="sizeOption"
            :label="sizeOption"
            :outline="selectedSize !== sizeOption"
            size="sm"
            @click="selectedSize = sizeOption"
          />
        </DemoFlex>
        <DemoValue label="size" :value="selectedSize"/>
        <DemoFlex>
          <DemoBox v-for="sizeOption in sizes" :key="sizeOption" class="demo-placeholder-page__card">
            <D1Placeholder
              :data-testid="'demo-placeholder-size-' + sizeOption"
              :size="sizeOption"
              :image="sampleSvgImage"
              :label="'Size: ' + sizeOption"
              description="Illustrative container scaling across size tokens."
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Actions, Secondary List, Dynamic Hide & Events">
        <DemoFlex>
          <D1Button
            :label="hideActions ? 'Show Actions' : 'Hide Actions'"
            size="sm"
            outline
            @click="hideActions = !hideActions"
          />
        </DemoFlex>
        <DemoValue label="actionsHide" :value="hideActions"/>
        <DemoValue label="eventName" :value="eventName || 'No events triggered yet'"/>
        <DemoValue label="eventPayload" :value="eventPayload"/>
        <DemoBox>
          <D1Placeholder
            data-testid="demo-placeholder-events"
            :image="sampleSvgImage"
            label="Session Expired"
            label-id="demo-placeholder-session-label"
            description="Sign in again to continue working on this document."
            description-id="demo-placeholder-session-desc"
            :actions-hide="hideActions"
            :actions-list="[{ label: 'Sign In', value: 'sign-in' }]"
            :actions-secondary="[{ label: 'Help Center', value: 'help' }]"
            :actions-attrs="{ class: 'demo-placeholder-actions-extra' }"
            @actions="handleActionClick"
            @actions-lite="handleActionLite"
            @load="handleImageLoad"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Slots (#default, #description, #context)">
        <DemoBox>
          <D1Placeholder
            data-testid="demo-placeholder-slots"
            image="inbox"
            :actions-list="[{ label: 'Create Item', value: 'create' }]"
          >
            <template #default>
              <span>Custom Default Slot Label</span>
            </template>
            <template #description>
              <span>Custom description provided via the #description slot.</span>
            </template>
            <template #context>
              <div class="demo-placeholder-page__context">Additional #context slot block</div>
            </template>
          </D1Placeholder>
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary, Accessibility & Edge Cases">
        <DemoFlex>
          <DemoBox class="demo-placeholder-page__card">
            <D1Placeholder data-testid="demo-placeholder-empty"/>
          </DemoBox>
          <DemoBox class="demo-placeholder-page__card">
            <D1Placeholder
              data-testid="demo-placeholder-zero"
              :label="0"
              :description="0"
            />
          </DemoBox>
          <DemoBox class="demo-placeholder-page__card">
            <D1Placeholder
              data-testid="demo-placeholder-unicode"
              label="Tiếng Việt • Кириллица 🚀"
              description="<script>alert('xss')</script> — <img src=x onerror=alert(1)>"
            />
          </DemoBox>
        </DemoFlex>
        <DemoBox class="demo-placeholder-page__narrow">
          <D1Placeholder
            data-testid="demo-placeholder-narrow"
            image="warning"
            label="SuperLongUnbrokenPlaceholderHeadingWithoutSpaces1234567890"
            description="Long multi-sentence placeholder description verifying text wrapping and action alignment inside a narrow 280px container."
            :actions-list="[{ label: 'Acknowledge' }]"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="SSR & Lifecycle">
        <DemoFlex align="center">
          <D1Button
            :label="lifecycleMounted ? 'Unmount Placeholder' : 'Mount Placeholder'"
            size="sm"
            outline
            @click="lifecycleMounted = !lifecycleMounted"
          />
          <DemoValue label="Mounted" :value="lifecycleMounted"/>
        </DemoFlex>
        <DemoBox v-if="lifecycleMounted">
          <D1Placeholder
            image="check_circle"
            label="Lifecycle Ready"
            description="Mounted and unmounted cleanly via v-if."
          />
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-placeholder-page {
  &__card {
    flex: 1 1 320px;
    min-width: 280px;
  }

  &__context {
    margin-top: 8px;
    padding: 8px 12px;
    border-radius: var(--d1-sys-rounded-md);
  }

  &__narrow {
    max-width: 280px;
  }
}
</style>
