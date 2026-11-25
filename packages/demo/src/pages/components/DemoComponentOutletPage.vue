<script setup lang="ts">
import { computed, defineComponent, h, ref } from 'vue'
import { ComponentStorage, type ConstrExpose, type ConstrItem } from '@dxtmisha/functional'
import type { ComponentOutletExpose } from '@dxtmisha/constructor/ComponentOutlet'
import type { ComponentOutletProps } from '@dxtmisha/d1/D1ComponentOutlet'
import { D1Alert } from '@dxtmisha/d1/D1Alert'
import { D1Badge } from '@dxtmisha/d1/D1Badge'
import { D1Button } from '@dxtmisha/d1/D1Button'
import { D1Chip } from '@dxtmisha/d1/D1Chip'
import { D1Switch } from '@dxtmisha/d1/D1Switch'

import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

interface DynamicPreset {
  label: string
  name: NonNullable<ComponentOutletProps['name']>
  props: ConstrItem
}

const DemoOutletScopedCard = defineComponent({
  name: 'DemoOutletScopedCard',
  props: {
    title: {
      type: String,
      default: 'Scoped Card'
    },
    count: {
      type: Number,
      default: 1
    }
  },
  setup(props, { slots }) {
    return () => h('div', { class: 'demo-component-outlet-page__scoped-card' }, [
      h('div', { class: 'demo-component-outlet-page__scoped-header' }, slots.header?.({
        title: props.title,
        count: props.count
      }) ?? props.title),
      h('div', { class: 'demo-component-outlet-page__scoped-body' }, slots.default?.({
        status: 'active',
        doubled: props.count * 2
      }))
    ])
  }
})

ComponentStorage.add('demo-outlet-button', D1Button, {
  label: 'Default Outlet Button',
  primary: true
})

ComponentStorage.addList([
  {
    name: 'demo-outlet-badge',
    component: D1Badge,
    props: {
      label: 'Badge Outlet',
      palette: 'amber'
    }
  },
  {
    name: 'demo-outlet-chip',
    component: D1Chip,
    props: {
      label: 'Chip Outlet',
      palette: 'green'
    }
  },
  {
    name: 'demo-outlet-alert',
    component: D1Alert,
    props: {
      label: 'Alert Title from Outlet',
      palette: 'blue'
    }
  },
  {
    name: 'demo-outlet-switch',
    component: D1Switch,
    props: {
      label: 'Outlet Switch Control'
    }
  },
  {
    name: 'demo-outlet-scoped-card',
    component: DemoOutletScopedCard,
    props: {
      title: 'Resolved Scoped Card',
      count: 5
    }
  }
])

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events emitted yet')
const composedClicks = ref<string[]>([])
const switchValue = ref<boolean>(false)

const onAttrsClick = (event: MouseEvent): void => {
  composedClicks.value = [...composedClicks.value, 'attrs']
  onEvent('click:attrs', event)
  eventPayload.value = 'source=attrs'
}

const onPropsClick = (): void => {
  composedClicks.value = [...composedClicks.value, 'props']
  onEvent('click:props')
  eventPayload.value = 'source=props'
}

const resetComposedClicks = (): void => {
  composedClicks.value = []
}

const onSwitchUpdate = (value: boolean): void => {
  switchValue.value = value
  onEvent('update:modelValue', value)
  eventPayload.value = `modelValue=${String(value)}`
}

const dynamicPresets: readonly DynamicPreset[] = [
  {
    label: 'Button (Primary)',
    name: 'demo-outlet-button',
    props: { label: 'Dynamic Primary Button', primary: true }
  },
  {
    label: 'Button (Outline Red)',
    name: 'demo-outlet-button',
    props: { label: 'Dynamic Outline Red', outline: true, primary: false, palette: 'red' }
  },
  {
    label: 'Chip (Purple)',
    name: 'demo-outlet-chip',
    props: { label: 'Dynamic Purple Chip', palette: 'purple' }
  },
  {
    label: 'Badge (99+)',
    name: 'demo-outlet-badge',
    props: { label: '99+', overlap: 'static', palette: 'rose' }
  },
  {
    label: 'Unknown (Fallback)',
    name: 'unknown-outlet-item',
    props: { label: 'Unused' }
  }
]

const activePresetIndex = ref<number>(0)
const activePreset = computed<DynamicPreset>(() => dynamicPresets[activePresetIndex.value] ?? dynamicPresets[0])

const selectPreset = (presetIndex: number): void => {
  activePresetIndex.value = presetIndex
}

