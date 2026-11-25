<script setup lang="ts">
import { nextTick, ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { CellExpose } from '@dxtmisha/constructor/Cell'
import type { CellProps } from '@dxtmisha/d1/D1Cell'
import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const paddingModes: NonNullable<CellProps['padding']>[] = [
  'sm',
  'md',
  'lg',
  'ySm',
  'yMd',
  'yLg',
  'none'
]

const adaptiveDividerLabels: NonNullable<CellProps['dividerLabel']>[] = [
  'adaptiveSm',
  'adaptiveMd',
  'adaptiveLg',
  'adaptiveXl',
  'adaptive2xl'
]

const containerDividerLabels: NonNullable<CellProps['dividerLabel']>[] = [
  'containerSm',
  'containerMd',
  'containerLg',
  'containerXl',
  'container2xl'
]

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const cellReference = ref<CellExpose | null>(null)
const exposeOutput = ref<string>('Click an expose action button')
const dynamicValue = ref<string>('my-cell-value')
const dynamicDetail = ref<Record<string, string | number>>({ category: 'demo', step: 1 })

const isDynamicActive = ref<boolean>(true)
const isDynamicSelected = ref<boolean>(false)
const isDynamicDisabled = ref<boolean>(false)
const isDynamicReadonly = ref<boolean>(false)
const isDynamicLoading = ref<boolean>(false)
const isDynamicSkeleton = ref<boolean>(true)
const isLifecycleMounted = ref<boolean>(true)
const isIconTurned = ref<boolean>(false)

const blockedClickCount = ref<number>(0)

const trackEvent = (
  name: string,
  payload: unknown
): void => {
  onEvent(name, payload)
  eventPayload.value = JSON.stringify(payload)
}

const handleClickEvent = (
  mouseEvent: MouseEvent,
  clickValue: EventClickValue
): void => {
  trackEvent('click', {
    eventType: mouseEvent.type,
    value: clickValue
  })
}

const handleClickLiteEvent = (clickValue: EventClickValue): void => {
  trackEvent('clickLite', clickValue)
}

const handleBlockedClick = (): void => {
  blockedClickCount.value += 1
}

const readExposeValue = async (): Promise<void> => {
  await nextTick()
  const value = cellReference.value?.getValue?.()
  exposeOutput.value = `getValue(): ${JSON.stringify(value)}`
}

const readExposeDetail = async (): Promise<void> => {
  await nextTick()
  const detail = cellReference.value?.getDetail?.()
  exposeOutput.value = `getDetail(): ${JSON.stringify(detail)}`
}

const switchDynamicPayload = async (): Promise<void> => {
  dynamicValue.value = dynamicValue.value === 'my-cell-value' ? 'updated-cell-value' : 'my-cell-value'
  dynamicDetail.value = {
    category: 'demo',
    step: dynamicValue.value === 'my-cell-value' ? 1 : 2
  }
  await nextTick()
  const value = cellReference.value?.getValue?.()
  const detail = cellReference.value?.getDetail?.()
  exposeOutput.value = `getValue(): ${JSON.stringify(value)}, getDetail(): ${JSON.stringify(detail)}`
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Cell">
    <D1Section>
      <D1Group label="Basic & Data Formats">
        <D1Cell
          label="Default Cell"
          description="Standard cell description goes here"
          caption="Cell Caption"
        />
        <D1Cell
          label="Only Label"
        />
        <D1Cell
          label="Label with Caption"
          caption="Top caption information"
        />
        <D1Cell
          label="Decorative Caption"
          description="Caption marked as decorative with aria-hidden"
          caption="Decorative"
          caption-decorative
        />
        <D1Cell
          label="Label with Description"
          description="Detailed multi-line description of the item"
        />
        <D1Cell
          :label="2048"
          :caption="42"
          :description="100000"
        />
      </D1Group>

      <D1Group label="Tags & Links">
        <D1Cell
          label="Cell with Section Tag"
          description="Rendered as a semantic section tag"
          tag="section"
        />
        <D1Cell
          label="Cell with Button Tag"
          description="Rendered as a native button element"
          tag="button"
          type="button"
        />
        <D1Cell
          label="Cell as Anchor Link"
          description="Rendered as an anchor element with href target"
          href="#demo-link"
        />
        <D1Cell
          label="Cell with Router String"
          description="Navigates via Vue Router string target"
          to="/component-cell"
        />
        <D1Cell
          label="Cell with Router Object"
          description="Navigates via Vue Router named route object"
          :to="{ name: 'home' }"
        />
      </D1Group>

      <D1Group label="States & Dynamic">
        <D1Cell
          label="Focus State"
          description="Visual indicator of active focus"
          focus
        />
        <D1Cell
          label="Selected State"
          description="Visual indicator of selected item"
          selected
        />
        <D1Cell
          label="Readonly State"
          description="Readonly state with disabled actions"
          readonly
        />
        <D1Cell
          label="Disabled State"
          description="Interaction is completely disabled"
          disabled
        />
        <D1Cell
          label="Disabled and Selected"
          description="Disabled interaction with selected appearance"
          disabled
          selected
        />
        <D1Cell
          label="Dynamic Only"
          description="Keyboard accessible with tabindex and button role"
          dynamic
        />
        <D1Cell
          label="Dynamic with Hover"
          description="Hover effects and active gradient styling enabled"
          dynamic
          dynamic-hover
        />
      </D1Group>

      <D1Group label="Interactive State Toggles">
        <D1Skeleton :active="isDynamicSkeleton">
          <D1Cell
            label="Controlled Interactive Cell"
            description="Toggle dynamic, selected, disabled, readonly, loading, and skeleton states"
            caption="Status"
            icon="tune"
            :dynamic="isDynamicActive"
            :dynamic-hover="isDynamicActive"
            :selected="isDynamicSelected"
            :disabled="isDynamicDisabled"
            :readonly="isDynamicReadonly"
            :loading="isDynamicLoading"
            :is-skeleton="isDynamicSkeleton"
          />
        </D1Skeleton>
        <DemoFlex align="center">
          <D1Button
            label="Toggle Dynamic"
            size="sm"
            outline
            @click="isDynamicActive = !isDynamicActive"
          />
          <D1Button
            label="Toggle Selected"
            size="sm"
            outline
            @click="isDynamicSelected = !isDynamicSelected"
          />
          <D1Button
            label="Toggle Disabled"
            size="sm"
            outline
            @click="isDynamicDisabled = !isDynamicDisabled"
          />
          <D1Button
            label="Toggle Readonly"
            size="sm"
            outline
            @click="isDynamicReadonly = !isDynamicReadonly"
          />
          <D1Button
            label="Toggle Loading"
            size="sm"
            outline
            @click="isDynamicLoading = !isDynamicLoading"
          />
          <D1Button
            label="Toggle Skeleton"
            size="sm"
            outline
            @click="isDynamicSkeleton = !isDynamicSkeleton"
          />
        </DemoFlex>
        <DemoValue
          label="State Flags"
          :value="{
            isDynamicActive,
            isDynamicSelected,
            isDynamicDisabled,
            isDynamicReadonly,
            isDynamicLoading,
            isDynamicSkeleton
          }"
        />
      </D1Group>

      <D1Group label="Blocked & Guarded Actions">
        <D1Cell
          label="Blocked Disabled Cell"
          description="Clicks and keyboard activations are prevented while disabled"
          dynamic
          disabled
          @click="handleBlockedClick"
          @click-lite="handleBlockedClick"
        />
        <D1Cell
          label="Blocked Readonly Cell"
          description="Clicks are prevented while readonly"
          dynamic
          readonly
          @click="handleBlockedClick"
          @click-lite="handleBlockedClick"
        />
        <D1Cell
          label="Blocked Loading Cell"
          description="Clicks are prevented while loading"
          dynamic
          loading
          @click="handleBlockedClick"
          @click-lite="handleBlockedClick"
        />
        <DemoValue label="Blocked Click Count" :value="blockedClickCount"/>
      </D1Group>

      <D1Group label="Loading & Skeleton">
        <D1Cell
          label="Loading State"
          description="Displays an active bottom progress bar"
          loading
        />
        <D1Cell
          label="Custom Progress Value"
          description="Configured with explicit progress percentage"
          :loading="{ visible: true, value: 65, max: 100 }"
        />
        <D1Cell
          label="Skeleton Mode Outside Wrapper"
          description="Placeholder skeleton classes without active wrapper"
          is-skeleton
        />
        <D1Skeleton :active="true">
          <D1Cell
            label="Skeleton Mode inside D1Skeleton"
            description="Active skeleton wrapper with isSkeleton enabled"
            caption="Loading"
            is-skeleton
          />
        </D1Skeleton>
        <D1Cell
          label="Loading and Disabled"
          description="Asynchronous operation in disabled state"
          loading
          disabled
        />
      </D1Group>

      <D1Group label="Icons & Modifiers">
        <D1Cell
          label="Start Icon String"
          description="Leading icon specified as a material symbol name"
          icon="home"
        />
        <D1Cell
          label="Start Icon Object"
          description="Leading icon specified with IconProps object"
          :icon="{ icon: 'person', size: 'sm' }"
        />
        <D1Cell
          label="Trailing Icon String"
          description="Trailing icon specified as a material symbol name"
          icon-trailing="chevron_right"
        />
        <D1Cell
          label="Trailing Icon Object"
          description="Trailing icon specified with IconProps object"
          :icon-trailing="{ icon: 'arrow_forward' }"
        />
        <D1Cell
          label="Leading and Trailing Icons"
          description="Both start and trailing accessories displayed simultaneously"
          icon="folder"
          icon-trailing="open_in_new"
        />
        <D1Cell
          label="Icon Turn Toggle"
          description="Click to rotate trailing icon using iconTurn"
          dynamic
          icon="settings"
          icon-trailing="expand_more"
          :icon-turn="isIconTurned"
          icon-trailing-turn-only
          @click="isIconTurned = !isIconTurned"
        />
        <D1Cell
          label="Icon Dir & Trailing Palette"
          description="Directional mirroring and palette styling on icons"
          icon="arrow_forward"
          icon-dir
          icon-trailing="star"
          icon-trailing-dir-only
          icon-trailing-palette
          :icon-attrs="{ size: 'sm' }"
        />
        <D1Cell
          label="Icon Hidden"
          description="Main icon suppressed via iconHide"
          icon="visibility"
          icon-hide
          icon-palette
        />
        <D1Cell
          label="Top Aligned Icon"
          description="Start icon aligned to the top row rather than vertically centered when description is tall"
          icon="info"
          icon-top
        />
      </D1Group>

      <D1Group label="Dividers & Divider Labels (All 12)">
        <D1Cell
          label="Default Divider"
          description="Bottom border divider active by default"
          divider
        />
        <D1Cell
          label="Disabled Divider"
          description="Bottom border divider turned off"
          :divider="false"
        />
        <D1Cell
          label="Divider Label Always"
          description="Divider positioned directly below the label context container"
          divider-label="always"
        />
        <D1Cell
          label="Divider Label None"
          description="Context divider explicitly turned off"
          divider-label="none"
        />
        <D1Cell
          v-for="dividerMode in adaptiveDividerLabels"
          :key="dividerMode"
          :label="`Divider Label ${dividerMode}`"
          description="Adaptive breakpoint divider below context"
          :divider-label="dividerMode"
        />
        <DemoBox
          v-for="dividerMode in containerDividerLabels"
          :key="dividerMode"
          container
        >
          <D1Cell
            :label="`Container Divider ${dividerMode}`"
            description="Container-query divider below context"
            :divider-label="dividerMode"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Padding & Indent (All 7)">
        <D1Cell
          v-for="paddingMode in paddingModes"
          :key="paddingMode"
          :label="`Padding ${paddingMode}`"
          :description="`Cell padding variant '${paddingMode}'`"
          :padding="paddingMode"
        />
        <D1Cell
          label="Padding by Indent Disabled"
          description="Layout indent padding turned off"
          :padding-by-indent="false"
        />
      </D1Group>

      <D1Group label="Slots & Scoped Bindings">
        <D1Cell>
          <template #caption>
            <span>Custom Caption Slot</span>
          </template>
          <template #default>
            <strong>Custom Bold Label Slot</strong>
          </template>
          <template #description>
            <span>Custom Description Slot with extended formatted text</span>
          </template>
        </D1Cell>
        <D1Cell
          label="Cell with Scoped Trailing Slot"
          description="Accessory component and scoped class binding in #trailing"
        >
          <template #trailing="slotBindings">
            <span :class="slotBindings.trailing">
              <D1Chip label="Active" size="sm"/>
            </span>
          </template>
        </D1Cell>
        <D1Cell
          label="Cell with Scoped Body Slot"
          description="Includes an expandable full-width body row with scoped class bindings"
        >
          <template #body="slotBindings">
            <p :class="slotBindings.description">
              Extended body section rendered below the main cell row (label class: {{ slotBindings.label }}).
            </p>
          </template>
        </D1Cell>
      </D1Group>

      <D1Group label="ARIA & Roles">
        <D1Cell
          label="Custom Label & Description IDs"
          description="Explicit labelId and descriptionId attributes for assistive technologies"
          label-id="demo-cell-custom-label"
          description-id="demo-cell-custom-description"
          aria-labelledby="demo-cell-custom-label"
          aria-describedby="demo-cell-custom-description"
          dynamic
        />
        <D1Cell
          label="Role List Item"
          description="Explicit ARIA role set to listitem"
          role="listitem"
        />
        <D1Cell
          label="Role Menu Item"
          description="Explicit ARIA role set to menuitem"
          role="menuitem"
          dynamic
        />
        <D1Cell
          label="Role Option"
          description="Explicit ARIA role set to option"
          role="option"
          dynamic
        />
      </D1Group>

      <D1Group label="Events & Expose Methods">
        <D1Cell
          ref="cellReference"
          label="Interactive Cell"
          description="Click or press Enter to trigger events and inspect exposed controller methods"
          dynamic
          dynamic-hover
          :value="dynamicValue"
          :detail="dynamicDetail"
          @click="handleClickEvent"
          @click-lite="handleClickLiteEvent"
        />
        <D1Cell
          label="Index Fallback Cell"
          description="Uses index prop as fallback when value is omitted"
          dynamic
          :index="7"
          @click-lite="handleClickLiteEvent"
        />
        <DemoFlex align="center">
          <D1Button label="Read getValue()" size="sm" outline @click="readExposeValue"/>
          <D1Button label="Read getDetail()" size="sm" outline @click="readExposeDetail"/>
          <D1Button label="Switch Value & Detail" size="sm" outline @click="switchDynamicPayload"/>
        </DemoFlex>
        <DemoValue label="Event Name" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
        <DemoValue label="Expose Output" :value="exposeOutput"/>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <D1Cell label="" description="" caption=""/>
        <D1Cell label="   " description="   " caption="   "/>
        <D1Cell/>
        <D1Cell :label="0" :caption="0" :description="0" :value="0"/>
        <D1Cell :label="-42" :caption="-1" :description="-3.14" :value="-42"/>
        <D1Cell :label="3.14" :caption="0.5" :description="99.99" :value="3.14"/>
        <D1Cell label="A" caption="B" description="C"/>
        <D1Cell
          label="Tiếng Việt / Кириллица / 🚀 & <>"
          caption="Unicode"
          description="Multilingual diacritics, Cyrillic characters, and emojis rendered safely"
        />
        <D1Cell
          label="<img src=x onerror=alert(1)>"
          description="<script>alert('xss')</script>"
          caption="Escaped"
        />
        <D1Cell
          label="Very long multi-sentence cell title designed to verify wrapping behavior and vertical alignment across desktop and mobile containers"
          description="Very long multi-sentence cell description verifying that text wraps cleanly without overlapping trailing icons or breaking container boundaries"
          icon="article"
          icon-trailing="chevron_right"
        />
        <DemoBox class="demo-cell-page__narrow" size="sm">
          <D1Cell
            label="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
            description="BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            icon="info"
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
        <D1Cell
          v-if="isLifecycleMounted"
          label="Mounted Cell"
          description="Toggled via v-if conditional rendering"
          icon="check_circle"
          dynamic
        />
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-cell-page {
  &__narrow {
    width: 100%;
    max-width: 220px;
  }
}
</style>
