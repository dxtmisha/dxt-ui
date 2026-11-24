<script setup lang="ts">
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const customAriaLabel = ref<string>('Breadcrumb')
const isLoading = ref<boolean>(true)
const clickCount = ref<number>(0)
const lastEvent = ref<{ name: string, data: EventClickValue } | null>(null)

const listBasic = [
  { label: 'Home', to: '/' },
  { label: 'Components', href: '#components' },
  { label: 'Breadcrumbs' }
]

const listIcons = [
  { label: 'Home', to: '/', icon: 'home' },
  { label: 'Components', href: '#components', icon: 'settings' },
  { label: 'Breadcrumbs', icon: 'folder' }
]

const listStates = [
  { label: 'Home', to: '/' },
  { label: 'Disabled Item', href: '#disabled', disabled: true },
  { label: 'Current Page' }
]

const listBack = [
  { label: 'Back to Catalog', href: '#catalog', back: true, readonly: false }
]

const listZeroAndCustom = [
  { label: 'Level', value: 'level' },
  { label: 0, value: 0 }
]

const listEvents = [
  { label: 'Click Step 1', value: 'breadcrumb_item_1', detail: { step: 1 } },
  { label: 'Click Step 2', value: 'breadcrumb_item_2', detail: { step: 2 } },
  { label: 'Disabled Step', value: 'disabled_step', disabled: true },
  { label: 'Current Page' }
]

const handleClick = (name: string, data: EventClickValue): void => {
  if (name === 'click') {
    clickCount.value += 1
  }
  lastEvent.value = { name, data }
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Breadcrumbs">
    <D1Section>
      <D1Group label="Basic Trail & Localized Landmark Label">
        <DemoFlex>
          <D1Button label="Default Label" size="sm" :outline="customAriaLabel !== 'Breadcrumb'" @click="customAriaLabel = 'Breadcrumb'"/>
          <D1Button label="Custom Label (Site Path)" size="sm" :outline="customAriaLabel !== 'Site Path'" @click="customAriaLabel = 'Site Path'"/>
        </DemoFlex>
        <DemoValue label="textBreadcrumb" :value="customAriaLabel"/>
        <DemoBox>
          <D1Breadcrumbs
            data-testid="demo-breadcrumbs-basic"
            :list="listBasic"
            :text-breadcrumb="customAriaLabel"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Icons, States & Shared itemAttrs">
        <DemoBox>
          <D1Breadcrumbs data-testid="demo-breadcrumbs-icons" :list="listIcons"/>
        </DemoBox>
        <DemoBox>
          <D1Breadcrumbs data-testid="demo-breadcrumbs-states" :list="listStates"/>
        </DemoBox>
        <DemoBox>
          <D1Breadcrumbs data-testid="demo-breadcrumbs-back" :list="listBack"/>
        </DemoBox>
        <DemoBox>
          <D1Breadcrumbs
            data-testid="demo-breadcrumbs-attrs"
            :list="listZeroAndCustom"
            :item-attrs="{ iconArrowRight: 'arrow_forward' }"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Interactive Click Events (@click & @click-lite)">
        <DemoBox>
          <D1Breadcrumbs
            data-testid="demo-breadcrumbs-events"
            :list="listEvents"
            @click="(_event, data) => handleClick('click', data)"
            @click-lite="(data) => handleClick('clickLite', data)"
          />
        </DemoBox>
        <DemoValue label="clickCount" :value="clickCount"/>
        <DemoValue label="lastEvent" :value="lastEvent"/>
      </D1Group>

      <D1Group label="Skeleton Loading State">
        <DemoFlex>
          <D1Button label="Toggle Skeleton" size="sm" :outline="!isLoading" @click="isLoading = !isLoading"/>
        </DemoFlex>
        <DemoValue label="isLoading" :value="isLoading"/>
        <DemoBox>
          <D1Skeleton :active="isLoading">
            <D1Breadcrumbs
              data-testid="demo-breadcrumbs-skeleton"
              is-skeleton
              :list="listIcons"
            />
          </D1Skeleton>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
