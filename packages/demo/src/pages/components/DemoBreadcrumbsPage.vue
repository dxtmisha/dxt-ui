<script setup lang="ts">
import { computed, ref } from 'vue'
import type { BreadcrumbItemProps, EventClickValue } from '@dxtmisha/constructor'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const landmarkLabelMode = ref<'default' | 'custom' | 'function'>('default')
const useForwardArrows = ref<boolean>(false)
const isSkeletonActive = ref<boolean>(true)
const isMounted = ref<boolean>(true)

const clickCount = ref<number>(0)
const clickLiteCount = ref<number>(0)
const eventPayload = ref<string>('None')

const textBreadcrumbValue = computed<string | (() => string)>(() => {
  if (landmarkLabelMode.value === 'custom') {
    return 'Site Path'
  }
  if (landmarkLabelMode.value === 'function') {
    return () => 'Dynamic Function Breadcrumb'
  }
  return 'Breadcrumb'
})

const resolvedLandmarkLabel = computed<string>(() => {
  if (typeof textBreadcrumbValue.value === 'function') {
    return textBreadcrumbValue.value()
  }
  return textBreadcrumbValue.value
})

const listBasic: BreadcrumbItemProps[] = [
  { label: 'Home', to: { name: 'home' } },
  { label: 'Components', to: '/component-breadcrumbs' },
  { label: 'Navigation', href: '#navigation' },
  { label: 'Breadcrumbs' }
]

const listIcons: BreadcrumbItemProps[] = [
  { label: 'Home', to: '/', icon: 'home' },
  { label: 'Featured', href: '#featured', icon: { icon: 'star', turn: true } },
  { label: 'Plain', href: '#plain', icon: null },
  { label: 'Breadcrumbs', icon: 'folder' }
]

const listStates: BreadcrumbItemProps[] = [
  { label: 'Home', to: '/' },
  { label: 'Disabled Item', href: '#disabled', disabled: true },
  { label: 'Explicit Readonly', readonly: true },
  { label: 'Current Page' }
]

const listBack: BreadcrumbItemProps[] = [
  { label: 'Back to Catalog', href: '#catalog', back: true, readonly: false }
]

const dynamicTrail = ref<BreadcrumbItemProps[]>([
  { label: 'Workspace', value: 'workspace' },
  { label: 'Projects', value: 'projects' },
  { label: 'Overview', value: 'overview' }
])

const listEvents: BreadcrumbItemProps[] = [
  { label: 'Click Step 1', value: 'breadcrumb_item_1', detail: { step: 1 } },
  { label: 'Click Step 2 (index)', index: 'step_index_2', detail: { step: 2 } },
  { label: 'Disabled Step', value: 'disabled_step', disabled: true },
  { label: 'Readonly Step', value: 'readonly_step', readonly: true },
  { label: 'Current Page' }
]

const listBoundary: BreadcrumbItemProps[] = [
  { label: 0, value: 0 },
  { label: -5, value: -5 },
  { label: 2.5, value: 2.5 },
  { label: 'A', value: 'A' },
  { label: '', value: 'empty' },
  { label: '   ', value: 'whitespace' },
  { label: 'Café & Résumé — 日本語 🚀', value: 'unicode' },
  { label: '<img src=x onerror=alert(1)>', value: 'xss' }
]

const listOverflow: BreadcrumbItemProps[] = [
  { label: 'Root', href: '#root' },
  { label: 'Very long intermediate breadcrumb segment designed to wrap cleanly', href: '#middle' },
  { label: 'SupercalifragilisticexpialidociousFinalSegmentWithoutSpaces' }
]

const addTrailStep = (): void => {
  const nextNumber = dynamicTrail.value.length + 1
  dynamicTrail.value = [
    ...dynamicTrail.value,
    { label: `Level ${nextNumber}`, value: `level-${nextNumber}` }
  ]
}

const removeLastTrailStep = (): void => {
  if (dynamicTrail.value.length > 1) {
    dynamicTrail.value = dynamicTrail.value.slice(0, -1)
  }
}

