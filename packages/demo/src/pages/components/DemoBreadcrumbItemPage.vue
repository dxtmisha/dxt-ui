<script setup lang="ts">
import { nextTick, ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { BreadcrumbItemExpose } from '@dxtmisha/constructor/BreadcrumbItem'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const isDisabled = ref<boolean>(false)
const isReadonly = ref<boolean>(false)
const isBack = ref<boolean>(false)
const isSkeletonActive = ref<boolean>(true)
const isMounted = ref<boolean>(true)

const clickCount = ref<number>(0)
const clickLiteCount = ref<number>(0)
const eventPayload = ref<string>('None')

const exposedItemReference = ref<BreadcrumbItemExpose | null>(null)
const exposedValueProperty = ref<string>('initial-step')
const exposedDetailProperty = ref<Record<string, string | number>>({
  section: 'catalog',
  step: 1
})
const exposedSnapshot = ref<string>('Not read yet')

const handleBreadcrumbClick = (_event: MouseEvent, payload: EventClickValue): void => {
  clickCount.value += 1
  eventPayload.value = JSON.stringify(payload)
  onEvent('click', payload)
}

const handleBreadcrumbClickLite = (payload: EventClickValue): void => {
  clickLiteCount.value += 1
  eventPayload.value = JSON.stringify(payload)
  onEvent('clickLite', payload)
}

const readExposedMethods = (): void => {
  exposedSnapshot.value = JSON.stringify({
    value: exposedItemReference.value?.getValue?.(),
    detail: exposedItemReference.value?.getDetail?.()
  })
}

const updateAndReadExposedMethods = async (): Promise<void> => {
  exposedValueProperty.value = 'updated-step'
  exposedDetailProperty.value = {
    section: 'checkout',
    step: 2
  }
  await nextTick()
  readExposedMethods()
}

const resetExposedProperties = async (): Promise<void> => {
  exposedValueProperty.value = 'initial-step'
  exposedDetailProperty.value = {
    section: 'catalog',
    step: 1
  }
  await nextTick()
  readExposedMethods()
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="BreadcrumbItem">
    <D1Section>
      <D1Group label="Navigation & Link Formats (href, to String, to Object, Action & Index)">
        <DemoBox>
          <DemoFlex>
            <D1BreadcrumbItem
              data-testid="demo-crumb-href"
              label="Home (href)"
              icon="home"
              href="#home"
            />
            <D1BreadcrumbItem
              data-testid="demo-crumb-to-string"
              label="Breadcrumbs (to string)"
              to="/component-breadcrumbs"
            />
            <D1BreadcrumbItem
              data-testid="demo-crumb-to-object"
              label="Catalog Home (to object)"
              :to="{ name: 'home' }"
            />
            <D1BreadcrumbItem
              data-testid="demo-crumb-action"
              label="Products (value)"
              icon="inventory_2"
              value="products"
              :detail="{ category: 'hardware' }"
              @click="handleBreadcrumbClick"
              @click-lite="handleBreadcrumbClickLite"
            />
            <D1BreadcrumbItem
              data-testid="demo-crumb-index"
              label="Step by Index"
              index="step-4"
              @click="handleBreadcrumbClick"
              @click-lite="handleBreadcrumbClickLite"
            />
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Icons (String, Object, Null) & Custom Arrows">
        <DemoBox>
          <DemoFlex>
            <D1BreadcrumbItem
              data-testid="demo-crumb-icon-string"
              label="String Icon"
              icon="folder"
              href="#folder"
            />
            <D1BreadcrumbItem
              data-testid="demo-crumb-icon-object"
              label="Object Icon"
              :icon="{ icon: 'star', turn: true }"
              href="#featured"
            />
            <D1BreadcrumbItem
              data-testid="demo-crumb-icon-null"
              label="Null Icon"
              :icon="null"
              href="#plain"
            />
            <D1BreadcrumbItem
              data-testid="demo-crumb-custom-arrow"
              label="Custom Arrows"
              icon-arrow-right="arrow_forward"
              icon-arrow-left="arrow_back"
              :back="isBack"
              href="#custom-arrows"
            />
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="States & Interactive Toggles (Disabled, Readonly & Back Mode)">
        <DemoFlex>
          <D1Button
            data-testid="demo-crumb-toggle-disabled"
            label="Toggle Disabled"
            size="sm"
            :outline="!isDisabled"
            @click="isDisabled = !isDisabled"
          />
          <D1Button
            data-testid="demo-crumb-toggle-readonly"
            label="Toggle Readonly"
            size="sm"
            :outline="!isReadonly"
            @click="isReadonly = !isReadonly"
          />
          <D1Button
            data-testid="demo-crumb-toggle-back"
            label="Toggle Back Mode"
            size="sm"
            :outline="!isBack"
            @click="isBack = !isBack"
          />
        </DemoFlex>
        <DemoValue label="states" :value="{ isDisabled, isReadonly, isBack }"/>
        <DemoBox>
          <DemoFlex>
            <D1BreadcrumbItem
              data-testid="demo-crumb-reactive"
              label="Parent Directory"
              icon="folder"
              :disabled="isDisabled"
              :readonly="isReadonly"
              :back="isBack"
              value="parent-dir"
              @click="handleBreadcrumbClick"
              @click-lite="handleBreadcrumbClickLite"
            />
            <D1BreadcrumbItem
              data-testid="demo-crumb-disabled"
              label="Archived (Disabled)"
              disabled
              value="archived"
              @click="handleBreadcrumbClick"
              @click-lite="handleBreadcrumbClickLite"
            />
            <D1BreadcrumbItem
              data-testid="demo-crumb-readonly"
              label="Workstations (Readonly)"
              readonly
              value="workstations"
              @click="handleBreadcrumbClick"
              @click-lite="handleBreadcrumbClickLite"
            />
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Events & Blocked Actions">
        <DemoBox>
          <DemoFlex>
            <D1BreadcrumbItem
              data-testid="demo-crumb-event-trigger"
              label="Trigger Click & ClickLite"
              value="event-item"
              :detail="{ source: 'events-group' }"
              @click="handleBreadcrumbClick"
              @click-lite="handleBreadcrumbClickLite"
            />
            <D1BreadcrumbItem
              data-testid="demo-crumb-event-disabled"
              label="Blocked Disabled"
              disabled
              value="blocked-disabled"
              @click="handleBreadcrumbClick"
              @click-lite="handleBreadcrumbClickLite"
            />
            <D1BreadcrumbItem
              data-testid="demo-crumb-event-readonly"
              label="Blocked Readonly"
              readonly
              value="blocked-readonly"
              @click="handleBreadcrumbClick"
              @click-lite="handleBreadcrumbClickLite"
            />
          </DemoFlex>
        </DemoBox>
        <DemoValue label="eventName" :value="eventName || 'None'"/>
        <DemoValue label="eventPayload" :value="eventPayload"/>
        <DemoValue label="counts" :value="{ clickCount, clickLiteCount }"/>
      </D1Group>

      <D1Group label="Programmatic Expose (getValue & getDetail)">
        <DemoBox>
          <DemoFlex>
            <D1BreadcrumbItem
              ref="exposedItemReference"
              data-testid="demo-crumb-expose"
              label="Exposed BreadcrumbItem"
              :value="exposedValueProperty"
              :detail="exposedDetailProperty"
            />
          </DemoFlex>
        </DemoBox>
        <DemoFlex>
          <D1Button
            data-testid="demo-crumb-expose-read"
            label="Read Expose"
            size="sm"
            @click="readExposedMethods"
          />
          <D1Button
            data-testid="demo-crumb-expose-update"
            label="Update Props & Read"
            size="sm"
            outline
            @click="updateAndReadExposedMethods"
          />
          <D1Button
            data-testid="demo-crumb-expose-reset"
            label="Reset Expose"
            size="sm"
            outline
            @click="resetExposedProperties"
          />
        </DemoFlex>
        <DemoValue label="exposedSnapshot" :value="exposedSnapshot"/>
      </D1Group>

      <D1Group label="Skeleton Loading State">
        <DemoFlex>
          <D1Button
            data-testid="demo-crumb-skeleton-toggle"
            label="Toggle Skeleton"
            size="sm"
            :outline="!isSkeletonActive"
            @click="isSkeletonActive = !isSkeletonActive"
          />
        </DemoFlex>
        <DemoValue label="isSkeletonActive" :value="isSkeletonActive"/>
        <DemoBox>
          <D1Skeleton data-testid="demo-crumb-skeleton-root" :active="isSkeletonActive">
            <DemoFlex>
              <D1BreadcrumbItem
                data-testid="demo-crumb-skeleton-1"
                is-skeleton
                icon="home"
                label="Dashboard"
                href="#dashboard"
              />
              <D1BreadcrumbItem
                data-testid="demo-crumb-skeleton-2"
                is-skeleton
                label="Analytics Overview"
                readonly
              />
            </DemoFlex>
          </D1Skeleton>
        </DemoBox>
      </D1Group>

      <D1Group label="Data Types & Slots (#default)">
        <DemoBox>
          <DemoFlex>
            <D1BreadcrumbItem
              data-testid="demo-crumb-zero"
              :label="0"
              :value="0"
              readonly
            />
            <D1BreadcrumbItem
              data-testid="demo-crumb-negative"
              :label="-42"
              :value="-42"
            />
            <D1BreadcrumbItem
              data-testid="demo-crumb-decimal"
              :label="3.14"
              :value="3.14"
            />
            <D1BreadcrumbItem
              data-testid="demo-crumb-single-char"
              label="A"
            />
            <D1BreadcrumbItem
              data-testid="demo-crumb-slot"
              href="#v2"
            >
              <template #default="slotProperties">
                <span>Release Notes (v2.4) [slot: {{ JSON.stringify(slotProperties) }}]</span>
              </template>
            </D1BreadcrumbItem>
            <D1BreadcrumbItem
              data-testid="demo-crumb-label-and-slot"
              label="Combined: "
            >
              <strong>Tail Slot</strong>
            </D1BreadcrumbItem>
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Accessibility (WAI-ARIA & Keyboard)">
        <DemoBox>
          <DemoFlex>
            <D1BreadcrumbItem
              data-testid="demo-crumb-a11y-id"
              label="Account Settings"
              label-id="demo-crumb-custom-label-id"
              aria-label="Go to account settings"
              href="#account"
            />
            <D1BreadcrumbItem
              data-testid="demo-crumb-a11y-role"
              label="Keyboard Link (role=link, tabindex=0)"
              value="keyboard-link"
              @click="handleBreadcrumbClick"
              @click-lite="handleBreadcrumbClickLite"
            />
            <D1BreadcrumbItem
              data-testid="demo-crumb-a11y-current"
              label="Current Page (aria-current=page)"
              readonly
            />
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary, Edge Cases & Narrow Container">
        <DemoBox>
          <DemoFlex>
            <D1BreadcrumbItem data-testid="demo-crumb-empty-component"/>
            <D1BreadcrumbItem data-testid="demo-crumb-empty-string" label=""/>
            <D1BreadcrumbItem data-testid="demo-crumb-whitespace" label="   "/>
            <D1BreadcrumbItem
              data-testid="demo-crumb-unicode"
              label="Café & Résumé — 日本語 🚀"
              href="#unicode"
            />
            <D1BreadcrumbItem
              data-testid="demo-crumb-xss"
              label="<img src=x onerror=alert(1)>"
              href="#xss"
            />
          </DemoFlex>
        </DemoBox>
        <DemoBox class="demo-breadcrumb-item-page__narrow">
          <DemoFlex>
            <D1BreadcrumbItem
              data-testid="demo-crumb-long"
              label="Very long multi-sentence breadcrumb label intended to verify wrapping behavior inside constrained containers"
              href="#long"
            />
            <D1BreadcrumbItem
              data-testid="demo-crumb-unbroken"
              label="SupercalifragilisticexpialidociousBreadcrumbSegmentWithoutSpaces"
              readonly
            />
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mounting (v-if)">
        <DemoFlex>
          <D1Button
            data-testid="demo-crumb-mount-toggle"
            :label="isMounted ? 'Unmount Item' : 'Mount Item'"
            size="sm"
            :outline="!isMounted"
            @click="isMounted = !isMounted"
          />
        </DemoFlex>
        <DemoValue label="isMounted" :value="isMounted"/>
        <DemoBox>
          <D1BreadcrumbItem
            v-if="isMounted"
            data-testid="demo-crumb-conditional"
            label="Conditionally Mounted Crumb"
            icon="bolt"
            href="#mounted"
          />
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-breadcrumb-item-page {
  &__narrow {
    max-width: 220px;
  }
}
</style>
