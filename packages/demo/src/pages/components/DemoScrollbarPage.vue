<script setup lang="ts">
import { type ComponentPublicInstance, ref } from 'vue'
import type { ScrollbarEdgeType } from '@dxtmisha/constructor/Scrollbar'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const paragraphs = [
  'In the grand tapestry of the cosmos, our home planet is but a tiny, fragile speck of dust drifting in the vast, silent ocean of space. The observable universe spans an unimaginable ninety-three billion light-years, housing trillions of galaxies, each holding hundreds of billions of stars and countless worlds.',
  'For millennia, humanity gazed up at the night sky, weaving myths and stories about the luminous points of light that moved across the heavens. It was only with the advent of modern astronomy that we began to understand the true nature of these stellar bodies, realizing the immense scale of existence.',
  'Stars are born in deep, dense clouds of interstellar gas and dust known as nebulae. Over millions of years, gravity pulls these materials together, raising pressure and temperature until nuclear fusion ignites in the core, giving birth to a brilliant, glowing star that will shine for billions of years.',
  'As stars reach the end of their lifecycles, they undergo spectacular transformations. A medium star like our Sun will expand into a red giant before shedding its outer layers to leave behind a quiet white dwarf. Massive stars, however, end their lives in colossal supernova explosions, leaving behind incredibly dense neutron stars or black holes.',
  'The exploration of space represents the ultimate boundary of human curiosity. From the earliest telescopes to the Voyager probes traversing interstellar space, our quest to understand the universe continues to reveal new wonders, showing us both the fragility and the uniqueness of our place in the cosmic expanse.'
]

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const interactiveScrollbarRef = ref<ComponentPublicInstance | null>(null)
const scrollPositionLabel = ref<string>('top')

const isDynamicDivider = ref<boolean>(true)
const isDynamicDividerTop = ref<boolean>(false)
const isDynamicDividerBottom = ref<boolean>(false)
const isDynamicDividerHide = ref<boolean>(false)
const isDynamicInverse = ref<boolean>(false)
const isDynamicVisible = ref<boolean>(false)
const isDynamicStandard = ref<boolean>(false)
const isLifecycleMounted = ref<boolean>(true)

const trackEvent = (
  name: string,
  payload: unknown
): void => {
  onEvent(name, payload)
  eventPayload.value = JSON.stringify(payload)
}

const handleTopEvent = (isTop: boolean): void => {
  trackEvent('top', { isTop })
}

const handleBottomEvent = (isBottom: boolean): void => {
  trackEvent('bottom', { isBottom })
}

const handleEdgeEvent = (
  isTop: boolean,
  isBottom: boolean,
  edge: ScrollbarEdgeType
): void => {
  trackEvent('edge', { isTop, isBottom, edge })
}

const getScrollElement = (): HTMLElement | null => {
  const target = interactiveScrollbarRef.value
  if (!target) {
    return null
  }
  return target.$el instanceof HTMLElement ? target.$el : null
}

const scrollToTop = (): void => {
  const element = getScrollElement()
  if (element) {
    element.scrollTop = 0
    scrollPositionLabel.value = 'top (0)'
  }
}

const scrollToMiddle = (): void => {
  const element = getScrollElement()
  if (element) {
    const middle = Math.floor((element.scrollHeight - element.clientHeight) / 2)
    element.scrollTop = middle
    scrollPositionLabel.value = `middle (${middle})`
  }
}

