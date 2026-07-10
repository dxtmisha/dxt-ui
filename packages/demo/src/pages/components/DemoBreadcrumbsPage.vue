<script setup lang="ts">
import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'
import DemoFlex from '../../components/DemoFlex.vue'

/** Composable for tracking events / Composable для отслеживания событий */
const { eventName, onEvent } = useDemoEvent()

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
  { label: 'Readonly Item', href: '#readonly', readonly: true },
  { label: 'Current Page' }
]

const listCustomArrows = [
  { label: 'Home', to: '/' },
  { label: 'Category', href: '#category', iconArrowRight: 'arrow_forward' },
  { label: 'Subcategory', href: '#subcategory', iconArrowRight: 'keyboard_arrow_right' },
  { label: 'Breadcrumbs' }
]

const listEvents = [
  { label: 'Click Me 1', href: '#click-1', value: 'breadcrumb_item_1' },
  { label: 'Click Me 2', href: '#click-2', value: 'breadcrumb_item_2' },
  { label: 'Current Page' }
]
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Breadcrumbs">
    <D1Section>
      <D1Group label="Basic">
        <DemoFlex>
          <D1Breadcrumbs :list="listBasic" />
        </DemoFlex>
      </D1Group>

      <D1Group label="With Icons">
        <DemoFlex>
          <D1Breadcrumbs :list="listIcons" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Disabled & States">
        <DemoFlex>
          <D1Breadcrumbs :list="listStates" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Custom Separator Arrows">
        <DemoFlex>
          <D1Breadcrumbs :list="listCustomArrows" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Events">
        <DemoFlex>
          <D1Breadcrumbs
            :list="listEvents"
            @click="(_event, data) => onEvent('click', data)"
            @click-lite="(data) => onEvent('clickLite', data)"
          />
        </DemoFlex>
        <DemoValue :value="eventName" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
</style>
