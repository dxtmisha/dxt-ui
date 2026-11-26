<script setup lang="ts">
import { computed, ref } from 'vue'
import type { TextDescriptionExpose } from '@dxtmisha/constructor/TextDescription'
import type { TextDescriptionProps } from '@dxtmisha/d1/D1TextDescription'
import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

type TextDescriptionExposeTarget = TextDescriptionExpose & {
  elementHtml?: HTMLDivElement
}

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const sizeList: NonNullable<TextDescriptionProps['size']>[] = ['xs', 'sm', 'md']
const tagList: string[] = ['div', 'p', 'span', 'small', 'figcaption', 'section']
const dynamicContentModes: Array<string | number | undefined> = [
  'Dynamic reactive description text',
  0,
  ''
]

const dynamicSizeIndex = ref<number>(2)
const dynamicTagIndex = ref<number>(0)
const dynamicContentIndex = ref<number>(0)
const useCustomDescriptionId = ref<boolean>(true)
const isLifecycleMounted = ref<boolean>(true)

const descriptionTarget = ref<TextDescriptionExposeTarget | null>(null)
const elementInspection = ref<string>('Not inspected')

const currentDynamicSize = computed<NonNullable<TextDescriptionProps['size']>>(
  () => sizeList[dynamicSizeIndex.value % sizeList.length] ?? 'md'
)
const currentDynamicTag = computed<string>(
  () => tagList[dynamicTagIndex.value % tagList.length] ?? 'div'
)
const currentDynamicContent = computed<string | number | undefined>(
  () => dynamicContentModes[dynamicContentIndex.value % dynamicContentModes.length]
)
const currentDynamicId = computed<string | undefined>(
  () => useCustomDescriptionId.value ? 'demo-dynamic-description-id' : undefined
)
const dynamicStateSummary = computed(() => ({
  size: currentDynamicSize.value,
  tag: currentDynamicTag.value,
  description: currentDynamicContent.value,
  descriptionId: currentDynamicId.value ?? 'auto'
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
  useCustomDescriptionId.value = !useCustomDescriptionId.value
}

const inspectElement = (): void => {
  const htmlElement = descriptionTarget.value?.elementHtml
  elementInspection.value = htmlElement
    ? `${htmlElement.tagName}#${htmlElement.id} (${htmlElement.className})`
    : 'Unavailable'
  trackEvent('inspect', { elementInspection: elementInspection.value })
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="TextDescription" class="demo-text-description-page">
    <D1Section>
      <D1Group label="Basic & Sizes (xs, sm, md)">
        <D1TextDescription
          v-for="sizeName in sizeList"
          :key="sizeName"
          :size="sizeName"
          :description="`Size ${sizeName}: Secondary helper description using typography tokens.`"
        />
        <D1TextDescription :description="42"/>
      </D1Group>

      <D1Group label="Dynamic HTML Tags">
        <D1TextDescription
          v-for="tagName in tagList"
          :key="tagName"
          :tag="tagName"
          size="sm"
          :description="`Rendered inside <${tagName}> element`"
        />
      </D1Group>

      <D1Group label="Slots (description & Combined)">
        <D1TextDescription size="md">
          <template #description>
            Rendered exclusively via the <strong>description</strong> slot with <em>rich markup</em>.
          </template>
        </D1TextDescription>
        <D1TextDescription description="Combined prop prefix — " size="sm">
          <template #description>
            <strong>appended slot content</strong>.
          </template>
        </D1TextDescription>
      </D1Group>

      <D1Group label="Interactive Controls & Dynamic Props">
        <DemoFlex align="center">
          <D1Button label="Cycle Size" size="sm" outline @click="cycleDynamicSize"/>
          <D1Button label="Cycle Tag" size="sm" outline @click="cycleDynamicTag"/>
          <D1Button label="Cycle Content (Text / 0 / Empty)" size="sm" outline @click="cycleDynamicContent"/>
          <D1Button label="Toggle Custom ID" size="sm" outline @click="toggleCustomId"/>
        </DemoFlex>
        <DemoBox size="sm" data-testid="demo-text-description-dynamic-box">
          <D1TextDescription
            :size="currentDynamicSize"
            :tag="currentDynamicTag"
            :description="currentDynamicContent"
            :description-id="currentDynamicId"
            data-testid="demo-text-description-dynamic"
          />
        </DemoBox>
        <DemoValue label="Dynamic Props" :value="dynamicStateSummary"/>
      </D1Group>

      <D1Group label="External Attrs, Events & Expose (elementHtml)">
        <DemoFlex align="center">
          <D1TextDescription
            ref="descriptionTarget"
            size="md"
            description="Click this description to emit a click event"
            description-id="demo-text-description-target"
            data-testid="demo-text-description-interactive"
            @click="trackEvent('click', { source: 'demo-text-description-interactive' })"
          />
          <D1Button label="Inspect elementHtml" size="sm" outline @click="inspectElement"/>
        </DemoFlex>
        <DemoValue label="elementHtml" :value="elementInspection"/>
        <DemoValue label="Event Name" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
      </D1Group>

      <D1Group label="Accessibility (descriptionId, aria-describedby & Live Region)">
        <D1Input
          label="API Token"
          placeholder="Enter token"
          aria-describedby="a11y-description-hint"
        />
        <D1TextDescription
          description-id="a11y-description-hint"
          size="xs"
          tag="p"
          role="note"
          aria-live="polite"
          description="Must contain at least 16 alphanumeric characters. Linked via aria-describedby."
        />
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoBox size="sm" data-testid="demo-text-description-empty-box">
          <D1TextDescription description=""/>
          <D1TextDescription description="   "/>
        </DemoBox>
        <D1TextDescription :description="0" data-testid="demo-text-description-zero"/>
        <D1TextDescription description="A"/>
        <D1TextDescription
          description="Описание • Học tiếng Việt • 你好 世界 • 🚀 & <>"
          data-testid="demo-text-description-unicode"
        />
        <D1TextDescription
          :description="xssPayload"
          data-testid="demo-text-description-xss"
        />
        <D1TextDescription
          size="sm"
          description="Very long multi-sentence description text designed to verify natural line wrapping, line-height balance, surface medium color opacity, and vertical rhythm inside a standard content flow without clipping or overlapping adjacent elements."
        />
        <DemoBox class="demo-text-description-page__narrow" size="sm">
          <D1TextDescription
            size="sm"
            class="demo-text-description-page__unbroken"
            description="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
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
        <D1TextDescription
          v-if="isLifecycleMounted"
          size="sm"
          description="Mounted TextDescription instance"
          data-testid="demo-text-description-lifecycle"
        />
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-text-description-page {
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
