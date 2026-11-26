<script setup lang="ts">
import { computed, ref } from 'vue'
import type { TextLabelExpose } from '@dxtmisha/constructor/TextLabel'
import type { TextLabelProps } from '@dxtmisha/d1/D1TextLabel'
import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

type TextLabelExposeTarget = TextLabelExpose & {
  elementHtml?: HTMLDivElement
}

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const sizeList: NonNullable<TextLabelProps['size']>[] = ['xs', 'sm', 'md', 'lg']
const tagList: string[] = ['div', 'span', 'p', 'h2', 'h3', 'h4', 'label']
const dynamicContentModes: Array<string | number | undefined> = [
  'Dynamic reactive label text',
  0,
  ''
]

const dynamicSizeIndex = ref<number>(2)
const dynamicTagIndex = ref<number>(0)
const dynamicContentIndex = ref<number>(0)
const useCustomLabelId = ref<boolean>(true)
const isLifecycleMounted = ref<boolean>(true)

const labelTarget = ref<TextLabelExposeTarget | null>(null)
const elementInspection = ref<string>('Not inspected')

const currentDynamicSize = computed<NonNullable<TextLabelProps['size']>>(
  () => sizeList[dynamicSizeIndex.value % sizeList.length] ?? 'md'
)
const currentDynamicTag = computed<string>(
  () => tagList[dynamicTagIndex.value % tagList.length] ?? 'div'
)
const currentDynamicContent = computed<string | number | undefined>(
  () => dynamicContentModes[dynamicContentIndex.value % dynamicContentModes.length]
)
const currentDynamicId = computed<string | undefined>(
  () => useCustomLabelId.value ? 'demo-dynamic-label-id' : undefined
)
const dynamicStateSummary = computed(() => ({
  size: currentDynamicSize.value,
  tag: currentDynamicTag.value,
  label: currentDynamicContent.value,
  labelId: currentDynamicId.value ?? 'auto'
}))

const xssPayload = '<img src=x onerror=alert(1)><scr' + 'ipt>alert(1)</scr' + 'ipt>'

const trackEvent = (name: string, payload: unknown): void => {
  onEvent(name, payload)
  eventPayload.value = JSON.stringify(payload)
}

const cycleDynamicSize = (): void => {
  dynamicSizeIndex.value = (dynamicSizeIndex.value + 1) % sizeList.length
}

const cycleDynamicTag = (): void => {
  dynamicTagIndex.value = (dynamicTagIndex.value + 1) % tagList.length
}

const cycleDynamicContent = (): void => {
  dynamicContentIndex.value = (dynamicContentIndex.value + 1) % dynamicContentModes.length
}

const toggleCustomId = (): void => {
  useCustomLabelId.value = !useCustomLabelId.value
}

const inspectElement = (): void => {
  const htmlElement = labelTarget.value?.elementHtml
  elementInspection.value = htmlElement
    ? `${htmlElement.tagName}#${htmlElement.id} (${htmlElement.className})`
    : 'Unavailable'
  trackEvent('inspect', { elementInspection: elementInspection.value })
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="TextLabel" class="demo-text-label-page">
    <D1Section>
      <D1Group label="Basic & Sizes (xs, sm, md, lg)">
        <D1TextLabel
          v-for="sizeName in sizeList"
          :key="sizeName"
          :size="sizeName"
          :label="`Size ${sizeName}: Typography label token showcase`"
        />
        <D1TextLabel :label="100"/>
      </D1Group>

      <D1Group label="Dynamic HTML Tags">
        <D1TextLabel
          v-for="tagName in tagList"
          :key="tagName"
          :tag="tagName"
          size="sm"
          :label="`Rendered inside <${tagName}> element`"
        />
      </D1Group>

      <D1Group label="Slots (default & Combined)">
        <D1TextLabel size="md">
          Rendered exclusively via the <strong>default</strong> slot with <em>rich markup</em>.
        </D1TextLabel>
        <D1TextLabel label="Combined prop prefix — " size="sm">
          <strong>appended default slot content</strong>.
        </D1TextLabel>
      </D1Group>

      <D1Group label="Interactive Controls & Dynamic Props">
        <DemoFlex align="center">
          <D1Button label="Cycle Size" size="sm" outline @click="cycleDynamicSize"/>
          <D1Button label="Cycle Tag" size="sm" outline @click="cycleDynamicTag"/>
          <D1Button label="Cycle Content (Text / 0 / Empty)" size="sm" outline @click="cycleDynamicContent"/>
          <D1Button label="Toggle Custom ID" size="sm" outline @click="toggleCustomId"/>
        </DemoFlex>
        <DemoBox size="sm" data-testid="demo-text-label-dynamic-box">
          <D1TextLabel
            :size="currentDynamicSize"
            :tag="currentDynamicTag"
            :label="currentDynamicContent"
            :label-id="currentDynamicId"
            data-testid="demo-text-label-dynamic"
          />
        </DemoBox>
        <DemoValue label="Dynamic Props" :value="dynamicStateSummary"/>
      </D1Group>

      <D1Group label="External Attrs, Events & Expose (elementHtml)">
        <DemoFlex align="center">
          <D1TextLabel
            ref="labelTarget"
            size="md"
            label="Click this label to emit a click event"
            label-id="demo-text-label-target"
            data-testid="demo-text-label-interactive"
            @click="trackEvent('click', { source: 'demo-text-label-interactive' })"
          />
          <D1Button label="Inspect elementHtml" size="sm" outline @click="inspectElement"/>
        </DemoFlex>
        <DemoValue label="elementHtml" :value="elementInspection"/>
        <DemoValue label="Event Name" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
      </D1Group>

      <D1Group label="Accessibility (labelId, aria-labelledby & Semantic Label)">
        <DemoBox size="sm" role="region" aria-labelledby="a11y-label-heading">
          <D1TextLabel
            label-id="a11y-label-heading"
            tag="h3"
            size="lg"
            label="Notification Preferences"
          />
          <D1TextLabel
            tag="label"
            size="sm"
            for="a11y-label-input"
            label="Contact email label (for=a11y-label-input)"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoBox size="sm" data-testid="demo-text-label-empty-box">
          <D1TextLabel label=""/>
          <D1TextLabel label="   "/>
        </DemoBox>
        <D1TextLabel :label="0" data-testid="demo-text-label-zero"/>
        <D1TextLabel label="A"/>
        <D1TextLabel
          label="Заголовок • Học tiếng Việt • 你好 世界 • 🚀 & <>"
          data-testid="demo-text-label-unicode"
        />
        <D1TextLabel
          :label="xssPayload"
          data-testid="demo-text-label-xss"
        />
        <D1TextLabel
          size="md"
          label="Very long multi-sentence label text designed to verify natural line wrapping, font weight, letter spacing, and vertical rhythm inside a standard layout without clipping or overlapping sibling blocks."
        />
        <DemoBox class="demo-text-label-page__narrow" size="sm">
          <D1TextLabel
            size="sm"
            class="demo-text-label-page__unbroken"
            label="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
          />
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
        <D1TextLabel
          v-if="isLifecycleMounted"
          size="sm"
          label="Mounted TextLabel instance"
          data-testid="demo-text-label-lifecycle"
        />
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-text-label-page {
  &__narrow {
    width: 100%;
    max-width: 240px;
  }

  &__unbroken {
    max-width: 100%;
    overflow-wrap: anywhere;
  }
}
</style>
