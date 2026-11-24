<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const isSelected = ref<boolean>(false)
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="CollageBar">
    <D1Section>
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
              data-testid="demo-collage-bar-zero"
              :label="0"
              :description="0"
              :button="0"
            />
          </DemoBox>
        </div>
      </D1Group>

      <D1Group label="Positions (static, top, bottom)">
        <div class="demo-collage-bar-page__positions" data-testid="demo-collage-bar-positions">
          <DemoBox>
            <D1CollageBar
              data-testid="demo-collage-bar-pos-static"
              position="static"
              label="Static Position"
              description="Rendered in normal document flow."
              button="Action"
            />
          </DemoBox>
          <div class="demo-collage-bar-page__stage">
            <D1CollageBar
              data-testid="demo-collage-bar-pos-top"
              position="top"
              label="Top Overlay Bar"
              description="Anchored to the top of its relative container."
              button="Top"
            />
          </div>
          <div class="demo-collage-bar-page__stage">
            <D1CollageBar
              data-testid="demo-collage-bar-pos-bottom"
              position="bottom"
              label="Bottom Overlay Bar"
              description="Anchored to the bottom of its relative container."
              button="Bottom"
            />
          </div>
        </div>
      </D1Group>

      <D1Group label="States & Semantic Tags">
        <DemoFlex>
          <D1Button
            data-testid="demo-collage-bar-toggle-selected"
            size="sm"
            outline
            label="Toggle Selected"
            @click="isSelected = !isSelected"
          />
        </DemoFlex>
        <div class="demo-collage-bar-page__stack" data-testid="demo-collage-bar-states">
          <DemoBox>
            <D1CollageBar
              data-testid="demo-collage-bar-selected"
              label="Selectable Bar"
              description="Toggles the selected modifier state."
              :selected="isSelected"
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
        </div>
      </D1Group>

      <D1Group label="Slots">
        <div class="demo-collage-bar-page__stack" data-testid="demo-collage-bar-slots">
          <DemoBox>
            <D1CollageBar data-testid="demo-collage-bar-slot-named">
              <template #default>Custom Default Label Slot</template>
              <template #description>Custom Description Slot Content</template>
              <template #trailing>
                <D1Badge label="NEW" overlap="static" />
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

      <D1Group label="Boundaries & Clamping">
        <div class="demo-collage-bar-page__stack" data-testid="demo-collage-bar-boundaries">
          <DemoBox>
            <D1CollageBar
              data-testid="demo-collage-bar-unicode"
              label="Tiếng Việt / Кириллица / 🚀"
              description="Multilingual text with Vietnamese diacritics, Cyrillic, and emoji."
              button="OK"
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

      <D1Group label="Events">
        <div class="demo-collage-bar-page__stack">
          <DemoBox>
            <D1CollageBar
              data-testid="demo-collage-bar-event-target"
              label="Event Tracker"
              description="Click the action button to emit click and clickLite events."
              button="Trigger Event"
              value="bar-item-1"
              @click="(event, value) => onEvent('click', event, value)"
              @click-lite="(value) => onEvent('clickLite', value)"
            />
          </DemoBox>
          <DemoBox>
            <D1CollageBar
              data-testid="demo-collage-bar-event-zero"
              label="Zero Value Tracker"
              button="Trigger Zero"
              :value="0"
              @click-lite="(value) => onEvent('clickLite', value)"
            />
          </DemoBox>
        </div>
        <DemoValue data-testid="demo-collage-bar-event-output" :value="eventName" />
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
    min-height: 140px;
    border: 1px dashed currentColor;
    border-radius: 8px;
    overflow: hidden;
  }
}
</style>
