<script setup lang="ts">
import { nextTick, ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { ChipExpose } from '@dxtmisha/constructor/Chip'
import type { ChipProps } from '@dxtmisha/d1/D1Chip'
import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const sizeList: NonNullable<ChipProps['size']>[] = ['xs', 'sm', 'md', 'lg']
const textAlignList: NonNullable<ChipProps['textAlign']>[] = ['left', 'center', 'right']

const paletteList: NonNullable<ChipProps['palette']>[] = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'black',
  'white'
]

const adaptiveModes: NonNullable<ChipProps['adaptive']>[] = [
  'iconAlways',
  'block',
  'auto',
  'iconSm',
  'iconMd',
  'iconLg',
  'iconXl',
  'icon2xl',
  'fullSm',
  'fullMd',
  'fullLg',
  'fullXl',
  'full2xl'
]

const containerModes: NonNullable<ChipProps['container']>[] = [
  'iconSm',
  'iconMd',
  'iconLg',
  'iconXl',
  'icon2xl',
  'fullSm',
  'fullMd',
  'fullLg',
  'fullXl',
  'full2xl'
]

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const chipReference = ref<ChipExpose | null>(null)
const exposeOutput = ref<string>('Click an expose action button')
const dynamicValue = ref<string>('chip-value')
const dynamicDetail = ref<Record<string, string | number>>({ source: 'chip', step: 1 })

const isSelected1 = ref<boolean>(false)
const isSelected2 = ref<boolean>(true)
const isTurned = ref<boolean>(false)

const isDynamicDisabled = ref<boolean>(false)
const isDynamicReadonly = ref<boolean>(false)
const isDynamicLoading = ref<boolean>(false)
const isDynamicSelected = ref<boolean>(false)
const isDynamicAssistive = ref<boolean>(false)
const isDynamicRoundedFull = ref<boolean>(false)
const isSkeleton = ref<boolean>(true)
const isLifecycleMounted = ref<boolean>(true)

const blockedTriggerCount = ref<number>(0)
const formStatus = ref<string>('Not submitted')

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
  blockedTriggerCount.value += 1
}

const handleFormSubmit = (): void => {
  formStatus.value = 'Form submitted'
}

const handleFormReset = (): void => {
  formStatus.value = 'Form reset'
}

const readExposeValue = async (): Promise<void> => {
  await nextTick()
  const value = chipReference.value?.getValue?.()
  exposeOutput.value = `getValue(): ${JSON.stringify(value)}`
}

const readExposeDetail = async (): Promise<void> => {
  await nextTick()
  const detail = chipReference.value?.getDetail?.()
  exposeOutput.value = `getDetail(): ${JSON.stringify(detail)}`
}

