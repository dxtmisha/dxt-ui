<script setup lang="ts">
import { computed, ref } from 'vue'
import type { AccordionExpose } from '@dxtmisha/constructor/Accordion'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

/** Composable for tracking events / Composable для отслеживания событий */
const { eventName, onEvent } = useDemoEvent()

/** Reactive value for manual v-model control / Реактивное значение для ручного управления v-model */
const openManual = ref(false)

/** Reactive value for v-model:model-open control / Реактивное значение для управления v-model:model-open */
const openModel = ref(false)

/** Reactive value for click-disabled programmatic accordion / Реактивное значение для аккордеона с отключенным кликом */
const openNonClick = ref(false)

/** Ref to the Accordion component instance / Ссылка на экземпляр компонента Accordion */
const accordionRef = ref<AccordionExpose | null>(null)

/** Reactive value for printing the component status / Реактивное значение для вывода статуса компонента */
const statusValue = computed<string>(() => {
  if (accordionRef.value) {
    const hasMotionElement = Boolean(accordionRef.value.getMotionTransformElement())
    return `getOpen(): ${accordionRef.value.getOpen()}, isShow(): ${accordionRef.value.isShow()}, hasMotionElement: ${hasMotionElement}`
  }
  return 'Ref not initialized'
})
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Accordion">
    <D1Section>
      <D1Group label="Basic & Data Formats">
        <D1Accordion
          label="Default Accordion"
          description="Click the header to expand or collapse content smoothly."
        >
          <span>This is the primary expandable content of the Accordion. By default, it features a border divider and smooth height transition.</span>
        </D1Accordion>

        <D1Accordion
          label="Label Only"
        >
          <span>An accordion without caption or description is compact and clean.</span>
        </D1Accordion>

        <D1Accordion
          :label="2048"
          :description="99999"
        >
          <span>Numeric values are supported for label and description props.</span>
        </D1Accordion>
      </D1Group>

      <D1Group label="Dividers">
        <D1Accordion
          label="With Divider (Default)"
          description="Bottom border divider is displayed between header and content."
          :divider="true"
        >
          <span>Standard divider visually separates the item in stacked panels.</span>
        </D1Accordion>

        <D1Accordion
          label="Without Divider"
          description="Divider property set to false for seamless borderless lists."
          :divider="false"
        >
          <span>This accordion has the divider hidden, ideal for minimal card layouts.</span>
        </D1Accordion>
      </D1Group>

      <D1Group label="States">
        <D1Accordion
          label="Closed State (Default)"
          description="Collapsed initially, awaiting user expansion."
          :open="false"
        >
          <span>Content is initially collapsed.</span>
        </D1Accordion>

        <D1Accordion
          label="Pre-Opened State"
          description="Expanded on initial load via open prop."
          :open="true"
        >
          <span>Content is pre-expanded and visible immediately upon mounting.</span>
        </D1Accordion>

        <D1Accordion
          label="Disabled State"
          description="Header is non-interactive and visually muted."
          :cellAttrs="{ disabled: true }"
        >
          <span>This accordion cannot be expanded or collapsed because the header cell is disabled.</span>
        </D1Accordion>

        <D1Accordion
          label="Loading State"
          description="Displays an active progress indicator inside the header cell."
          :cellAttrs="{ loading: true }"
        >
          <span>Useful while asynchronous body data is being fetched.</span>
        </D1Accordion>

        <D1Skeleton :active="true">
          <D1Accordion
            label="Skeleton Loading State"
            description="Skeleton placeholder animation applied to the header cell."
            :cellAttrs="{ isSkeleton: true }"
          >
            <span>Placeholder for zero-layout-shift loading states.</span>
          </D1Accordion>
        </D1Skeleton>
      </D1Group>

      <D1Group label="Icons & Arrow Customization">
        <D1Accordion
          label="Leading String Icon"
          description="Custom icon rendered on the left of the header."
          icon="settings"
        >
          <span>Leading icon can be provided as a simple Material Symbols string name.</span>
        </D1Accordion>

        <D1Accordion
          label="Leading Object Icon with Palette"
          description="Icon configured as an object with error palette."
          :icon="{ icon: 'favorite', palette: 'error' }"
        >
          <span>Leading icon can be customized with dynamic colors and palettes.</span>
        </D1Accordion>

        <D1Accordion
          label="Custom Trailing Arrow Indicator"
          description="Trailing icon replaced with expand_circle_down."
          iconArrowDown="expand_circle_down"
        >
          <span>The trailing indicator smoothly rotates 180 degrees when expanded.</span>
        </D1Accordion>

        <D1Accordion
          label="Object Trailing Arrow Indicator"
          description="Trailing icon configured as an object with primary palette."
          :iconArrowDown="{ icon: 'expand_circle_down', palette: 'primary' }"
        >
          <span>Both string and object configurations are supported for iconArrowDown.</span>
        </D1Accordion>

        <D1Accordion
          label="Hidden Icons (null)"
          description="Leading and trailing icons explicitly disabled via null."
          :icon="null"
          :iconArrowDown="null"
        >
          <span>Passing null suppresses default icon rendering cleanly.</span>
        </D1Accordion>
      </D1Group>

      <D1Group label="V-Model Control">
        <DemoFlex>
          <D1Button
            :label="openManual ? 'Close Panel' : 'Open Panel'"
            primary
            @click="openManual = !openManual"
          />
        </DemoFlex>
        <D1Accordion
          label="Two-Way Bound Accordion (v-model:open)"
          description="Controlled dynamically through v-model:open."
          v-model:open="openManual"
        >
          <span>This accordion state is synchronized bidirectionally. Clicking either the button above or this header updates the model value.</span>
        </D1Accordion>
        <DemoValue :value="openManual"/>

        <DemoFlex>
          <D1Button
            :label="openModel ? 'Close Model Panel' : 'Open Model Panel'"
            secondary
            @click="openModel = !openModel"
          />
        </DemoFlex>
        <D1Accordion
          label="Two-Way Bound Accordion (v-model:model-open)"
          description="Controlled dynamically through v-model:model-open."
          v-model:model-open="openModel"
        >
          <span>Supports legacy or alternative model-open v-model binding seamlessly.</span>
        </D1Accordion>
        <DemoValue :value="openModel"/>
      </D1Group>

      <D1Group label="Programmatic Control (Expose Methods)">
        <DemoFlex>
          <D1Button
            label="toOpen()"
            secondary
            @click="accordionRef?.toOpen()"
          />
          <D1Button
            label="toClose()"
            secondary
            @click="accordionRef?.toClose()"
          />
          <D1Button
            label="toggle()"
            primary
            @click="accordionRef?.toggle()"
          />
          <D1Button
            label="setOpen(true)"
            @click="accordionRef?.setOpen(true)"
          />
          <D1Button
            label="setOpen(false)"
            @click="accordionRef?.setOpen(false)"
          />
        </DemoFlex>
        <D1Accordion
          ref="accordionRef"
          label="Programmatically Controlled Accordion"
          description="Exposes toOpen, toClose, toggle, setOpen, getOpen, isShow, and getMotionTransformElement."
        >
          <span>All animation transition and state methods are accessible through the component template ref.</span>
        </D1Accordion>
        <DemoValue :value="statusValue"/>
      </D1Group>

      <D1Group label="Custom Slots">
        <D1Accordion>
          <template #label>
            <strong>Custom Label Slot</strong>
          </template>
          <template #caption>
            <span>Custom Top Caption Slot</span>
          </template>
          <template #description>
            <em>Custom italic description slot</em>
          </template>
          <template #trailing>
            <D1Badge
              label="New"
              primary
              overlap="static"
            />
          </template>
          <template #default="{ isOpen, isShow }">
            <div>
              <p>Scoped slot receives transition metadata:</p>
              <ul>
                <li><strong>isOpen:</strong> {{ isOpen }}</li>
                <li><strong>isShow:</strong> {{ isShow }}</li>
              </ul>
            </div>
          </template>
        </D1Accordion>

        <D1Accordion label="Header Body Slot">
          <template #body>
            <span>Extra auxiliary content injected directly into the header cell body slot.</span>
          </template>
          <span>Main body content below the custom header body slot.</span>
        </D1Accordion>
      </D1Group>

      <D1Group label="Header Styling & Metadata via cellAttrs">
        <D1Accordion
          label="Primary Palette Header"
          description="Header cell styled with primary color palette and caption via cellAttrs."
          :cellAttrs="{ palette: 'primary', caption: 'Primary Caption' }"
        >
          <span>The cellAttrs prop allows forwarding any D1Cell properties to the header.</span>
        </D1Accordion>

        <D1Accordion
          label="Secondary Palette Header"
          description="Header cell styled with secondary color palette."
          :cellAttrs="{ palette: 'secondary' }"
        >
          <span>Secondary color accent applied to the header cell.</span>
        </D1Accordion>

        <D1Accordion
          label="Tertiary Palette Header"
          description="Header cell styled with tertiary color palette."
          :cellAttrs="{ palette: 'tertiary' }"
        >
          <span>Tertiary color accent applied to the header cell.</span>
        </D1Accordion>
      </D1Group>

      <D1Group label="DOM, Accessibility & Lifecycle">
        <D1Accordion
          label="In-DOM when Closed (motionTransformAttrs.inDom)"
          description="Body remains in the DOM tree when collapsed for SEO and SSR accessibility."
          :motionTransformAttrs="{ inDom: true }"
        >
          <span>Inspect the DOM to verify this content remains rendered inside a hidden region even when closed.</span>
        </D1Accordion>

        <D1Accordion
          label="Custom Body Tag & Instant Toggle"
          description="Uses tagBody div, section mode, and disables transition animation."
          :motionTransformAttrs="{ tagBody: 'div', animationShow: false, section: true }"
        >
          <span>Rendered with div tag instead of section and immediate expand/collapse transition.</span>
        </D1Accordion>

        <D1Accordion
          label="Disabled Auto-Close (autoClose: false)"
          description="Remains open when clicking outside or pressing Escape globally."
          :autoClose="false"
        >
          <span>This accordion stays expanded until its header is clicked again.</span>
        </D1Accordion>

        <D1Accordion
          label="Custom Accessibility IDs (labelId & descriptionId)"
          description="Assigns deterministic IDs for aria-labelledby and aria-describedby bindings."
          labelId="demo-accordion-custom-label"
          descriptionId="demo-accordion-custom-description"
        >
          <span>Verify the region aria-labelledby and aria-describedby attributes match custom IDs.</span>
        </D1Accordion>

        <DemoFlex>
          <D1Button
            :label="openNonClick ? 'Close Programmatic' : 'Open Programmatic'"
            primary
            @click="openNonClick = !openNonClick"
          />
        </DemoFlex>
        <D1Accordion
          label="Non-Clickable Header (clickOpen: false)"
          description="Header cannot be toggled by clicking; state is controlled externally."
          :clickOpen="false"
          v-model:open="openNonClick"
        >
          <span>Clicking the header will not toggle this accordion. Only the external button above can expand or collapse it.</span>
        </D1Accordion>
      </D1Group>

      <D1Group label="Events">
        <D1Accordion
          label="Interactive Event Tracker"
          description="Listens to update:open, update:model-open, click, transform, and transform-lite events."
          @update:open="onEvent('update:open')"
          @update:model-open="onEvent('update:modelOpen')"
          @click="onEvent('click')"
          @transform="onEvent('transform')"
          @transform-lite="onEvent('transformLite')"
        >
          <span>Click this header to trigger update:open, click, and transform transition events.</span>
        </D1Accordion>
        <DemoValue :value="eventName"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