const outletElementReference = ref<ConstrExpose<Element, ComponentOutletExpose>>()
const elementDescription = ref<string>('Click button to inspect element')

const inspectElement = (): void => {
  const resolvedElement = outletElementReference.value?.getElement()
  const hostElement = outletElementReference.value?.elementHtml
  if (resolvedElement instanceof HTMLElement) {
    elementDescription.value = `<${resolvedElement.tagName.toLowerCase()} class="${resolvedElement.className}"> (matches elementHtml=${String(resolvedElement === hostElement)})`
  } else if (resolvedElement) {
    elementDescription.value = String(resolvedElement)
  } else {
    elementDescription.value = 'undefined'
  }
}

const isOutletMounted = ref<boolean>(true)
const lifecycleElementReference = ref<ConstrExpose<Element, ComponentOutletExpose>>()
const lifecycleElementStatus = ref<string>('Mounted')

const toggleLifecycleOutlet = (): void => {
  isOutletMounted.value = !isOutletMounted.value
  lifecycleElementStatus.value = isOutletMounted.value ? 'Mounted' : 'Unmounted'
}

const checkLifecycleElement = (): void => {
  const resolved = lifecycleElementReference.value?.getElement()
  lifecycleElementStatus.value = resolved instanceof HTMLElement
    ? `Active <${resolved.tagName.toLowerCase()}>`
    : 'undefined (unmounted)'
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="ComponentOutlet">
    <D1Section class="demo-component-outlet-page">
      <D1Group label="Basic Usage (Component Resolution)">
        <DemoFlex align="center">
          <D1ComponentOutlet name="demo-outlet-button"/>
          <D1ComponentOutlet name="demo-outlet-chip"/>
          <D1ComponentOutlet name="demo-outlet-badge" :props="{ overlap: 'static' }"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Props Merging & Overrides">
        <DemoFlex align="center">
          <D1ComponentOutlet
            name="demo-outlet-button"
            :props="{ label: 'Overridden Label (Red)', palette: 'red' }"
          />
          <D1ComponentOutlet
            name="demo-outlet-button"
            :props="{ label: 'Secondary Variant', secondary: true }"
          />
          <D1ComponentOutlet
            name="demo-outlet-chip"
            :props="{ label: 'Outline Chip', outline: true, palette: 'purple' }"
          />
          <D1ComponentOutlet
            name="demo-outlet-badge"
            :props="{ label: '99+', palette: 'rose', overlap: 'static' }"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Attributes Forwarding, Events & Two-Way Binding">
        <DemoFlex align="center">
          <D1ComponentOutlet
            name="demo-outlet-button"
            disabled
            :props="{ label: 'Disabled Button' }"
          />
          <D1ComponentOutlet
            name="demo-outlet-chip"
            size="lg"
            :props="{ label: 'Large Sized Chip' }"
          />
          <D1ComponentOutlet
            name="demo-outlet-button"
            :props="{ label: 'Composed Click', onClick: onPropsClick }"
            @click="onAttrsClick"
          />
          <D1Button
            label="Reset Clicks"
            size="sm"
            outline
            @click="resetComposedClicks"
          />
        </DemoFlex>
        <DemoFlex align="center">
          <D1ComponentOutlet
            name="demo-outlet-switch"
            :model-value="switchValue"
            @update:model-value="onSwitchUpdate"
          />
          <D1Button
            label="Toggle Switch Model"
            size="sm"
            outline
            @click="onSwitchUpdate(!switchValue)"
          />
        </DemoFlex>
        <DemoValue label="Last Event" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
        <DemoValue label="Composed Handlers" :value="composedClicks"/>
        <DemoValue label="Switch Model" :value="switchValue"/>
      </D1Group>

      <D1Group label="Fallback Content (Default Slot)">
        <DemoBox>
          <D1ComponentOutlet name="unregistered-component-name">
            Fallback rendered: Component is not registered in ComponentStorage
          </D1ComponentOutlet>
        </DemoBox>
        <DemoBox>
          <D1ComponentOutlet>
            Fallback rendered: No component name specified
          </D1ComponentOutlet>
        </DemoBox>
      </D1Group>

      <D1Group label="Slot & Scoped Slot Forwarding">
        <DemoFlex align="center">
          <D1ComponentOutlet name="demo-outlet-button">
            Button label provided via default slot
          </D1ComponentOutlet>
        </DemoFlex>
        <D1ComponentOutlet name="demo-outlet-alert">
          <template #body>
            Custom alert body provided via the forwarded #body slot.
          </template>
          <template #trailing>
            <D1Button
              label="Action"
              size="sm"
              primary
            />
          </template>
        </D1ComponentOutlet>
        <DemoBox>
          <D1ComponentOutlet name="demo-outlet-scoped-card" :props="{ title: 'Scoped Slot Host', count: 7 }">
            <template #header="headerSlotProps">
              <strong>Header ({{ headerSlotProps.title }} #{{ headerSlotProps.count }})</strong>
            </template>
            <template #default="defaultSlotProps">
              <span>Status: {{ defaultSlotProps.status }} | Doubled: {{ defaultSlotProps.doubled }}</span>
            </template>
          </D1ComponentOutlet>
        </DemoBox>
      </D1Group>

      <D1Group label="Dynamic Switching (Name & Props)">
        <DemoFlex align="center">
          <D1Button
            v-for="(preset, presetIndex) in dynamicPresets"
            :key="preset.label"
            :label="preset.label"
            :outline="activePresetIndex !== presetIndex"
            size="sm"
            @click="selectPreset(presetIndex)"
          />
        </DemoFlex>
        <DemoBox>
          <D1ComponentOutlet
            :name="activePreset.name"
            :props="activePreset.props"
          >
            Fallback: "{{ activePreset.name }}" is not registered
          </D1ComponentOutlet>
        </DemoBox>
        <DemoValue label="Active Preset" :value="`${activePreset.name} -> ${JSON.stringify(activePreset.props)}`"/>
      </D1Group>

      <D1Group label="Expose Method (getElement)">
        <DemoFlex align="center">
          <D1ComponentOutlet
            ref="outletElementReference"
            name="demo-outlet-button"
            :props="{ label: 'Target Button Element' }"
          />
          <D1Button
            label="Inspect Element"
            @click="inspectElement"
          />
        </DemoFlex>
        <DemoValue label="DOM Element" :value="elementDescription"/>
      </D1Group>

      <D1Group label="Accessibility (A11y)">
        <DemoFlex align="center">
          <D1ComponentOutlet
            name="demo-outlet-button"
            aria-label="Accessible outlet action button"
            aria-describedby="demo-outlet-a11y-hint"
            :props="{ label: 'Accessible Button' }"
          />
          <D1ComponentOutlet
            name="demo-outlet-button"
            disabled
            aria-disabled="true"
            :props="{ label: 'Aria Disabled Outlet' }"
          />
          <span id="demo-outlet-a11y-hint">Forwarded aria-label and aria-describedby hint</span>
        </DemoFlex>
      </D1Group>

      <D1Group label="Boundaries & Edge Cases">
        <DemoFlex align="center">
          <D1ComponentOutlet name="">
            Fallback for empty string name ""
          </D1ComponentOutlet>
          <D1ComponentOutlet name="   ">
            Fallback for whitespace name "   "
          </D1ComponentOutlet>
          <D1ComponentOutlet name="demo-outlet-badge" :props="{ label: 0, overlap: 'static' }"/>
          <D1ComponentOutlet name="demo-outlet-badge" :props="{ label: -5, overlap: 'static' }"/>
          <D1ComponentOutlet name="demo-outlet-badge" :props="{ label: 12.5, overlap: 'static' }"/>
          <D1ComponentOutlet name="demo-outlet-chip" :props="{ label: 'Tiếng Việt / Кириллица / 🚀' }"/>
          <D1ComponentOutlet name="demo-outlet-chip" :props="{ label: '<img src=x onerror=alert(1)>' }"/>
        </DemoFlex>
        <DemoBox class="demo-component-outlet-page__narrow">
          <D1ComponentOutlet
            name="demo-outlet-alert"
            :props="{ label: 'SupercalifragilisticexpialidociousOutletBoundaryTokenWithoutSpaces1234567890' }"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="SSR & Lifecycle (Mount / Unmount)">
        <DemoFlex align="center">
          <D1Button
            size="sm"
            outline
            :label="isOutletMounted ? 'Unmount Outlet' : 'Mount Outlet'"
            @click="toggleLifecycleOutlet"
          />
          <D1Button
            size="sm"
            outline
            label="Check getElement()"
            @click="checkLifecycleElement"
          />
          <D1ComponentOutlet
            v-if="isOutletMounted"
            ref="lifecycleElementReference"
            name="demo-outlet-badge"
            :props="{ label: 'Mounted Outlet', overlap: 'static', palette: 'green' }"
          />
        </DemoFlex>
        <DemoValue label="Lifecycle Status" :value="lifecycleElementStatus"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-component-outlet-page {
  &__narrow {
    max-width: 240px;
    width: 100%;
    overflow-wrap: anywhere;
  }

  &__scoped-card {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
}
</style>