const scrollToBottom = (): void => {
  const element = getScrollElement()
  if (element) {
    element.scrollTop = element.scrollHeight
    scrollPositionLabel.value = `bottom (${element.scrollTop})`
  }
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Scrollbar">
    <D1Section>
      <D1Group label="Basic Usage">
        <D1Scrollbar class="demo-scrollbar-page__scrollbar">
          <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
        </D1Scrollbar>
      </D1Group>

      <D1Group label="Always Visible Content (visible)">
        <D1Scrollbar class="demo-scrollbar-page__scrollbar" visible>
          <p>The visible prop disables overflow clipping and sets height to auto so all content renders without scrolling.</p>
          <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
        </D1Scrollbar>
      </D1Group>

      <D1Group label="Dynamic Dividers (dividerTop & dividerBottom)">
        <D1Scrollbar class="demo-scrollbar-page__scrollbar" divider-top divider-bottom>
          <p>Scroll down to see the top border appear, and scroll to the bottom to see the bottom border disappear.</p>
          <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
        </D1Scrollbar>
      </D1Group>

      <D1Group label="Individual Dividers (dividerTop vs dividerBottom)">
        <DemoFlex>
          <div class="demo-scrollbar-page__column">
            <h4>Top Divider Only</h4>
            <D1Scrollbar class="demo-scrollbar-page__scrollbar" divider-top>
              <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
            </D1Scrollbar>
          </div>
          <div class="demo-scrollbar-page__column">
            <h4>Bottom Divider Only</h4>
            <D1Scrollbar class="demo-scrollbar-page__scrollbar" divider-bottom>
              <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
            </D1Scrollbar>
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Dynamic Dividers (inverse)">
        <D1Scrollbar class="demo-scrollbar-page__scrollbar" divider-top divider-bottom inverse>
          <p>Inverts the boundary logic: shows borders at starting edges and hides them when scrolled inside.</p>
          <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
        </D1Scrollbar>
      </D1Group>

      <D1Group label="Hidden Dividers (dividerHide)">
        <D1Scrollbar class="demo-scrollbar-page__scrollbar" divider divider-hide>
          <p>Suppresses all divider borders completely even though divider monitoring is active.</p>
          <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
        </D1Scrollbar>
      </D1Group>

      <D1Group label="Native Browser Engine (standard)">
        <D1Scrollbar class="demo-scrollbar-page__scrollbar" standard>
          <p>Preserves native browser scrollbar rendering without custom overlay styling.</p>
          <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
        </D1Scrollbar>
      </D1Group>

      <D1Group label="Custom Container Tag (tag)">
        <DemoFlex>
          <div class="demo-scrollbar-page__column">
            <h4>Rendered as &lt;section&gt;</h4>
            <D1Scrollbar class="demo-scrollbar-page__scrollbar" tag="section" divider>
              <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
            </D1Scrollbar>
          </div>
          <div class="demo-scrollbar-page__column">
            <h4>Rendered as &lt;article&gt;</h4>
            <D1Scrollbar class="demo-scrollbar-page__scrollbar" tag="article" divider>
              <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
            </D1Scrollbar>
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Dynamic Prop Toggles">
        <DemoFlex align="center">
          <D1Button :label="isDynamicDivider ? 'divider: ON' : 'divider: OFF'" size="sm" outline @click="isDynamicDivider = !isDynamicDivider"/>
          <D1Button :label="isDynamicDividerTop ? 'dividerTop: ON' : 'dividerTop: OFF'" size="sm" outline @click="isDynamicDividerTop = !isDynamicDividerTop"/>
          <D1Button :label="isDynamicDividerBottom ? 'dividerBottom: ON' : 'dividerBottom: OFF'" size="sm" outline @click="isDynamicDividerBottom = !isDynamicDividerBottom"/>
          <D1Button :label="isDynamicDividerHide ? 'dividerHide: ON' : 'dividerHide: OFF'" size="sm" outline @click="isDynamicDividerHide = !isDynamicDividerHide"/>
          <D1Button :label="isDynamicInverse ? 'inverse: ON' : 'inverse: OFF'" size="sm" outline @click="isDynamicInverse = !isDynamicInverse"/>
          <D1Button :label="isDynamicVisible ? 'visible: ON' : 'visible: OFF'" size="sm" outline @click="isDynamicVisible = !isDynamicVisible"/>
          <D1Button :label="isDynamicStandard ? 'standard: ON' : 'standard: OFF'" size="sm" outline @click="isDynamicStandard = !isDynamicStandard"/>
        </DemoFlex>
        <D1Scrollbar
          class="demo-scrollbar-page__scrollbar"
          :divider="isDynamicDivider"
          :divider-top="isDynamicDividerTop"
          :divider-bottom="isDynamicDividerBottom"
          :divider-hide="isDynamicDividerHide"
          :inverse="isDynamicInverse"
          :visible="isDynamicVisible"
          :standard="isDynamicStandard"
        >
          <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
        </D1Scrollbar>
        <DemoValue
          label="Active Flags"
          :value="{
            divider: isDynamicDivider,
            dividerTop: isDynamicDividerTop,
            dividerBottom: isDynamicDividerBottom,
            dividerHide: isDynamicDividerHide,
            inverse: isDynamicInverse,
            visible: isDynamicVisible,
            standard: isDynamicStandard
          }"
        />
      </D1Group>

      <D1Group label="Interactive Controls & Boundary Events">
        <DemoFlex align="center">
          <D1Button label="Scroll to Top" size="sm" @click="scrollToTop"/>
          <D1Button label="Scroll to Middle" size="sm" outline @click="scrollToMiddle"/>
          <D1Button label="Scroll to Bottom" size="sm" outline @click="scrollToBottom"/>
        </DemoFlex>
        <D1Scrollbar
          ref="interactiveScrollbarRef"
          class="demo-scrollbar-page__scrollbar"
          divider
          @bottom="handleBottomEvent"
          @edge="handleEdgeEvent"
          @leave-bottom="trackEvent('leaveBottom', {})"
          @leave-top="trackEvent('leaveTop', {})"
          @reach-bottom="trackEvent('reachBottom', {})"
          @reach-top="trackEvent('reachTop', {})"
          @top="handleTopEvent"
        >
          <p>Scroll or use the control buttons above to trigger boundary events.</p>
          <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
        </D1Scrollbar>
        <DemoValue label="Scroll Position" :value="scrollPositionLabel"/>
        <DemoValue label="Event Name" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
      </D1Group>

      <D1Group label="Accessibility (Keyboard Scroll Region)">
        <D1Scrollbar
          class="demo-scrollbar-page__scrollbar"
          tag="section"
          tabindex="0"
          role="region"
          aria-label="Scrollable release notes"
          divider
        >
          <p>Focus this scrollable region with Tab and use ArrowDown, ArrowUp, PageDown, or PageUp keys.</p>
          <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
        </D1Scrollbar>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoFlex>
          <div class="demo-scrollbar-page__column">
            <h4>Empty Content</h4>
            <D1Scrollbar class="demo-scrollbar-page__scrollbar" divider/>
          </div>
          <div class="demo-scrollbar-page__column">
            <h4>Short Content (No Overflow)</h4>
            <D1Scrollbar class="demo-scrollbar-page__scrollbar" divider>
              <p>Single short line without vertical overflow.</p>
            </D1Scrollbar>
          </div>
        </DemoFlex>
        <DemoBox class="demo-scrollbar-page__narrow" size="sm">
          <D1Scrollbar class="demo-scrollbar-page__scrollbar" divider>
            <p>0</p>
            <p>Tiếng Việt / Кириллица / 🚀 &amp; &lt;&gt;</p>
            <p>&lt;img src=x onerror=alert(1)&gt;</p>
            <p class="demo-scrollbar-page__unbroken">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
            <p v-for="(paragraph, index) in paragraphs" :key="`narrow-${index}`">{{ paragraph }}</p>
          </D1Scrollbar>
        </DemoBox>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount">
        <DemoFlex align="center">
          <D1Button
            label="Toggle Mount"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
        </DemoFlex>
        <D1Scrollbar
          v-if="isLifecycleMounted"
          class="demo-scrollbar-page__scrollbar"
          divider
        >
          <p v-for="(paragraph, index) in paragraphs" :key="`mounted-${index}`">{{ paragraph }}</p>
        </D1Scrollbar>
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-scrollbar-page {
  &__scrollbar {
    height: 160px;
  }

  &__column {
    flex: 1;
    min-width: 0;

    h4 {
      margin-top: 0;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 600;
    }
  }

  &__narrow {
    width: 100%;
    max-width: 240px;
  }

  &__unbroken {
    overflow-wrap: anywhere;
  }
}
</style>
