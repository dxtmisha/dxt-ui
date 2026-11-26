<script setup lang="ts">
import { ref } from 'vue'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { NavigationItemExpose } from '@dxtmisha/constructor/NavigationItem'
import type { NavigationItemProps } from '@dxtmisha/d1/D1NavigationItem'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const paletteList: NonNullable<NavigationItemProps['palette']>[] = [
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

const controlPositionList: NonNullable<NavigationItemProps['controlPosition']>[] = [
  'start',
  'end',
  'autoSm',
  'autoMd',
  'autoLg',
  'autoXl',
  'auto2xl'
]

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const filterQuery = ref<string>('app')
const filterActive = ref<boolean>(true)
const selectedCheckbox = ref<boolean>(true)
const selectedRadio = ref<string>('alpha')
const lazyEnabled = ref<boolean>(true)
const lazyCacheHeight = ref<boolean>(true)

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

const exposeTarget = ref<NavigationItemExpose | null>(null)
const exposeResult = ref<Record<string, unknown>>({})

const longSentence = 'This is a comprehensive multi-sentence navigation item label designed to verify wrapping behavior, spacing consistency, and container boundaries across viewports.'
const unbrokenText = 'A'.repeat(72)
const xssPayload = '<img src=x onerror=alert(1)>'

const handleClickEvent = (event: MouseEvent, value: EventClickValue): void => {
  onEvent('click', event, value)
  eventPayload.value = JSON.stringify({
    eventType: event.type,
    value
  })
}

const handleClickLiteEvent = (value: EventClickValue): void => {
  onEvent('clickLite', value)
  eventPayload.value = JSON.stringify(value)
}

const handleBlockedTrigger = (): void => {
  blockedTriggerCount.value += 1
}

const handleKeyboardActivation = (event: KeyboardEvent): void => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    keyboardActivationCount.value += 1
  }
}

