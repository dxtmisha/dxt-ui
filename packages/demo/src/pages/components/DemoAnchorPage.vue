<script setup lang="ts">
import { nextTick, ref } from 'vue'
import type { AnchorExpose } from '@dxtmisha/constructor/Anchor'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('')

const anchorReference = ref<AnchorExpose | null>(null)
const hiddenAnchorReference = ref<AnchorExpose | null>(null)
const dynamicAnchorReference = ref<AnchorExpose | null>(null)

const exposeStatus = ref<string>('No programmatic navigation triggered yet')
const dynamicName = ref<string>('dynamic-target-alpha')
const dynamicShift = ref<number>(48)
const dynamicIsCopy = ref<boolean>(false)
const dynamicHide = ref<boolean>(false)
const isAnchorMounted = ref<boolean>(true)

const getCopiedClipboardMessage = (): string => {
  return 'Copied via callback function!'
}

const handleAnchorEvent = (name: string, event: MouseEvent | KeyboardEvent): void => {
  const targetElement = event.currentTarget instanceof HTMLElement ? event.currentTarget : null
  const payload = {
    type: event.type,
    name: targetElement?.getAttribute('name') ?? undefined,
    key: 'key' in event ? event.key : undefined
  }

  onEvent(name, payload)
  eventPayload.value = JSON.stringify(payload)
}

const onGoVisible = (): void => {
  anchorReference.value?.go()
  exposeStatus.value = `Called go() on visible anchor (#target-visible), hash: ${window.location.hash || '(empty)'}`
}

const onGoHidden = (): void => {
  hiddenAnchorReference.value?.go()
  exposeStatus.value = `Called go() on hidden anchor (#target-hidden), hash: ${window.location.hash || '(empty)'}`
}

const onToggleDynamicTarget = async (): Promise<void> => {
  dynamicName.value = dynamicName.value === 'dynamic-target-alpha'
    ? 'dynamic-target-beta'
    : 'dynamic-target-alpha'
  dynamicShift.value = dynamicShift.value === 48 ? 96 : 48
  await nextTick()
  dynamicAnchorReference.value?.go()
  exposeStatus.value = `Updated dynamic target to #${dynamicName.value} (shift=${dynamicShift.value}), hash: ${window.location.hash || '(empty)'}`
}

const onToggleDynamicCopy = (): void => {
  dynamicIsCopy.value = !dynamicIsCopy.value
}

const onToggleDynamicHide = (): void => {
  dynamicHide.value = !dynamicHide.value
}