const switchDynamicPayload = async (): Promise<void> => {
  dynamicValue.value = dynamicValue.value === 'chip-value' ? 'chip-updated' : 'chip-value'
  dynamicDetail.value = {
    source: 'chip',
    step: dynamicValue.value === 'chip-value' ? 1 : 2
  }
  await nextTick()
  const value = chipReference.value?.getValue?.()
  const detail = chipReference.value?.getDetail?.()
  exposeOutput.value = `getValue(): ${JSON.stringify(value)}, getDetail(): ${JSON.stringify(detail)}`
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Chip">
    <D1Section>
      <D1Group label="Basic & Icons">
        <DemoFlex data-testid="demo-chip-basic" align="center">
          <D1Chip label="Classic Chip"/>
          <D1Chip label="With Leading Icon" icon="home"/>
          <D1Chip label="With Trailing Icon" icon-trailing="close"/>
          <D1Chip label="Both Icons" icon="home" icon-trailing="close"/>
          <D1Chip label="Icon Object" :icon="{ icon: 'star' }"/>
          <D1Chip label="Trailing Object" :icon-trailing="{ icon: 'open_in_new' }"/>
          <D1Chip label="Icon Turn" icon="arrow_drop_down" :icon-turn="isTurned" @click="isTurned = !isTurned"/>
          <D1Chip label="Trailing Turn Only" icon="home" icon-trailing="expand_more" icon-turn icon-trailing-turn-only/>
          <D1Chip label="Icon Dir" icon="arrow_forward" icon-dir/>
          <D1Chip label="Trailing Dir Only" icon="home" icon-trailing="arrow_forward" icon-dir icon-trailing-dir-only/>
          <D1Chip label="Icon Palette" icon="favorite" icon-palette palette="red"/>
          <D1Chip label="Trailing Palette" icon-trailing="star" icon-trailing-palette palette="amber"/>
          <D1Chip label="Icon Attrs" icon="tune" :icon-attrs="{ size: 'sm' }"/>
          <D1Chip label="Icon Hidden" icon="home" icon-hide/>
          <D1Chip icon="search" aria-label="Search chip"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Sizes (All 4)">
        <DemoFlex data-testid="demo-chip-sizes" align="center">
          <D1Chip
            v-for="sizeName in sizeList"
            :key="sizeName"
            :label="`Size ${sizeName.toUpperCase()}`"
            :size="sizeName"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Palettes (All 24) & Inverse">
        <DemoFlex data-testid="demo-chip-palettes" align="center">
          <D1Chip
            v-for="paletteName in paletteList"
            :key="paletteName"
            :label="paletteName"
            :palette="paletteName"
            size="sm"
          />
          <D1Chip label="Inverse" inverse/>
        </DemoFlex>
      </D1Group>

      <D1Group label="States & Combinations">
        <DemoFlex data-testid="demo-chip-states" align="center">
          <D1Chip
            data-testid="demo-chip-toggle-select"
            label="Click to Select"
            :selected="isSelected1"
            @click="isSelected1 = !isSelected1"
          />
          <D1Chip
            data-testid="demo-chip-selected"
            label="Selected State"
            :selected="isSelected2"
            @click="isSelected2 = !isSelected2"
          />
          <D1Chip data-testid="demo-chip-disabled" label="Disabled" disabled/>
          <D1Chip label="Disabled + Selected" disabled selected/>
          <D1Chip data-testid="demo-chip-readonly" label="Readonly" readonly/>
          <D1Chip label="Focus" focus/>
          <D1Chip data-testid="demo-chip-loading" label="Loading" loading/>
          <D1Chip label="Loading Object" :loading="{ visible: true, circular: true }"/>
          <D1Chip label="Loading + Selected" loading selected/>
          <D1Chip label="Assistive + Selected" assistive selected icon="check"/>
          <D1Chip label="Assistive + Disabled" assistive disabled icon="block"/>
          <D1Chip label="Selected + Blue" selected palette="blue"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Interactive State Toggles">
        <DemoFlex align="center">
          <D1Skeleton :active="isSkeleton">
            <D1Chip
              data-testid="demo-chip-skeleton"
              label="Dynamic Target Chip"
              icon="bolt"
              :disabled="isDynamicDisabled"
              :readonly="isDynamicReadonly"
              :loading="isDynamicLoading"
              :selected="isDynamicSelected"
              :assistive="isDynamicAssistive"
              :rounded-full="isDynamicRoundedFull"
              :is-skeleton="isSkeleton"
            />
          </D1Skeleton>
        </DemoFlex>
        <DemoFlex align="center">
          <D1Button label="Toggle Selected" size="sm" outline @click="isDynamicSelected = !isDynamicSelected"/>
          <D1Button label="Toggle Disabled" size="sm" outline @click="isDynamicDisabled = !isDynamicDisabled"/>
          <D1Button label="Toggle Readonly" size="sm" outline @click="isDynamicReadonly = !isDynamicReadonly"/>
          <D1Button label="Toggle Loading" size="sm" outline @click="isDynamicLoading = !isDynamicLoading"/>
          <D1Button label="Toggle Assistive" size="sm" outline @click="isDynamicAssistive = !isDynamicAssistive"/>
          <D1Button label="Toggle Rounded" size="sm" outline @click="isDynamicRoundedFull = !isDynamicRoundedFull"/>
          <D1Button
            data-testid="demo-chip-skeleton-toggle"
            label="Toggle Skeleton"
            size="sm"
            outline
            @click="isSkeleton = !isSkeleton"
          />
        </DemoFlex>
        <DemoValue
          label="State Flags"
          :value="{
            isDynamicSelected,
            isDynamicDisabled,
            isDynamicReadonly,
            isDynamicLoading,
            isDynamicAssistive,
            isDynamicRoundedFull,
            isSkeleton
          }"
        />
      </D1Group>

      <D1Group label="Blocked & Guarded Actions">
        <DemoFlex align="center">
          <D1Chip
            data-testid="demo-chip-event-disabled"
            label="Blocked Disabled"
            disabled
            @click="handleBlockedClick"
            @click-lite="handleBlockedClick"
          />
          <D1Chip
            label="Blocked Readonly"
            readonly
            @click="handleBlockedClick"
            @click-lite="handleBlockedClick"
          />
          <D1Chip
            label="Blocked Loading"
            loading
            @click="handleBlockedClick"
            @click-lite="handleBlockedClick"
          />
        </DemoFlex>
        <DemoValue label="Blocked Click Count" :value="blockedTriggerCount"/>
      </D1Group>

      <D1Group label="Shapes, Grid & Text Align">
        <DemoFlex data-testid="demo-chip-variants" align="center">
          <D1Chip label="Standard Rounded"/>
          <D1Chip label="Rounded Full" rounded-full/>
          <D1Chip label="Grid Layout" grid icon="star" icon-trailing="close" text-align="center"/>
          <D1Chip
            v-for="alignment in textAlignList"
            :key="alignment"
            class="demo-chip-page__wide"
            :label="`Align ${alignment}`"
            adaptive="block"
            :text-align="alignment"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Adaptive Modes (All 13)">
        <DemoFlex align="center">
          <D1Chip
            v-for="adaptiveMode in adaptiveModes"
            :key="adaptiveMode"
            :label="`Adaptive ${adaptiveMode}`"
            :adaptive="adaptiveMode"
            icon="star"
            :aria-label="`Adaptive ${adaptiveMode}`"
            size="sm"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Container Modes (All 10)">
        <DemoFlex align="center">
          <DemoBox
            v-for="containerMode in containerModes"
            :key="containerMode"
            container
            size="sm"
          >
            <D1Chip
              :label="`Container ${containerMode}`"
              :container="containerMode"
              icon="star"
              size="sm"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Input, Assistive, Tags & Form">
        <DemoFlex data-testid="demo-chip-semantic" align="center">
          <D1Chip label="Input (closable)" input icon-trailing="close"/>
          <D1Chip label="Assistive" assistive icon="settings"/>
          <D1Chip data-testid="demo-chip-button-tag" label="Native Button Tag" tag="button" type="button"/>
          <D1Chip data-testid="demo-chip-link" label="Anchor Link" tag="a" href="#chip-link"/>
          <D1Chip label="Router Link (String)" to="/component-chip"/>
          <D1Chip label="Router Link (Object)" :to="{ name: 'home' }"/>
        </DemoFlex>
        <form @submit.prevent="handleFormSubmit" @reset="handleFormReset">
          <DemoFlex align="center">
            <D1Chip label="Submit Chip" tag="button" type="submit"/>
            <D1Chip label="Reset Chip" tag="button" type="reset" assistive/>
          </DemoFlex>
        </form>
        <DemoValue label="Form Status" :value="formStatus"/>
      </D1Group>

      <D1Group label="Slots & Accessibility">
        <DemoFlex align="center">
          <D1Chip>
            <template #default>Custom Default Slot</template>
          </D1Chip>
          <D1Chip
            icon="label"
            label-id="demo-chip-custom-label"
            aria-label="Custom labeled chip"
          >
            <template #default>Labeled Slot Chip</template>
          </D1Chip>
          <D1Chip icon="filter_list" aria-label="Filter items"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Events & Expose Methods">
        <DemoFlex align="center">
          <D1Chip
            ref="chipReference"
            data-testid="demo-chip-event-target"
            label="Inspectable Chip"
            :value="dynamicValue"
            :detail="dynamicDetail"
            @click="handleClickEvent"
            @click-lite="handleClickLiteEvent"
          />
          <D1Chip
            data-testid="demo-chip-event-zero"
            label="Zero Value"
            :value="0"
            @click-lite="handleClickLiteEvent"
          />
          <D1Chip
            label="Index Fallback"
            :index="9"
            @click-lite="handleClickLiteEvent"
          />
          <D1Button label="Read getValue()" size="sm" outline @click="readExposeValue"/>
          <D1Button label="Read getDetail()" size="sm" outline @click="readExposeDetail"/>
          <D1Button label="Switch Value & Detail" size="sm" outline @click="switchDynamicPayload"/>
        </DemoFlex>
        <DemoValue data-testid="demo-chip-event-output" label="Event Name" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
        <DemoValue label="Expose Output" :value="exposeOutput"/>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoFlex data-testid="demo-chip-boundaries" align="center">
          <D1Chip label="" aria-label="Empty label chip"/>
          <D1Chip label="   " aria-label="Whitespace label chip"/>
          <D1Chip aria-label="No props chip"/>
          <D1Chip :label="0" :value="0"/>
          <D1Chip :label="-42" :value="-42"/>
          <D1Chip :label="3.14" :value="3.14"/>
          <D1Chip label="A"/>
          <D1Chip label="Tiếng Việt / Кириллица / 🚀 & <>"/>
          <D1Chip label="<img src=x onerror=alert(1)>"/>
          <D1Chip label="Very long multi-sentence chip label designed to test wrapping and ellipsis behavior across responsive containers"/>
        </DemoFlex>
        <DemoBox class="demo-chip-page__narrow" size="sm">
          <D1Chip label="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"/>
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
          <D1Chip
            v-if="isLifecycleMounted"
            label="Mounted Chip"
            icon="check"
          />
        </DemoFlex>
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-chip-page {
  &__wide {
    min-width: 180px;
  }

  &__narrow {
    width: 100%;
    max-width: 180px;
  }
}
</style>
