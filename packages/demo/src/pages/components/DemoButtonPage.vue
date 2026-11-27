<script setup lang="ts">
import { nextTick, ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { ButtonExpose } from '@dxtmisha/constructor/Button'
import type { ButtonProps } from '@dxtmisha/d1/D1Button'
import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const paletteList: NonNullable<ButtonProps['palette']>[] = [
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
const adaptiveModes: NonNullable<ButtonProps['adaptive']>[] = [
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
const containerModes: NonNullable<ButtonProps['container']>[] = [
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
const sizeList: NonNullable<ButtonProps['size']>[] = ['xs', 'sm', 'md', 'lg', 'xl']
const textAlignList: NonNullable<ButtonProps['textAlign']>[] = ['left', 'center', 'right']

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const buttonReference = ref<ButtonExpose | null>(null)
const exposeOutput = ref<string>('Click an expose action button')
const dynamicValue = ref<string>('primary-action')
const dynamicDetail = ref<Record<string, string | number>>({ action: 'submit', step: 1 })

const isDynamicDisabled = ref<boolean>(false)
const isDynamicLoading = ref<boolean>(false)
const isDynamicSelected = ref<boolean>(false)
const isDynamicSkeleton = ref<boolean>(true)
const isLifecycleMounted = ref<boolean>(true)

const blockedTriggerCount = ref<number>(0)
const formSubmitStatus = ref<string>('Not submitted')

const handleEventTrack = (
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
  handleEventTrack('click', {
    eventType: mouseEvent.type,
    value: clickValue
  })
}

const handleClickLiteEvent = (clickValue: EventClickValue): void => {
  handleEventTrack('clickLite', clickValue)
}

const handleBlockedClick = (): void => {
  blockedTriggerCount.value += 1
}

const handleFormSubmit = (): void => {
  formSubmitStatus.value = 'Form submitted'
}

const handleFormReset = (): void => {
  formSubmitStatus.value = 'Form reset'
}

const readExposeValue = async (): Promise<void> => {
  await nextTick()
  const value = buttonReference.value?.getValue?.()
  exposeOutput.value = `getValue(): ${JSON.stringify(value)}`
}

const readExposeDetail = async (): Promise<void> => {
  await nextTick()
  const detail = buttonReference.value?.getDetail?.()
  exposeOutput.value = `getDetail(): ${JSON.stringify(detail)}`
}

const toggleDynamicPayload = async (): Promise<void> => {
  dynamicValue.value = dynamicValue.value === 'primary-action' ? 'secondary-action' : 'primary-action'
  dynamicDetail.value = {
    action: dynamicValue.value,
    step: dynamicValue.value === 'primary-action' ? 1 : 2
  }
  await nextTick()
  const value = buttonReference.value?.getValue?.()
  const detail = buttonReference.value?.getDetail?.()
  exposeOutput.value = `getValue(): ${JSON.stringify(value)}, getDetail(): ${JSON.stringify(detail)}`
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Button">
    <D1Section>
      <D1Group label="Appearances">
        <DemoFlex align="center">
          <D1Button label="Primary" primary/>
          <D1Button label="Secondary" secondary/>
          <D1Button label="Outline" outline/>
          <D1Button label="Text" text/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Sizes">
        <DemoFlex align="center">
          <D1Button
            v-for="sizeName in sizeList"
            :key="sizeName"
            :label="`Size ${sizeName.toUpperCase()}`"
            :size="sizeName"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Palettes (All 24)">
        <DemoFlex align="center">
          <D1Button
            v-for="paletteName in paletteList"
            :key="paletteName"
            :label="paletteName"
            :palette="paletteName"
            size="sm"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Icons & Icon Modifiers">
        <DemoFlex align="center">
          <D1Button label="Leading Icon" icon="home"/>
          <D1Button label="Trailing Icon" icon-trailing="arrow_forward"/>
          <D1Button label="Both Icons" icon="home" icon-trailing="arrow_forward"/>
          <D1Button label="Icon Object" :icon="{ icon: 'star' }"/>
          <D1Button label="Trailing Object" :icon-trailing="{ icon: 'open_in_new' }"/>
          <D1Button label="Icon Turn" icon="expand_more" icon-turn/>
          <D1Button label="Trailing Turn Only" icon="home" icon-trailing="expand_more" icon-turn icon-trailing-turn-only/>
          <D1Button label="Icon Dir" icon="arrow_forward" icon-dir/>
          <D1Button label="Trailing Dir Only" icon="home" icon-trailing="arrow_forward" icon-dir icon-trailing-dir-only/>
          <D1Button label="Icon Palette" icon="favorite" icon-palette palette="red" outline/>
          <D1Button label="Trailing Palette" icon-trailing="star" icon-trailing-palette palette="amber" outline/>
          <D1Button label="Icon Hide" icon="visibility" icon-hide/>
          <D1Button label="Icon Attrs" icon="tune" :icon-attrs="{ size: 'sm' }"/>
          <D1Button icon="settings" aria-label="Settings"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Visual States & Combinations">
        <DemoFlex align="center">
          <D1Button label="Default"/>
          <D1Button label="Focus" focus/>
          <D1Button label="Selected" selected/>
          <D1Button label="Disabled" disabled/>
          <D1Button label="Readonly" readonly/>
          <D1Button label="Loading Boolean" loading/>
          <D1Button label="Loading Object" :loading="{ circular: true }"/>
          <D1Skeleton :active="true">
            <D1Button label="Skeleton" is-skeleton/>
          </D1Skeleton>
          <D1Button label="Disabled + Selected" disabled selected/>
          <D1Button label="Loading + Disabled" loading disabled/>
          <D1Button label="Outline + Selected + Blue" outline selected palette="blue"/>
          <D1Button label="Secondary + Disabled" secondary disabled/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Interactive State Toggles">
        <DemoFlex align="center">
          <D1Skeleton :active="isDynamicSkeleton">
            <D1Button
              label="Dynamic Target"
              icon="bolt"
              :disabled="isDynamicDisabled"
              :loading="isDynamicLoading"
              :selected="isDynamicSelected"
              :is-skeleton="isDynamicSkeleton"
            />
          </D1Skeleton>
        </DemoFlex>
        <DemoFlex align="center">
          <D1Button
            label="Toggle Disabled"
            size="sm"
            outline
            @click="isDynamicDisabled = !isDynamicDisabled"
          />
          <D1Button
            label="Toggle Loading"
            size="sm"
            outline
            @click="isDynamicLoading = !isDynamicLoading"
          />
          <D1Button
            label="Toggle Selected"
            size="sm"
            outline
            @click="isDynamicSelected = !isDynamicSelected"
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
          :value="{ isDynamicDisabled, isDynamicLoading, isDynamicSelected, isDynamicSkeleton }"
        />
      </D1Group>

      <D1Group label="Blocked & Guarded Actions">
        <DemoFlex align="center">
          <D1Button label="Blocked Disabled" disabled @click="handleBlockedClick" @click-lite="handleBlockedClick"/>
          <D1Button label="Blocked Readonly" readonly @click="handleBlockedClick" @click-lite="handleBlockedClick"/>
          <D1Button label="Blocked Loading" loading @click="handleBlockedClick" @click-lite="handleBlockedClick"/>
        </DemoFlex>
        <DemoValue label="Blocked Click Count" :value="blockedTriggerCount"/>
      </D1Group>

      <D1Group label="Shapes, Inverse, Grid & Text Alignment">
        <DemoFlex align="center">
          <D1Button label="Rounded Full" rounded-full/>
          <D1Button label="No Min Width" :has-label-min-width="false"/>
          <D1Button label="With Min Width" :has-label-min-width="true"/>
          <D1Button label="Inverse" primary inverse icon="invert_colors"/>
          <D1Button label="Grid Layout" grid icon="star" icon-trailing="arrow_forward"/>
        </DemoFlex>
        <DemoFlex align="center">
          <D1Button
            v-for="alignment in textAlignList"
            :key="alignment"
            class="demo-button-page__wide"
            :label="`Align ${alignment}`"
            :text-align="alignment"
            outline
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Adaptive Modes (All 13)">
        <DemoFlex align="center">
          <D1Button
            v-for="adaptiveMode in adaptiveModes"
            :key="adaptiveMode"
            :label="`Adaptive ${adaptiveMode}`"
            :adaptive="adaptiveMode"
            icon="home"
            outline
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
            <D1Button
              :label="`Container ${containerMode}`"
              :container="containerMode"
              icon="star"
              size="sm"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Tags, Links & Form Integration">
        <DemoFlex align="center">
          <D1Button label="Button Tag" tag="button" type="button"/>
          <D1Button label="Link (href)" href="https://example.com" target="_blank" rel="noopener noreferrer"/>
          <D1Button label="Link (A Tag)" tag="a" href="https://example.com" target="_blank" rel="noopener noreferrer"/>
          <D1Button label="Router Link (Object)" :to="{ name: 'home' }"/>
          <D1Button label="Router Link (String)" to="/component-button"/>
          <D1Button label="Span Role Button" tag="span" aria-label="Custom Span Button"/>
          <D1Button label="Span Disabled" tag="span" disabled aria-label="Disabled Span Button"/>
        </DemoFlex>
        <form @submit.prevent="handleFormSubmit" @reset="handleFormReset">
          <DemoFlex align="center">
            <D1Button label="Submit Form" tag="button" type="submit" primary/>
            <D1Button label="Reset Form" tag="button" type="reset" outline/>
          </DemoFlex>
        </form>
        <DemoValue label="Form Status" :value="formSubmitStatus"/>
      </D1Group>

      <D1Group label="Slots & Accessibility">
        <DemoFlex align="center">
          <D1Button>Default Slot Text</D1Button>
          <D1Button icon="star" label-id="demo-button-custom-label" aria-label="Starred custom slot action">
            <template #default>Custom Default With Icon</template>
          </D1Button>
        </DemoFlex>
      </D1Group>

      <D1Group label="Events & Expose Methods">
        <DemoFlex align="center">
          <D1Button
            ref="buttonReference"
            label="Inspectable Button"
            primary
            :value="dynamicValue"
            :detail="dynamicDetail"
            @click="handleClickEvent"
            @click-lite="handleClickLiteEvent"
          />
          <D1Button label="Read getValue()" size="sm" outline @click="readExposeValue"/>
          <D1Button label="Read getDetail()" size="sm" outline @click="readExposeDetail"/>
          <D1Button label="Switch Value & Detail" size="sm" outline @click="toggleDynamicPayload"/>
        </DemoFlex>
        <DemoValue label="Event Name" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
        <DemoValue label="Expose Output" :value="exposeOutput"/>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoFlex align="center">
          <D1Button label="" aria-label="Explicit empty label"/>
          <D1Button label="   " aria-label="Whitespace label"/>
          <D1Button aria-label="No props button"/>
          <D1Button :label="0" :value="0"/>
          <D1Button :label="-42" :value="-42"/>
          <D1Button :label="3.14" :value="3.14"/>
          <D1Button label="A"/>
          <D1Button label="Tiếng Việt / Кириллица / 🚀 & <>"/>
          <D1Button label="<img src=x onerror=alert(1)>"/>
          <D1Button label="Very long multi-sentence button label designed to verify ellipsis truncation and layout resilience inside flexible containers"/>
        </DemoFlex>
        <DemoBox class="demo-button-page__narrow" size="sm">
          <D1Button label="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"/>
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
          <D1Button
            v-if="isLifecycleMounted"
            label="Mounted Button"
            icon="check"
          />
        </DemoFlex>
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-button-page {
  &__wide {
    min-width: 220px;
  }

  &__narrow {
    max-width: 180px;
  }
}
</style>