const onToggleMounted = (): void => {
  isAnchorMounted.value = !isAnchorMounted.value
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Anchor">
    <D1Section>
      <D1Group label="Basic Usage & Slots">
        <div class="demo-anchor-page">
          <D1Anchor
            label="Basic Anchor"
            name="basic"
            label-id="demo-anchor-basic-label"
          />
          <D1Anchor
            label="Numeric Shift (80px)"
            name="numeric-shift"
            :shift="80"
          />
          <D1Anchor
            label="String Shift (48px)"
            name="string-shift"
            shift="48"
          />
          <D1Anchor name="slot-anchor">
            <template #default="slotProps">
              Default Slot Heading Anchor (scoped: {{ slotProps }})
            </template>
          </D1Anchor>
        </div>
      </D1Group>

      <D1Group label="Scroll Behavior & Alignment">
        <div class="demo-anchor-page">
          <D1Anchor
            label="Behavior: auto / Block: start / Inline: start"
            name="scroll-auto-start"
            behavior="auto"
            block="start"
            inline="start"
          />
          <D1Anchor
            label="Behavior: instant / Block: end / Inline: end"
            name="scroll-instant-end"
            behavior="instant"
            block="end"
            inline="end"
          />
          <D1Anchor
            label="Behavior: smooth / Block: center / Inline: center"
            name="scroll-smooth-center"
            behavior="smooth"
            block="center"
            inline="center"
          />
          <D1Anchor
            label="Behavior: smooth / Block: nearest / Inline: nearest"
            name="scroll-smooth-nearest"
            behavior="smooth"
            block="nearest"
            inline="nearest"
          />
        </div>
      </D1Group>

      <D1Group label="Copy Mode, Text & Tooltip Options">
        <div class="demo-anchor-page">
          <D1Anchor
            label="Copy Link Anchor (delayHide: 600)"
            name="copy-anchor"
            is-copy
            :delay-hide="600"
          />
          <D1Anchor
            label="Zero Delay Hide (delayHide: 0)"
            name="copy-zero-delay"
            is-copy
            :delay-hide="0"
          />
          <D1Anchor
            name="copy-icon-only"
            aria-label="Copy permalink to section"
            is-copy
            text-copied-clipboard="Permalink copied!"
          />
          <D1Anchor
            label="Callback Copied Text"
            name="copy-callback-text"
            is-copy
            :text-copied-clipboard="getCopiedClipboardMessage"
          />
          <D1Anchor
            label="Tooltip Label & Description"
            name="copy-tooltip-description"
            is-copy
            tooltip-label="Permalink Copied"
            tooltip-description="Share this section URL with teammates"
            :tooltip-attrs="{ arrowShow: true, inDom: true }"
          />
          <D1Anchor
            label="Custom Tooltip Slot"
            name="copy-custom-tooltip"
            is-copy
            tooltip-label="Copied"
            :tooltip-attrs="{ arrowShow: true }"
          >
            <template #tooltip>
              <span>Link saved to clipboard</span>
            </template>
          </D1Anchor>
        </div>
      </D1Group>

      <D1Group label="Custom Icons (String & Object)">
        <div class="demo-anchor-page">
          <D1Anchor
            label="Custom Link Icon (String)"
            name="custom-link-icon"
            icon-link="bookmark"
          />
          <D1Anchor
            label="Custom Link Icon (Object with turn)"
            name="object-link-icon"
            :icon-link="{ icon: 'link', turn: true }"
          />
          <D1Anchor
            label="Custom Copy Icons (String)"
            name="custom-copy-icons"
            icon-tag="share"
            icon-content-copy="check"
            is-copy
          />
          <D1Anchor
            label="Custom Copy Icons (Object)"
            name="object-copy-icons"
            :icon-tag="{ icon: 'content_paste', turn: true }"
            :icon-content-copy="{ icon: 'done_all', turn: false }"
            is-copy
          />
        </div>
      </D1Group>

      <D1Group label="States, Hidden Anchors & Programmatic Expose">
        <DemoFlex>
          <D1Button label="Go to Visible Target" size="sm" @click="onGoVisible"/>
          <D1Button label="Go to Hidden Target" size="sm" @click="onGoHidden"/>
          <D1Button label="Switch & Go Dynamic" size="sm" outline @click="onToggleDynamicTarget"/>
          <D1Button label="Toggle Dynamic isCopy" size="sm" outline @click="onToggleDynamicCopy"/>
          <D1Button label="Toggle Dynamic hide" size="sm" outline @click="onToggleDynamicHide"/>
        </DemoFlex>
        <DemoBox>
          <div class="demo-anchor-page">
            <D1Anchor
              ref="anchorReference"
              label="Programmatic Target Anchor"
              name="target-visible"
              shift="48"
            />
            <D1Anchor
              ref="hiddenAnchorReference"
              name="target-hidden"
              hide
              :shift="32"
            />
            <D1Anchor
              ref="dynamicAnchorReference"
              :label="`Dynamic Anchor (#${dynamicName})`"
              :name="dynamicName"
              :shift="dynamicShift"
              :is-copy="dynamicIsCopy"
              :hide="dynamicHide"
            />
            <D1Anchor name="implicit-hidden"/>
          </div>
        </DemoBox>
        <DemoValue label="Dynamic State" :value="{ name: dynamicName, shift: dynamicShift, isCopy: dynamicIsCopy, hide: dynamicHide }"/>
        <DemoValue label="Expose Result" :value="exposeStatus"/>
      </D1Group>

      <D1Group label="Events">
        <div class="demo-anchor-page">
          <D1Anchor
            label="Click & Keyboard Event Anchor (isCopy)"
            name="events-copy"
            is-copy
            @click="handleAnchorEvent('click', $event)"
            @keydown="handleAnchorEvent('keydown', $event)"
          />
          <D1Anchor
            label="Navigation Click Event Anchor"
            name="events-nav"
            @click="handleAnchorEvent('click', $event)"
          />
        </div>
        <DemoValue label="Event" :value="eventName"/>
        <DemoValue label="Payload" :value="eventPayload"/>
      </D1Group>

      <D1Group label="Accessibility (A11y)">
        <div class="demo-anchor-page">
          <D1Anchor
            label="Navigation Link (aria-current='page', tabindex=0)"
            name="a11y-nav"
            label-id="demo-anchor-a11y-label"
          />
          <D1Anchor
            name="a11y-copy-button"
            is-copy
            aria-label="Copy accessible section permalink"
          />
          <D1Anchor
            label="Hidden From Visual & AT (aria-hidden='true')"
            name="a11y-hidden"
            hide
          />
        </div>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoBox>
          <div class="demo-anchor-page demo-anchor-page__narrow">
            <D1Anchor label="" name="empty-label"/>
            <D1Anchor label="   " name="whitespace-label"/>
            <D1Anchor :label="0" name="numeric-zero"/>
            <D1Anchor label="Single Char" name="single-char" :shift="-16">
              A
            </D1Anchor>
            <D1Anchor label="Decimal Shift (12.5)" name="decimal-shift" :shift="12.5"/>
          <D1Anchor label="Negative Shift (-16)" name="negative-shift" :shift="-16"/>
            <D1Anchor
              label="Very long multi-sentence anchor label used to verify wrapping and layout stability inside constrained containers without horizontal overflow"
              name="long-text"
            />
            <D1Anchor
              label="SupercalifragilisticexpialidociousUnbrokenAnchorIdentifierWithoutSpaces"
              name="unbroken-text"
            />
            <D1Anchor
              label="Multilingual: Привет / Học tiếng Việt / 🚀 <img src=x onerror=alert(1)>"
              name="unicode-safe"
            />
            <D1Anchor label="Missing Name (Not Rendered)"/>
          </div>
        </DemoBox>
      </D1Group>

      <D1Group label="SSR & Lifecycle (Mount / Unmount)">
        <DemoFlex>
          <D1Button
            :label="isAnchorMounted ? 'Unmount Anchor' : 'Mount Anchor'"
            size="sm"
            @click="onToggleMounted"
          />
          <DemoValue label="Mounted" :value="isAnchorMounted"/>
        </DemoFlex>
        <DemoBox v-if="isAnchorMounted">
          <D1Anchor
            label="Lifecycle Controlled Anchor"
            name="lifecycle-anchor"
            is-copy
          />
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-anchor-page {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  &__narrow {
    max-width: 240px;
  }
}
</style>