const checkExpose = (): void => {
  exposeResult.value = {
    value: exposeTarget.value?.getValue?.(),
    detail: exposeTarget.value?.getDetail?.()
  }
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="NavigationItem">
    <D1Section class="demo-navigation-item-page">
      <D1Group label="Basic & Data Formats">
        <DemoBox>
          <D1NavigationItem label="Simple Label"/>
          <D1NavigationItem>Default Slot Label</D1NavigationItem>
          <D1NavigationItem
            :label="0"
            :prefix="0"
            :caption="0"
            :suffix="0"
            :description="0"
            :badge="0"
          />
          <D1NavigationItem
            label="Full Text Composition"
            prefix="01"
            caption="Caption"
            suffix="Shortcut"
            description="Detailed description text for this navigation item"
          />
          <D1NavigationItem
            label="Decorative Caption"
            caption="Hidden from screen readers"
            caption-decorative
          />
        </DemoBox>
      </D1Group>

      <D1Group label="States & Blocked Guards">
        <DemoBox>
          <D1NavigationItem label="Default"/>
          <D1NavigationItem label="Focus" focus/>
          <D1NavigationItem label="Open" open/>
          <D1NavigationItem label="Selected" selected/>
          <D1NavigationItem label="Selected Child" selected-child/>
          <D1NavigationItem
            label="Readonly (guarded)"
            readonly
            @click="handleBlockedTrigger"
          />
          <D1NavigationItem
            label="Disabled (guarded)"
            disabled
            @click="handleBlockedTrigger"
          />
          <D1NavigationItem
            label="Loading Boolean (guarded)"
            loading
            @click="handleBlockedTrigger"
          />
          <D1NavigationItem
            label="Loading Object"
            :loading="{ visible: true, circular: true }"
          />
          <D1NavigationItem
            label="Dynamic Controlled Item"
            description="Controlled via local buttons below"
            icon="tune"
            :focus="isDynamicFocus"
            :open="isDynamicOpen"
            :selected="isDynamicSelected"
            :selected-child="isDynamicSelectedChild"
            :disabled="isDynamicDisabled"
            :readonly="isDynamicReadonly"
            :loading="isDynamicLoading"
          />
        </DemoBox>
        <DemoFlex>
          <D1Button
            :label="isDynamicFocus ? 'focus: true' : 'focus: false'"
            size="sm"
            outline
            @click="isDynamicFocus = !isDynamicFocus"
          />
          <D1Button
            :label="isDynamicOpen ? 'open: true' : 'open: false'"
            size="sm"
            outline
            @click="isDynamicOpen = !isDynamicOpen"
          />
          <D1Button
            :label="isDynamicSelected ? 'selected: true' : 'selected: false'"
            size="sm"
            outline
            @click="isDynamicSelected = !isDynamicSelected"
          />
          <D1Button
            :label="isDynamicSelectedChild ? 'selectedChild: true' : 'selectedChild: false'"
            size="sm"
            outline
            @click="isDynamicSelectedChild = !isDynamicSelectedChild"
          />
          <D1Button
            :label="isDynamicDisabled ? 'disabled: true' : 'disabled: false'"
            size="sm"
            outline
            @click="isDynamicDisabled = !isDynamicDisabled"
          />
          <D1Button
            :label="isDynamicReadonly ? 'readonly: true' : 'readonly: false'"
            size="sm"
            outline
            @click="isDynamicReadonly = !isDynamicReadonly"
          />
          <D1Button
            :label="isDynamicLoading ? 'loading: true' : 'loading: false'"
            size="sm"
            outline
            @click="isDynamicLoading = !isDynamicLoading"
          />
        </DemoFlex>
        <DemoValue label="blockedTriggerCount" :value="blockedTriggerCount"/>
      </D1Group>

      <D1Group label="Skeleton">
        <DemoFlex>
          <D1Button
            :label="isSkeletonActive ? 'isSkeleton: true' : 'isSkeleton: false'"
            size="sm"
            outline
            @click="isSkeletonActive = !isSkeletonActive"
          />
        </DemoFlex>
        <DemoBox>
          <D1Skeleton :active="isSkeletonActive">
            <D1NavigationItem
              is-skeleton
              prefix="01"
              caption="Meta"
              suffix="END"
              description="Short skeleton description"
            >
              Skeleton Item A
            </D1NavigationItem>
            <D1NavigationItem
              is-skeleton
              description="A longer description demonstrating skeleton sizing across text lines"
            >
              Skeleton Item B with Longer Label
            </D1NavigationItem>
          </D1Skeleton>
        </DemoBox>
      </D1Group>

      <D1Group label="Icons & Alignment">
        <DemoBox>
          <D1NavigationItem label="Icon String" icon="home"/>
          <D1NavigationItem label="Icon Object" :icon="{ icon: 'person', size: 'sm' }" :icon-attrs="{ active: true }"/>
          <D1NavigationItem label="Icon Palette" icon="star" icon-palette/>
          <D1NavigationItem label="Trailing Icon" icon="folder" icon-trailing="chevron_right"/>
          <D1NavigationItem label="Trailing Icon Turned" icon="tune" icon-trailing="keyboard_arrow_down" icon-turn/>
          <D1NavigationItem label="Trailing Turn Only" icon="arrow_forward" icon-trailing="expand_more" icon-turn icon-trailing-turn-only/>
          <D1NavigationItem label="Icon Dir (RTL)" icon="arrow_back" icon-dir/>
          <D1NavigationItem label="Trailing Dir Only" icon="folder" icon-trailing="arrow_forward" icon-dir icon-trailing-dir-only/>
          <D1NavigationItem label="Trailing Palette" icon="notifications" icon-trailing="circle" icon-trailing-palette/>
          <D1NavigationItem label="Hidden Icon" icon="lock" icon-hide/>
          <D1NavigationItem label="Icon Align Center" icon="settings" icon-align="center"/>
          <D1NavigationItem label="Icon Align Edge (default)" icon="settings" icon-align="edge"/>
          <D1NavigationItem
            label="Icon Top Aligned"
            description="When description wraps onto multiple lines, iconTop aligns the leading and trailing icons to the first line."
            icon="info"
            icon-trailing="open_in_new"
            icon-top
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Badges">
        <DemoBox>
          <D1NavigationItem label="Badge String" icon="inbox" badge="new"/>
          <D1NavigationItem label="Badge Number" icon="mail" :badge="12"/>
          <D1NavigationItem label="Badge Object" icon="notifications" :badge="{ label: 120, labelMax: 99 }"/>
          <D1NavigationItem label="Badge Dot" icon="chat" badge-dot/>
          <D1NavigationItem label="Badge with badgeAttrs" icon="star" badge="VIP" :badge-attrs="{ palette: 'amber' }"/>
        </DemoBox>
      </D1Group>

      <D1Group label="Selection Styles & Control Position">
        <DemoBox>
          <D1NavigationItem
            label="Selection None"
            selection-style="none"
            selected
          />
          <D1NavigationItem
            label="Selection Checkbox (click to toggle)"
            selection-style="checkbox"
            :selected="selectedCheckbox"
            :checkbox-attrs="{ palette: 'blue' }"
            @click="selectedCheckbox = !selectedCheckbox"
          />
          <D1NavigationItem
            label="Selection Radio Alpha"
            selection-style="radio"
            :selected="selectedRadio === 'alpha'"
            :radio-attrs="{ name: 'demo-navigation-radio' }"
            @click="selectedRadio = 'alpha'"
          />
          <D1NavigationItem
            label="Selection Radio Beta"
            selection-style="radio"
            :selected="selectedRadio === 'beta'"
            :radio-attrs="{ name: 'demo-navigation-radio' }"
            @click="selectedRadio = 'beta'"
          />
          <D1NavigationItem
            label="Selection Checkmark (selected)"
            selection-style="checkmark"
            selected
            icon-checkbox="check"
          />
          <D1NavigationItem
            label="Selection Checkmark (unselected)"
            selection-style="checkmark"
            :selected="false"
            icon-checkbox="check"
          />
          <D1NavigationItem
            v-for="position in controlPositionList"
            :key="position"
            :label="`Control Position: ${position}`"
            selection-style="checkbox"
            selected
            :control-position="position"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Highlight & Filter Mode">
        <DemoFlex>
          <D1Button label="Query: 'app'" size="sm" @click="filterQuery = 'app'"/>
          <D1Button label="Query: 'ban'" size="sm" @click="filterQuery = 'ban'"/>
          <D1Button label="Query: 'a' (short)" size="sm" outline @click="filterQuery = 'a'"/>
          <D1Button label="Clear Query" size="sm" outline @click="filterQuery = ''"/>
          <D1Button
            :label="filterActive ? 'filterMode: true' : 'filterMode: false'"
            size="sm"
            outline
            @click="filterActive = !filterActive"
          />
        </DemoFlex>
        <DemoValue label="query" :value="filterQuery"/>
        <DemoBox>
          <D1NavigationItem label="Apple Juice" value="fruit-apple" :highlight="filterQuery" :filter-mode="filterActive"/>
          <D1NavigationItem label="Pineapple" value="fruit-pineapple" :highlight="filterQuery" :filter-mode="filterActive"/>
          <D1NavigationItem label="Banana" value="fruit-banana" :highlight="filterQuery" :filter-mode="filterActive"/>
          <D1NavigationItem label="Match by value (apple)" value="apple" :highlight="filterQuery" :filter-mode="filterActive"/>
          <D1NavigationItem label="Match by search metadata" value="orchard" search="apple orchard cider" :highlight="filterQuery" :filter-mode="filterActive"/>
          <D1NavigationItem label="Min length 3 highlight" :highlight="filterQuery" :highlight-length-start="3" :filter-mode="filterActive"/>
        </DemoBox>
      </D1Group>

      <D1Group label="Sizes, Dense & Dividers">
        <DemoBox>
          <D1NavigationItem label="Size SM" size="sm" icon="looks_one"/>
          <D1NavigationItem label="Size MD (default)" size="md" icon="looks_two"/>
          <D1NavigationItem label="Size LG" size="lg" icon="looks_3"/>
          <D1NavigationItem label="Divider Item 1" divider icon="horizontal_rule"/>
          <D1NavigationItem label="Divider Item 2" divider icon="horizontal_rule"/>
          <D1NavigationItem label="Dense Item 1" dense divider icon="compress"/>
          <D1NavigationItem label="Dense Item 2 (with divider)" dense divider icon="compress"/>
          <D1NavigationItem label="Dense Item 3 (with divider)" dense divider icon="compress"/>
        </DemoBox>
      </D1Group>

      <D1Group label="Palettes & Custom Fill">
        <DemoBox>
          <D1NavigationItem
            v-for="palette in paletteList"
            :key="palette"
            :label="`Palette: ${palette}`"
            :palette="palette"
            selected
            icon="palette"
          />
          <D1NavigationItem label="Palette Blue Open" palette="blue" open icon="info"/>
          <D1NavigationItem label="Palette Green Focus" palette="green" focus icon="check_circle"/>
          <D1NavigationItem label="Palette Indigo Selected Child" palette="indigo" selected-child icon="subdirectory_arrow_right"/>
          <D1NavigationItem label="Custom Hex Fill" fill="#ff0000" icon="palette"/>
          <D1NavigationItem label="Custom RGB Fill" fill="rgb(0, 128, 255)" icon="palette"/>
          <D1NavigationItem label="Custom RGBA Fill" fill="rgba(255, 165, 0, 0.4)" icon="palette"/>
        </DemoBox>
      </D1Group>

      <D1Group label="Tags & Links">
        <DemoBox>
          <D1NavigationItem label="Default Tag (a)" icon="link"/>
          <D1NavigationItem label="Tag Button" tag="button" type="button" icon="smart_button"/>
          <D1NavigationItem label="Tag Div" tag="div" icon="crop_square"/>
          <D1NavigationItem label="Tag Span" tag="span" icon="text_fields"/>
          <D1NavigationItem label="Tag Li" tag="li" icon="format_list_bulleted"/>
          <D1NavigationItem label="Anchor Link (href)" href="#demo-anchor" icon="link"/>
          <D1NavigationItem label="Router Navigation (to string)" to="/component-list-item" icon="route"/>
          <D1NavigationItem label="Router Route Object (to)" :to="{ name: 'home' }" icon="route"/>
        </DemoBox>
      </D1Group>

      <D1Group label="Accessibility (A11y)">
        <DemoBox>
          <D1NavigationItem label="Role Option (selected)" role="option" selected/>
          <D1NavigationItem label="Role Menuitem" role="menuitem" selected/>
          <D1NavigationItem label="Role Menuitem Radio (selected)" role="menuitemradio" selected/>
          <D1NavigationItem label="Role Menuitem Checkbox" role="menuitemcheckbox" :selected="false"/>
          <D1NavigationItem
            label="Custom Element IDs"
            label-id="demo-navigation-item-label-id"
            prefix="PRE"
            prefix-id="demo-navigation-item-prefix-id"
            suffix="SUF"
            suffix-id="demo-navigation-item-suffix-id"
            description="Custom IDs description"
            description-id="demo-navigation-item-description-id"
          />
          <D1NavigationItem
            label="Keyboard Focusable Item"
            description="Focus via Tab and press Enter or Space"
            icon="keyboard"
            tabindex="0"
            role="option"
            aria-label="Keyboard focusable navigation item"
            @keydown="handleKeyboardActivation"
          />
        </DemoBox>
        <DemoValue label="keyboardActivationCount" :value="keyboardActivationCount"/>
      </D1Group>

      <D1Group label="Lazy Rendering">
        <DemoFlex>
          <D1Button
            :label="lazyEnabled ? 'lazy: true' : 'lazy: false'"
            size="sm"
            @click="lazyEnabled = !lazyEnabled"
          />
          <D1Button
            :label="lazyCacheHeight ? 'lazyCacheHeight: true' : 'lazyCacheHeight: false'"
            size="sm"
            outline
            @click="lazyCacheHeight = !lazyCacheHeight"
          />
        </DemoFlex>
        <DemoBox>
          <div class="demo-navigation-item-page__lazy">
            <D1NavigationItem
              v-for="itemIndex in 16"
              :key="itemIndex"
              :label="`Lazy Item ${itemIndex}`"
              :description="`Deferred content row #${itemIndex}`"
              :lazy="lazyEnabled"
              lazy-margin="64px 0px"
              :lazy-cache-height="lazyCacheHeight"
              icon="bolt"
            />
          </div>
        </DemoBox>
      </D1Group>

      <D1Group label="Slots">
        <DemoBox>
          <D1NavigationItem>
            <template #leading>
              <D1Avatar label="NI" size="sm"/>
            </template>
            <template #prefix>
              <span>[PRE]</span>
            </template>
            <template #default>
              <strong>Default Label Slot</strong>
            </template>
            <template #caption>
              <span>Caption Slot</span>
            </template>
            <template #suffix>
              <span>Suffix Slot</span>
            </template>
            <template #description>
              <em>Custom Description Slot</em>
            </template>
            <template #body>
              <div>Extra Body Slot Content</div>
            </template>
            <template #trailing>
              <D1Chip label="Trailing Slot" size="sm"/>
            </template>
          </D1NavigationItem>
        </DemoBox>
      </D1Group>

      <D1Group label="Events & Expose">
        <DemoBox>
          <D1NavigationItem
            ref="exposeTarget"
            label="Interactive NavigationItem"
            description="Click or press Enter to trigger click and clickLite events"
            icon="touch_app"
            icon-trailing="arrow_forward"
            prefix="ID"
            caption="CAP"
            suffix="SUF"
            :index="1"
            value="navigation-item-value"
            :detail="{ source: 'demo' }"
            parent="root-group"
            :list-id="42"
            tabindex="0"
            @click="handleClickEvent"
            @click-lite="handleClickLiteEvent"
          />
        </DemoBox>
        <DemoFlex>
          <D1Button label="Read Expose Methods" size="sm" @click="checkExpose"/>
        </DemoFlex>
        <DemoValue label="expose" :value="exposeResult"/>
        <DemoValue label="event" :value="eventName"/>
        <DemoValue label="payload" :value="eventPayload"/>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoBox>
          <D1NavigationItem label="" description="Empty string label"/>
          <D1NavigationItem label="   " description="Whitespace-only label"/>
          <D1NavigationItem :label="undefined" description="Undefined label"/>
          <D1NavigationItem label="A" description="Single character label"/>
          <D1NavigationItem :label="longSentence" description="Multi-sentence wrapping check"/>
          <D1NavigationItem :label="unbrokenText" description="Unbroken string overflow check"/>
          <D1NavigationItem
            label="Học tiếng Việt / Привет мир 🚀🔥✨"
            caption="Diacritics & Emoji"
            description="Unicode rendering verification across scripts"
            icon="translate"
          />
          <D1NavigationItem
            :label="xssPayload"
            description="XSS string rendered safely as escaped text"
            icon="security"
          />
        </DemoBox>
        <DemoBox>
          <div class="demo-navigation-item-page__narrow">
            <D1NavigationItem
              :label="longSentence"
              prefix="240px"
              caption="Narrow"
              suffix="END"
              description="Constrained 240px container wrapping check"
              icon="view_column"
              badge="99+"
            />
          </div>
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
          <D1NavigationItem
            v-if="isLifecycleMounted"
            label="Lifecycle Managed Lazy Item"
            description="Toggled via v-if to verify observer cleanup"
            lazy
            icon="autorenew"
          />
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-navigation-item-page {
  &__lazy {
    max-height: 200px;
    overflow-y: auto;
  }

  &__narrow {
    max-width: 240px;
  }
}
</style>