const resetDynamicTrail = (): void => {
  dynamicTrail.value = [
    { label: 'Workspace', value: 'workspace' },
    { label: 'Projects', value: 'projects' },
    { label: 'Overview', value: 'overview' }
  ]
}

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
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Breadcrumbs">
    <D1Section>
      <D1Group label="Basic Trail & Localized Landmark Label (textBreadcrumb)">
        <DemoFlex>
          <D1Button
            data-testid="demo-breadcrumbs-label-default"
            label="String: Breadcrumb"
            size="sm"
            :outline="landmarkLabelMode !== 'default'"
            @click="landmarkLabelMode = 'default'"
          />
          <D1Button
            data-testid="demo-breadcrumbs-label-custom"
            label="String: Site Path"
            size="sm"
            :outline="landmarkLabelMode !== 'custom'"
            @click="landmarkLabelMode = 'custom'"
          />
          <D1Button
            data-testid="demo-breadcrumbs-label-function"
            label="Function Label"
            size="sm"
            :outline="landmarkLabelMode !== 'function'"
            @click="landmarkLabelMode = 'function'"
          />
        </DemoFlex>
        <DemoValue label="textBreadcrumb" :value="resolvedLandmarkLabel"/>
        <DemoBox>
          <D1Breadcrumbs
            data-testid="demo-breadcrumbs-basic"
            :list="listBasic"
            :text-breadcrumb="textBreadcrumbValue"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Icons (String, Object, Null), States & Back Mode">
        <DemoBox>
          <D1Breadcrumbs data-testid="demo-breadcrumbs-icons" :list="listIcons"/>
        </DemoBox>
        <DemoBox>
          <D1Breadcrumbs data-testid="demo-breadcrumbs-states" :list="listStates"/>
        </DemoBox>
        <DemoBox>
          <D1Breadcrumbs data-testid="demo-breadcrumbs-back" :list="listBack"/>
        </DemoBox>
      </D1Group>

      <D1Group label="Shared itemAttrs & Dynamic List Mutations">
        <DemoFlex>
          <D1Button
            data-testid="demo-breadcrumbs-toggle-arrows"
            label="Toggle Shared Arrows (itemAttrs)"
            size="sm"
            :outline="!useForwardArrows"
            @click="useForwardArrows = !useForwardArrows"
          />
          <D1Button
            data-testid="demo-breadcrumbs-add-step"
            label="Add Step"
            size="sm"
            outline
            @click="addTrailStep"
          />
          <D1Button
            data-testid="demo-breadcrumbs-remove-step"
            label="Remove Last"
            size="sm"
            outline
            @click="removeLastTrailStep"
          />
          <D1Button
            data-testid="demo-breadcrumbs-reset-trail"
            label="Reset Trail"
            size="sm"
            outline
            @click="resetDynamicTrail"
          />
        </DemoFlex>
        <DemoValue label="dynamicTrailLength" :value="dynamicTrail.length"/>
        <DemoBox>
          <D1Breadcrumbs
            data-testid="demo-breadcrumbs-attrs"
            :list="dynamicTrail"
            :item-attrs="useForwardArrows ? { iconArrowRight: 'arrow_forward', iconArrowLeft: 'arrow_back' } : undefined"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Events (@click & @click-lite) & Blocked Actions">
        <DemoBox>
          <D1Breadcrumbs
            data-testid="demo-breadcrumbs-events"
            :list="listEvents"
            @click="handleBreadcrumbClick"
            @click-lite="handleBreadcrumbClickLite"
          />
        </DemoBox>
        <DemoValue label="eventName" :value="eventName || 'None'"/>
        <DemoValue label="eventPayload" :value="eventPayload"/>
        <DemoValue label="counts" :value="{ clickCount, clickLiteCount }"/>
      </D1Group>

      <D1Group label="Skeleton Loading State">
        <DemoFlex>
          <D1Button
            data-testid="demo-breadcrumbs-skeleton-toggle"
            label="Toggle Skeleton"
            size="sm"
            :outline="!isSkeletonActive"
            @click="isSkeletonActive = !isSkeletonActive"
          />
        </DemoFlex>
        <DemoValue label="isSkeletonActive" :value="isSkeletonActive"/>
        <DemoBox>
          <D1Skeleton :active="isSkeletonActive">
            <D1Breadcrumbs
              data-testid="demo-breadcrumbs-skeleton"
              is-skeleton
              :list="listIcons"
            />
          </D1Skeleton>
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary, Edge Cases & Narrow Container">
        <DemoBox>
          <D1Breadcrumbs data-testid="demo-breadcrumbs-empty-component"/>
          <D1Breadcrumbs data-testid="demo-breadcrumbs-empty-list" :list="[]"/>
          <D1Breadcrumbs data-testid="demo-breadcrumbs-boundary" :list="listBoundary"/>
        </DemoBox>
        <DemoBox class="demo-breadcrumbs-page__narrow">
          <D1Breadcrumbs data-testid="demo-breadcrumbs-narrow" :list="listOverflow"/>
        </DemoBox>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mounting (v-if)">
        <DemoFlex>
          <D1Button
            data-testid="demo-breadcrumbs-mount-toggle"
            :label="isMounted ? 'Unmount Breadcrumbs' : 'Mount Breadcrumbs'"
            size="sm"
            :outline="!isMounted"
            @click="isMounted = !isMounted"
          />
        </DemoFlex>
        <DemoValue label="isMounted" :value="isMounted"/>
        <DemoBox>
          <D1Breadcrumbs
            v-if="isMounted"
            data-testid="demo-breadcrumbs-conditional"
            :list="listBasic"
          />
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-breadcrumbs-page {
  &__narrow {
    max-width: 260px;
  }
}
</style>
