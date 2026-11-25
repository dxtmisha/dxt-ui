<script setup lang="ts">
import { ref } from 'vue'
import type { ConstrExpose } from '@dxtmisha/functional'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { CollageBarExpose } from '@dxtmisha/constructor/CollageBar'
import type { CollageBarProps } from '@dxtmisha/d1/D1CollageBar'
import { image1 } from '@dxtmisha/wiki/media'

import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const positions: readonly NonNullable<CollageBarProps['position']>[] = [
  'static',
  'top',
  'bottom'
]

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events emitted yet')

const isPositionSelected = ref<boolean>(false)
const isSelected = ref<boolean>(false)
const isBarMounted = ref<boolean>(true)

const collageBarReference = ref<ConstrExpose<HTMLElement, CollageBarExpose>>()
const exposeSummary = ref<string>('Click button to inspect expose API')

const handleClickEvent = (
  event: MouseEvent,
  payload: EventClickValue
): void => {
  onEvent('click', event, payload)
  eventPayload.value = JSON.stringify(payload)
}

const handleClickLiteEvent = (payload: EventClickValue): void => {
  onEvent('clickLite', payload)
  eventPayload.value = JSON.stringify(payload)
}

const inspectExpose = (): void => {
  const resolvedValue = collageBarReference.value?.getValue?.()
  const resolvedDetail = collageBarReference.value?.getDetail?.()
  const element = collageBarReference.value?.elementHtml
  const tagName = element instanceof HTMLElement ? element.tagName.toLowerCase() : 'undefined'

  exposeSummary.value = `value=${String(resolvedValue)}, detail=${JSON.stringify(resolvedDetail)}, tag=${tagName}`
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="CollageBar">
    <D1Section class="demo-collage-bar-page">
      <D1Group label="Basic & Content Formats">
        <div class="demo-collage-bar-page__stack" data-testid="demo-collage-bar-basic">
          <DemoBox>
            <D1CollageBar
              data-testid="demo-collage-bar-label-only"
              label="Sunset over Ha Long Bay"
            />
          </DemoBox>
          <DemoBox>
            <D1CollageBar
              data-testid="demo-collage-bar-label-desc"
              label="Mountain Panorama"
              description="Captured at golden hour with a 35mm wide-angle lens."
            />
          </DemoBox>
          <DemoBox>
            <D1CollageBar
              data-testid="demo-collage-bar-button-string"
              label="City Lights"
              description="String button prop with trailing icon."
              button="View"
              icon="arrow_forward"
            />
          </DemoBox>
          <DemoBox>
            <D1CollageBar
              data-testid="demo-collage-bar-button-object"
              label="Gallery Album"
              description="Object button prop merged with buttonAttrs."
              :button="{ label: 'Open Album', outline: true }"
              :button-attrs="{ size: 'sm' }"
            />
          </DemoBox>
          <DemoBox>
            <D1CollageBar
              data-testid="demo-collage-bar-icon-object"
              label="Icon Object Configuration"
              description="Uses icon object { icon, iconActive } with selected state."
              :icon="{ icon: 'star', iconActive: 'favorite' }"
              :selected="isSelected"
            />
          </DemoBox>
          <DemoBox>
            <D1CollageBar
              data-testid="demo-collage-bar-zero"
              :label="0"
              :description="0"
              :button="0"
            />
          </DemoBox>
        </div>
      </D1Group>

      <D1Group label="Positions (static, top, bottom)">
        <DemoFlex>
          <D1Button
            data-testid="demo-collage-bar-toggle-pos-selected"
            size="sm"
            outline
            :label="isPositionSelected ? 'Disable Overlay Selected' : 'Enable Overlay Selected'"
            @click="isPositionSelected = !isPositionSelected"
          />
          <DemoValue label="Position Selected" :value="isPositionSelected"/>
        </DemoFlex>
        <div class="demo-collage-bar-page__positions" data-testid="demo-collage-bar-positions">
          <div
            v-for="position in positions"
            :key="position"
            class="demo-collage-bar-page__stage"
          >
            <D1Image
              v-if="position !== 'static'"
              class="demo-collage-bar-page__stage-image"
              :value="image1"
              size="cover"
              alt="Stage backdrop"
            />
            <D1CollageBar
              :data-testid="`demo-collage-bar-pos-${position}`"
              :position="position"
              :selected="position !== 'static' && isPositionSelected"
              :label="`Position: ${position}`"
              :description="position === 'static' ? 'Rendered in normal document flow.' : `Anchored to ${position} edge with backdrop blur.`"
              :button="position"
            />
          </div>
        </div>
      </D1Group>

      <D1Group label="States, Navigation & Semantic Tags">
        <DemoFlex>
          <D1Button
            data-testid="demo-collage-bar-toggle-selected"
            size="sm"
            outline
            label="Toggle Selected"
            @click="isSelected = !isSelected"
          />
          <DemoValue label="Selected" :value="isSelected"/>
        </DemoFlex>
        <div class="demo-collage-bar-page__stack" data-testid="demo-collage-bar-states">
          <DemoBox>
            <D1CollageBar
              data-testid="demo-collage-bar-selected"
              label="Selectable Bar"
              description="Toggles the selected modifier state and active icon."
              :selected="isSelected"
              :icon="{ icon: 'star', iconActive: 'favorite' }"
              button="Select"
              @click="isSelected = !isSelected"
            />
          </DemoBox>
          <DemoBox>
            <D1CollageBar
              data-testid="demo-collage-bar-tag-div"
              tag="div"
              label="Custom Div Tag"
              description="Uses tag='div' instead of default figcaption."
            />
          </DemoBox>
          <DemoBox>
            <D1CollageBar
              data-testid="demo-collage-bar-href"
              label="Link Action Bar"
              description="Button navigates via href prop."
              button="Visit Section"
              href="#collage-bar-link"
            />
          </DemoBox>
          <DemoBox>
            <D1CollageBar
              data-testid="demo-collage-bar-to"
              label="Router Navigation Bar"
              description="Button navigates via Vue Router 'to' prop."
              button="Stay Here"
              :to="{ name: 'component-collage-bar' }"
            />
          </DemoBox>
        </div>
      </D1Group>

      <D1Group label="Slots">
        <div class="demo-collage-bar-page__stack" data-testid="demo-collage-bar-slots">
          <DemoBox>
            <D1CollageBar data-testid="demo-collage-bar-slot-named">
              <template #default>Custom Default Label Slot</template>
              <template #description>Custom Description Slot Content</template>
              <template #trailing>
                <D1Badge label="NEW" overlap="static"/>
              </template>
            </D1CollageBar>
          </DemoBox>
          <DemoBox>
            <D1CollageBar data-testid="demo-collage-bar-slot-body">
              <template #body>
                <div>Custom Body Slot Replacing Context</div>
              </template>
            </D1CollageBar>
          </DemoBox>
        </div>
      </D1Group>

      <D1Group label="Events & Expose">
        <DemoFlex>
          <D1Button
            data-testid="demo-collage-bar-inspect"
            size="sm"
            outline
            label="Inspect Expose"
            @click="inspectExpose"
          />
        </DemoFlex>
        <div class="demo-collage-bar-page__stack">
          <DemoBox>
            <D1CollageBar
              ref="collageBarReference"
              data-testid="demo-collage-bar-event-target"
              label="Event & Expose Tracker"
              description="Click the action button to emit click and clickLite with value and detail."
              button="Trigger Event"
              value="bar-item-1"
              :detail="{ albumId: 42, source: 'demo' }"
              @click="handleClickEvent"
              @click-lite="handleClickLiteEvent"
            />
          </DemoBox>
          <DemoBox>
            <D1CollageBar
              data-testid="demo-collage-bar-event-zero"
              label="Zero Value Tracker"
              button="Trigger Zero"
              :value="0"
              index="fallback-index"
              @click-lite="handleClickLiteEvent"
            />
          </DemoBox>
          <DemoBox>
            <D1CollageBar
              data-testid="demo-collage-bar-event-index"
              label="Index Fallback Tracker"
              button="Trigger Index"
              index="bar-index-99"
              @click-lite="handleClickLiteEvent"
            />
          </DemoBox>
        </div>
        <DemoValue data-testid="demo-collage-bar-event-output" label="Last Event" :value="eventName"/>
        <DemoValue data-testid="demo-collage-bar-event-payload" label="Event Payload" :value="eventPayload"/>
        <DemoValue data-testid="demo-collage-bar-expose-output" label="Expose Result" :value="exposeSummary"/>
      </D1Group>

      <D1Group label="Accessibility (A11y)">
        <DemoBox>
          <figure class="demo-collage-bar-page__figure">
            <D1CollageBar
              data-testid="demo-collage-bar-a11y"
              label="Accessible Gallery Caption"
              label-id="demo-collage-bar-a11y-label"
              description="Associated via labelId, descriptionId, and descriptive button aria-label."
              description-id="demo-collage-bar-a11y-desc"
              button="Details"
              aria-labelledby="demo-collage-bar-a11y-label"
              aria-describedby="demo-collage-bar-a11y-desc"
              :button-attrs="{ 'aria-label': 'Open Accessible Gallery Caption details' }"
            />
          </figure>
        </DemoBox>
      </D1Group>

      <D1Group label="Boundaries & Edge Cases">
        <div class="demo-collage-bar-page__stack" data-testid="demo-collage-bar-boundaries">
          <DemoBox>
            <D1CollageBar
              data-testid="demo-collage-bar-empty"
              label=""
              description=""
            />
          </DemoBox>
          <DemoBox>
            <D1CollageBar
              data-testid="demo-collage-bar-whitespace"
              label="   "
              description="   "
            />
          </DemoBox>
          <DemoBox>
            <D1CollageBar
              data-testid="demo-collage-bar-numbers"
              :label="-5"
              :description="12.5"
              :button="-1"
            />
          </DemoBox>
          <DemoBox>
            <D1CollageBar
              data-testid="demo-collage-bar-unicode"
              label="Tiếng Việt / Кириллица / 🚀"
              description="Multilingual text with Vietnamese diacritics, Cyrillic, and emoji."
              button="OK"
            />
          </DemoBox>
          <DemoBox class="demo-collage-bar-page__narrow">
            <D1CollageBar
              data-testid="demo-collage-bar-unbroken"
              label="SupercalifragilisticexpialidociousCollageBarUnbrokenTitleToken1234567890"
              description="UnbrokenDescriptionTokenWithoutSpacesABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
              button="Open"
            />
          </DemoBox>
          <DemoBox>
            <D1CollageBar
              data-testid="demo-collage-bar-clamp"
              label="Extremely long collage bar title that spans across multiple lines to verify two-line clamping behavior inside narrow and standard containers without breaking layout alignment"
              description="Very detailed multi-sentence description designed to verify three-line clamping in CollageBar when descriptions exceed standard preview bounds across desktop, tablet, and mobile viewports. Additional text ensures ellipsis truncation activates reliably."
              button="More"
            />
          </DemoBox>
          <DemoBox>
            <D1CollageBar
              data-testid="demo-collage-bar-xss"
              label="<img src=x onerror=alert(1)>"
              description="<script>alert('xss')</script>"
            />
          </DemoBox>
        </div>
      </D1Group>

      <D1Group label="SSR & Lifecycle (Mount / Unmount)">
        <DemoFlex align="center">
          <D1Button
            data-testid="demo-collage-bar-lifecycle-toggle"
            size="sm"
            outline
            :label="isBarMounted ? 'Unmount CollageBar' : 'Mount CollageBar'"
            @click="isBarMounted = !isBarMounted"
          />
          <DemoValue label="Mounted" :value="isBarMounted"/>
        </DemoFlex>
        <DemoBox v-if="isBarMounted">
          <D1CollageBar
            data-testid="demo-collage-bar-lifecycle"
            label="Lifecycle Mounted Bar"
            description="Toggled via v-if mount/unmount control."
            button="Active"
          />
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-collage-bar-page {
  &__stack {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__positions {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__stage {
    position: relative;
    min-height: 160px;
    border: 1px dashed currentColor;
    border-radius: 8px;
    overflow: hidden;
  }

  &__stage-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  &__figure {
    margin: 0;
  }

  &__narrow {
    max-width: 240px;
    width: 100%;
    overflow: hidden;
    overflow-wrap: anywhere;
  }
}
</style>
