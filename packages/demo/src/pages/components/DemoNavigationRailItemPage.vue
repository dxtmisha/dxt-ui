<script setup lang="ts">
import { nextTick, ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { NavigationRailItemExpose } from '@dxtmisha/constructor/NavigationRailItem'
import type { NavigationRailItemProps } from '@dxtmisha/d1/D1NavigationRailItem'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const paletteList: NonNullable<NavigationRailItemProps['palette']>[] = [
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

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const isDynamicFocus = ref<boolean>(false)
const isDynamicOpen = ref<boolean>(false)
const isDynamicSelected = ref<boolean>(false)
const isDynamicSelectedChild = ref<boolean>(false)
const isDynamicDisabled = ref<boolean>(false)
const isDynamicReadonly = ref<boolean>(false)
const isDynamicLoading = ref<boolean>(false)
const isSkeletonActive = ref<boolean>(true)
const isLifecycleMounted = ref<boolean>(true)

const blockedTriggerCount = ref<number>(0)
const keyboardActivationCount = ref<number>(0)

const navigationRailItemReference = ref<NavigationRailItemExpose | null>(null)
const indexOnlyReference = ref<NavigationRailItemExpose | null>(null)
const dynamicValue = ref<string>('dashboard-route')
const dynamicDetail = ref<Record<string, string | number>>({
  section: 'overview',
  order: 1
})
const exposeOutput = ref<Record<string, unknown>>({})

const longSentence = 'This is a comprehensive multi-sentence navigation rail item label designed to verify wrapping behavior, spacing consistency, and container boundaries across viewports.'
const unbrokenText = 'A'.repeat(64)
const xssPayload = '<img src=x onerror=alert(1)>'

const handleClickEvent = (
  mouseEvent: MouseEvent,
  clickValue: EventClickValue
): void => {
  onEvent('click', mouseEvent, clickValue)
  eventPayload.value = JSON.stringify({
    eventType: mouseEvent.type,
    value: clickValue
  })
}

const handleClickLiteEvent = (clickValue: EventClickValue): void => {
  onEvent('clickLite', clickValue)
  eventPayload.value = JSON.stringify(clickValue)
}

const handleBlockedTrigger = (): void => {
  blockedTriggerCount.value += 1
}

const handleKeyboardActivation = (keyboardEvent: KeyboardEvent): void => {
  if (keyboardEvent.key === 'Enter' || keyboardEvent.key === ' ') {
    keyboardEvent.preventDefault()
    keyboardActivationCount.value += 1
  }
}

const readExposeMethods = async (): Promise<void> => {
  await nextTick()
  exposeOutput.value = {
    value: navigationRailItemReference.value?.getValue?.(),
    detail: navigationRailItemReference.value?.getDetail?.(),
    indexFallbackValue: indexOnlyReference.value?.getValue?.()
  }
}

const switchExposePayload = async (): Promise<void> => {
  dynamicValue.value = dynamicValue.value === 'dashboard-route' ? 'settings-route' : 'dashboard-route'
  dynamicDetail.value = {
    section: dynamicValue.value === 'dashboard-route' ? 'overview' : 'preferences',
    order: dynamicValue.value === 'dashboard-route' ? 1 : 2
  }
  await readExposeMethods()
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="NavigationRailItem">
    <D1Section class="demo-navigation-rail-item-page">
      <D1Group label="Basic & Data Formats">
        <DemoBox>
          <DemoFlex align="center">
            <D1NavigationRailItem label="Home" icon="home"/>
            <D1NavigationRailItem icon="star">Default Slot</D1NavigationRailItem>
            <D1NavigationRailItem label="Text Only"/>
            <D1NavigationRailItem
              :label="0"
              :badge="0"
              :value="0"
              :index="0"
              icon="exposure_zero"
            />
            <D1NavigationRailItem :label="-42" :value="-42" icon="remove"/>
            <D1NavigationRailItem :label="3.14" :value="3.14" icon="functions"/>
            <D1NavigationRailItem
              label="Metadata"
              icon="inventory_2"
              :index="10"
              value="inventory"
              :detail="{ module: 'warehouse' }"
              parent="main-rail"
              :list-id="3"
            />
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Icons & Badges">
        <DemoBox>
          <DemoFlex align="center">
            <D1NavigationRailItem label="Icon String" icon="inbox"/>
            <D1NavigationRailItem label="Icon Object" :icon="{ icon: 'person', size: 'sm' }" :icon-attrs="{ active: true }"/>
            <D1NavigationRailItem label="Icon Null" :icon="null"/>
            <D1NavigationRailItem label="Icon Turn" icon="expand_more" icon-turn/>
            <D1NavigationRailItem label="Icon Dir (RTL)" icon="arrow_forward" icon-dir/>
            <D1NavigationRailItem label="Icon Palette" icon="favorite" icon-palette palette="red"/>
            <D1NavigationRailItem label="Icon Hidden" icon="lock" icon-hide/>
            <D1NavigationRailItem label="Badge String" icon="mail" badge="new"/>
            <D1NavigationRailItem label="Badge Number" icon="notifications" :badge="12"/>
            <D1NavigationRailItem label="Badge Object" icon="forum" :badge="{ label: 120, labelMax: 99 }"/>
            <D1NavigationRailItem label="Badge Dot" icon="chat" badge-dot/>
            <D1NavigationRailItem label="Badge Attrs" icon="star" badge="VIP" :badge-attrs="{ palette: 'amber' }"/>
            <D1NavigationRailItem label="Inline Badge" badge="5"/>
            <D1NavigationRailItem label="Inline Dot" badge-dot/>
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="States & Blocked Guards">
        <DemoBox>
          <DemoFlex align="center">
            <D1NavigationRailItem label="Default" icon="circle"/>
            <D1NavigationRailItem label="Focus" icon="center_focus_strong" focus/>
            <D1NavigationRailItem label="Open" icon="folder_open" open/>
            <D1NavigationRailItem label="Selected" icon="check_circle" selected/>
            <D1NavigationRailItem label="Selected Child" icon="subdirectory_arrow_right" selected-child/>
            <D1NavigationRailItem
              label="Readonly"
              icon="visibility"
              readonly
              @click="handleBlockedTrigger"
              @click-lite="handleBlockedTrigger"
            />
            <D1NavigationRailItem
              label="Disabled"
              icon="block"
              disabled
              @click="handleBlockedTrigger"
              @click-lite="handleBlockedTrigger"
            />
            <D1NavigationRailItem
              label="Loading Boolean"
              icon="sync"
              loading
              @click="handleBlockedTrigger"
              @click-lite="handleBlockedTrigger"
            />
            <D1NavigationRailItem
              label="Loading Object"
              icon="hourglass_top"
              :loading="{ visible: true, circular: true, value: 65 }"
            />
            <D1NavigationRailItem
              label="Disabled + Selected"
              icon="lock"
              disabled
              selected
            />
          </DemoFlex>
        </DemoBox>
        <DemoValue label="blockedTriggerCount" :value="blockedTriggerCount"/>
      </D1Group>

      <D1Group label="Interactive State Toggles">
        <DemoBox>
          <DemoFlex align="center">
            <D1NavigationRailItem
              label="Dynamic Target"
              icon="tune"
              badge="3"
              :focus="isDynamicFocus"
              :open="isDynamicOpen"
              :selected="isDynamicSelected"
              :selected-child="isDynamicSelectedChild"
              :disabled="isDynamicDisabled"
              :readonly="isDynamicReadonly"
              :loading="isDynamicLoading"
            />
          </DemoFlex>
        </DemoBox>
        <DemoFlex>
          <D1Button
            :label="`focus: ${isDynamicFocus}`"
            size="sm"
            :outline="!isDynamicFocus"
            @click="isDynamicFocus = !isDynamicFocus"
          />
          <D1Button
            :label="`open: ${isDynamicOpen}`"
            size="sm"
            :outline="!isDynamicOpen"
            @click="isDynamicOpen = !isDynamicOpen"
          />
          <D1Button
            :label="`selected: ${isDynamicSelected}`"
            size="sm"
            :outline="!isDynamicSelected"
            @click="isDynamicSelected = !isDynamicSelected"
          />
          <D1Button
            :label="`selectedChild: ${isDynamicSelectedChild}`"
            size="sm"
            :outline="!isDynamicSelectedChild"
            @click="isDynamicSelectedChild = !isDynamicSelectedChild"
          />
          <D1Button
            :label="`disabled: ${isDynamicDisabled}`"
            size="sm"
            :outline="!isDynamicDisabled"
            @click="isDynamicDisabled = !isDynamicDisabled"
          />
          <D1Button
            :label="`readonly: ${isDynamicReadonly}`"
            size="sm"
            :outline="!isDynamicReadonly"
            @click="isDynamicReadonly = !isDynamicReadonly"
          />
          <D1Button
            :label="`loading: ${isDynamicLoading}`"
            size="sm"
            :outline="!isDynamicLoading"
            @click="isDynamicLoading = !isDynamicLoading"
          />
        </DemoFlex>
        <DemoValue
          label="State Flags"
          :value="{
            isDynamicFocus,
            isDynamicOpen,
            isDynamicSelected,
            isDynamicSelectedChild,
            isDynamicDisabled,
            isDynamicReadonly,
            isDynamicLoading
          }"
        />
      </D1Group>

      <D1Group label="Skeleton">
        <DemoFlex>
          <D1Button
            :label="isSkeletonActive ? 'isSkeleton: true' : 'isSkeleton: false'"
            size="sm"
            :outline="!isSkeletonActive"
            @click="isSkeletonActive = !isSkeletonActive"
          />
        </DemoFlex>
        <DemoValue label="isSkeletonActive" :value="isSkeletonActive"/>
        <DemoBox>
          <D1Skeleton :active="isSkeletonActive">
            <DemoFlex align="center">
              <D1NavigationRailItem is-skeleton icon="home" label="Home"/>
              <D1NavigationRailItem is-skeleton icon="explore" label="Explore Projects"/>
              <D1NavigationRailItem is-skeleton label="Text Only Skeleton"/>
            </DemoFlex>
          </D1Skeleton>
        </DemoBox>
      </D1Group>

      <D1Group label="Dividers & Selection Styles">
        <DemoBox>
          <D1NavigationRailItem label="Item 1 (No Divider)" icon="looks_one"/>
          <D1NavigationRailItem label="Item 2 (Divider)" icon="looks_two" divider/>
          <D1NavigationRailItem label="Item 3 (Divider)" icon="looks_3" divider selected/>
          <D1NavigationRailItem label="Selection None" icon="radio_button_unchecked" selection-style="none"/>
          <D1NavigationRailItem label="Selection Radio" icon="radio_button_checked" selection-style="radio" selected/>
          <D1NavigationRailItem label="Selection Checkbox" icon="check_box" selection-style="checkbox" selected/>
          <D1NavigationRailItem label="Selection Checkmark" icon="check" selection-style="checkmark" selected/>
        </DemoBox>
      </D1Group>

      <D1Group label="Palettes (All 24)">
        <DemoBox>
          <DemoFlex align="center">
            <D1NavigationRailItem
              v-for="paletteName in paletteList"
              :key="paletteName"
              :label="paletteName"
              :palette="paletteName"
              icon="palette"
              selected
            />
          </DemoFlex>
        </DemoBox>
        <DemoBox>
          <DemoFlex align="center">
            <D1NavigationRailItem label="Blue Open" palette="blue" icon="folder_open" open/>
            <D1NavigationRailItem label="Green Focus" palette="green" icon="check_circle" focus/>
            <D1NavigationRailItem label="Rose Selected Child" palette="rose" icon="layers" selected-child/>
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Tags & Links">
        <DemoBox>
          <DemoFlex align="center">
            <D1NavigationRailItem label="Tag Div (default)" tag="div" icon="crop_square"/>
            <D1NavigationRailItem label="Tag Button" tag="button" type="button" icon="smart_button"/>
            <D1NavigationRailItem label="Tag Span" tag="span" icon="text_fields"/>
            <D1NavigationRailItem label="Tag Li" tag="li" icon="format_list_bulleted"/>
            <D1NavigationRailItem label="Anchor Link (href)" href="#demo-rail-anchor" icon="link"/>
            <D1NavigationRailItem label="Router Link (to string)" to="/component-navigation-rail-item" icon="route"/>
            <D1NavigationRailItem label="Router Link (to object)" :to="{ name: 'home' }" icon="home"/>
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Slots">
        <DemoBox>
          <DemoFlex align="center">
            <D1NavigationRailItem icon="auto_awesome">
              <template #default="slotProperties">
                <span>Default Slot {{ slotProperties }}</span>
              </template>
            </D1NavigationRailItem>
            <D1NavigationRailItem label="Leading Slot">
              <template #leading>
                <D1Avatar label="NR" size="sm"/>
              </template>
            </D1NavigationRailItem>
            <D1NavigationRailItem label="Body Slot" icon="dashboard">
              <template #body>
                <D1Chip label="Beta" size="sm"/>
              </template>
            </D1NavigationRailItem>
            <D1NavigationRailItem>
              <template #leading>
                <D1Avatar label="ALL" size="sm"/>
              </template>
              <template #default>
                <strong>Combined Slots</strong>
              </template>
              <template #body>
                <D1Badge label="3" size="sm"/>
              </template>
            </D1NavigationRailItem>
            <D1NavigationRailItem label="Prop + ">
              <template #default>
                <span>Slot Suffix</span>
              </template>
            </D1NavigationRailItem>
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Events & Expose">
        <DemoBox>
          <DemoFlex align="center">
            <D1NavigationRailItem
              ref="navigationRailItemReference"
              label="Inspectable Rail Item"
              icon="touch_app"
              badge="4"
              :value="dynamicValue"
              :detail="dynamicDetail"
              :index="1"
              parent="events-rail"
              :list-id="42"
              tabindex="0"
              @click="handleClickEvent"
              @click-lite="handleClickLiteEvent"
            />
            <D1NavigationRailItem
              ref="indexOnlyReference"
              label="Index Fallback Item"
              icon="pin"
              index="fallback-index-7"
              tabindex="0"
              @click="handleClickEvent"
              @click-lite="handleClickLiteEvent"
            />
          </DemoFlex>
        </DemoBox>
        <DemoFlex>
          <D1Button label="Read Expose" size="sm" @click="readExposeMethods"/>
          <D1Button label="Switch Value & Detail" size="sm" outline @click="switchExposePayload"/>
        </DemoFlex>
        <DemoValue label="expose" :value="exposeOutput"/>
        <DemoValue label="event" :value="eventName || 'None'"/>
        <DemoValue label="payload" :value="eventPayload"/>
      </D1Group>

      <D1Group label="Accessibility (A11y)">
        <DemoBox>
          <DemoFlex align="center">
            <D1NavigationRailItem label="Role Option (selected)" icon="check" role="option" selected/>
            <D1NavigationRailItem label="Role Menuitem" icon="menu" role="menuitem"/>
            <D1NavigationRailItem label="Role Tab" icon="tab" role="tab" selected/>
            <D1NavigationRailItem label="Role Button" icon="smart_button" role="button"/>
            <D1NavigationRailItem
              label="Custom Label ID"
              icon="label"
              label-id="demo-navigation-rail-item-label-id"
              aria-label="Custom accessible navigation rail item"
              aria-current="page"
            />
            <D1NavigationRailItem
              label="Keyboard Focusable"
              icon="keyboard"
              tabindex="0"
              role="option"
              aria-label="Keyboard focusable navigation rail item"
              @keydown="handleKeyboardActivation"
            />
          </DemoFlex>
        </DemoBox>
        <DemoValue label="keyboardActivationCount" :value="keyboardActivationCount"/>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoBox>
          <DemoFlex align="center">
            <D1NavigationRailItem/>
            <D1NavigationRailItem label=""/>
            <D1NavigationRailItem label="   "/>
            <D1NavigationRailItem :label="undefined"/>
            <D1NavigationRailItem :label="0" :badge="0"/>
            <D1NavigationRailItem label="A" icon="looks_one"/>
            <D1NavigationRailItem label="Tiếng Việt / Кириллица / 日本語 🚀✨" icon="translate"/>
            <D1NavigationRailItem :label="xssPayload" icon="security"/>
            <D1NavigationRailItem :label="longSentence" icon="notes"/>
            <D1NavigationRailItem :label="unbrokenText" icon="wrap_text"/>
          </DemoFlex>
        </DemoBox>
        <DemoBox class="demo-navigation-rail-item-page__narrow" size="sm">
          <D1NavigationRailItem
            :label="longSentence"
            icon="view_sidebar"
            badge="99+"
          />
          <D1NavigationRailItem
            :label="unbrokenText"
            icon="warning"
            divider
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Lifecycle (Mount / Unmount)">
        <DemoFlex>
          <D1Button
            :label="isLifecycleMounted ? 'Unmount Item' : 'Mount Item'"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
          <DemoValue label="mounted" :value="isLifecycleMounted"/>
        </DemoFlex>
        <DemoBox>
          <D1NavigationRailItem
            v-if="isLifecycleMounted"
            label="Lifecycle Managed Item"
            icon="autorenew"
            badge="live"
            selected
          />
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-navigation-rail-item-page {
  &__narrow {
    max-width: 96px;
  }
}
</style>
