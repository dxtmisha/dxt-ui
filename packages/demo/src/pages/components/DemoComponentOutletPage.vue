<script setup lang="ts">
import { ref } from 'vue'
import { ComponentStorage } from '@dxtmisha/functional'
import type { ComponentOutletExpose } from '@dxtmisha/constructor/ComponentOutlet'
import { D1Alert } from '@dxtmisha/d1/D1Alert'
import { D1Badge } from '@dxtmisha/d1/D1Badge'
import { D1Button } from '@dxtmisha/d1/D1Button'
import { D1Chip } from '@dxtmisha/d1/D1Chip'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

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
  }
])

const dynamicComponentName = ref<string>('demo-outlet-button')
const setDynamicComponentName = (targetName: string): void => {
  dynamicComponentName.value = targetName
}

const outletElementReference = ref<ComponentOutletExpose>()
const elementDescription = ref<string>('Click button to inspect element')

const inspectElement = (): void => {
  const resolvedElement = outletElementReference.value?.getElement()
  if (resolvedElement instanceof HTMLElement) {
    elementDescription.value = `<${resolvedElement.tagName.toLowerCase()} class="${resolvedElement.className}">`
  } else if (resolvedElement) {
    elementDescription.value = String(resolvedElement)
  } else {
    elementDescription.value = 'undefined'
  }
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="ComponentOutlet">
    <D1Section>
      <D1Group label="Basic Usage (Component Resolution)">
        <DemoFlex align="center">
          <D1ComponentOutlet name="demo-outlet-button"/>
          <D1ComponentOutlet name="demo-outlet-chip"/>
          <D1ComponentOutlet name="demo-outlet-badge"/>
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
            :props="{ label: '99+', palette: 'rose' }"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Attributes Forwarding">
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
        </DemoFlex>
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

      <D1Group label="Slot Forwarding to Resolved Component">
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
      </D1Group>

      <D1Group label="Dynamic Switching">
        <DemoFlex align="center">
          <D1Button
            label="Button"
            @click="setDynamicComponentName('demo-outlet-button')"
          />
          <D1Button
            label="Chip"
            @click="setDynamicComponentName('demo-outlet-chip')"
          />
          <D1Button
            label="Badge"
            @click="setDynamicComponentName('demo-outlet-badge')"
          />
          <D1Button
            label="Unknown"
            @click="setDynamicComponentName('unknown-outlet-item')"
          />
        </DemoFlex>
        <DemoBox>
          <D1ComponentOutlet :name="dynamicComponentName">
            Fallback: "{{ dynamicComponentName }}" is not registered
          </D1ComponentOutlet>
        </DemoBox>
        <DemoValue
          label="Active Name"
          :value="dynamicComponentName"
        />
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
        <DemoValue
          label="DOM Element"
          :value="elementDescription"
        />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
