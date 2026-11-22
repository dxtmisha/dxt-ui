<script setup lang="ts">
import { ref } from 'vue'
import type { ListItemExpose } from '@dxtmisha/constructor/ListItem'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const filterQuery = ref<string>('app')
const filterActive = ref<boolean>(true)
const selectedCheckbox = ref<boolean>(true)
const selectedRadio = ref<string>('alpha')
const lazyEnabled = ref<boolean>(true)
const lazyCacheHeight = ref<boolean>(true)
const exposeTarget = ref<ListItemExpose | null>(null)
const exposeResult = ref<Record<string, unknown>>({})

const checkExpose = (): void => {
  exposeResult.value = {
    value: exposeTarget.value?.getValue?.(),
    detail: exposeTarget.value?.getDetail?.()
  }
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="ListItem">
    <D1Section>
      <D1Group label="Basic & Data Formats">
        <DemoBox>
          <D1ListItem label="Simple Label"/>
          <D1ListItem>Default Slot Label</D1ListItem>
          <D1ListItem
            :label="0"
            :caption="0"
            :description="0"
            :badge="0"
          />
          <D1ListItem
            label="Full Text Composition"
            prefix="01"
            caption="Caption"
            suffix="Shortcut"
            description="Detailed description text for this list item"
          />
          <D1ListItem
            label="Decorative Caption"
            caption="Hidden from screen readers"
            caption-decorative
          />
        </DemoBox>
      </D1Group>

      <D1Group label="States">
        <DemoBox>
          <D1ListItem label="Default"/>
          <D1ListItem label="Focus" focus/>
          <D1ListItem label="Open" open/>
          <D1ListItem label="Selected" selected/>
          <D1ListItem label="Selected Child" selected-child/>
          <D1ListItem label="Readonly" readonly/>
          <D1ListItem label="Disabled" disabled/>
          <D1ListItem label="Loading (boolean)" loading/>
          <D1ListItem label="Loading (object)" :loading="{ visible: true, circular: true }"/>
        </DemoBox>
      </D1Group>

      <D1Group label="Skeleton">
        <DemoBox>
          <D1Skeleton :active="true">
            <D1ListItem
              is-skeleton
              prefix="01"
              caption="Meta"
              suffix="END"
              description="Short skeleton description"
            >
              Skeleton Item A
            </D1ListItem>
            <D1ListItem
              is-skeleton
              description="A longer description demonstrating skeleton sizing across text lines"
            >
              Skeleton Item B with Longer Label
            </D1ListItem>
          </D1Skeleton>
        </DemoBox>
      </D1Group>

      <D1Group label="Icons & Alignment">
        <DemoBox>
          <D1ListItem label="Icon String" icon="home"/>
          <D1ListItem label="Icon Object" :icon="{ icon: 'person', size: 'sm' }" :icon-attrs="{ active: true }"/>
          <D1ListItem label="Icon Palette" icon="star" icon-palette/>
          <D1ListItem label="Trailing Icon" icon="folder" icon-trailing="chevron_right"/>
          <D1ListItem label="Trailing Icon Turned" icon="tune" icon-trailing="keyboard_arrow_down" icon-turn/>
          <D1ListItem label="Trailing Turn Only" icon="arrow_forward" icon-trailing="expand_more" icon-turn icon-trailing-turn-only/>
          <D1ListItem label="Icon Dir (RTL)" icon="arrow_back" icon-dir/>
          <D1ListItem label="Trailing Dir Only" icon="folder" icon-trailing="arrow_forward" icon-dir icon-trailing-dir-only/>
          <D1ListItem label="Trailing Palette" icon="notifications" icon-trailing="circle" icon-trailing-palette/>
          <D1ListItem label="Hidden Icon" icon="lock" icon-hide/>
          <D1ListItem label="Icon Align Center (default)" icon="settings" icon-align="center"/>
          <D1ListItem label="Icon Align Edge" icon="settings" icon-align="edge"/>
          <D1ListItem
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
          <D1ListItem label="Badge String" icon="inbox" badge="new"/>
          <D1ListItem label="Badge Number" icon="mail" :badge="12"/>
          <D1ListItem label="Badge Object" icon="notifications" :badge="{ label: 120, labelMax: 99 }"/>
          <D1ListItem label="Badge Dot" icon="chat" badge-dot/>
          <D1ListItem label="Badge with badgeAttrs" icon="star" badge="VIP" :badge-attrs="{ palette: 'amber' }"/>
        </DemoBox>
      </D1Group>

      <D1Group label="Selection Styles & Control Position">
        <DemoBox>
          <D1ListItem
            label="Selection Checkbox (click to toggle)"
            selection-style="checkbox"
            :selected="selectedCheckbox"
            :checkbox-attrs="{ palette: 'blue' }"
            @click="selectedCheckbox = !selectedCheckbox"
          />
          <D1ListItem
            label="Selection Radio Alpha"
            selection-style="radio"
            :selected="selectedRadio === 'alpha'"
            :radio-attrs="{ name: 'demo-list-radio' }"
            @click="selectedRadio = 'alpha'"
          />
          <D1ListItem
            label="Selection Radio Beta"
            selection-style="radio"
            :selected="selectedRadio === 'beta'"
            :radio-attrs="{ name: 'demo-list-radio' }"
            @click="selectedRadio = 'beta'"
          />
          <D1ListItem
            label="Selection Checkmark (selected)"
            selection-style="checkmark"
            selected
            icon-checkbox="check"
          />
          <D1ListItem
            label="Selection Checkmark (unselected)"
            selection-style="checkmark"
            :selected="false"
            icon-checkbox="check"
          />
          <D1ListItem
            label="Control Position Start"
            selection-style="checkbox"
            selected
            control-position="start"
          />
          <D1ListItem
            label="Control Position End"
            selection-style="checkbox"
            selected
            control-position="end"
          />
          <D1ListItem
            label="Control Position Auto MD"
            selection-style="checkbox"
            selected
            control-position="autoMd"
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
          <D1ListItem label="Apple Juice" value="fruit-apple" :highlight="filterQuery" :filter-mode="filterActive"/>
          <D1ListItem label="Pineapple" value="fruit-pineapple" :highlight="filterQuery" :filter-mode="filterActive"/>
          <D1ListItem label="Banana" value="fruit-banana" :highlight="filterQuery" :filter-mode="filterActive"/>
          <D1ListItem label="Match by value (apple)" value="apple" :highlight="filterQuery" :filter-mode="filterActive"/>
          <D1ListItem label="Match by search metadata" value="orchard" search="apple orchard cider" :highlight="filterQuery" :filter-mode="filterActive"/>
          <D1ListItem label="Min length 3 highlight" :highlight="filterQuery" :highlight-length-start="3" :filter-mode="filterActive"/>
        </DemoBox>
      </D1Group>

      <D1Group label="Sizes, Dense & Dividers">
        <DemoBox>
          <D1ListItem label="Size SM" size="sm" icon="looks_one"/>
          <D1ListItem label="Size MD (default)" size="md" icon="looks_two"/>
          <D1ListItem label="Size LG" size="lg" icon="looks_3"/>
          <D1ListItem label="Dense Item 1" dense divider icon="compress"/>
          <D1ListItem label="Dense Item 2 (with divider)" dense divider icon="compress"/>
          <D1ListItem label="Dense Item 3 (with divider)" dense divider icon="compress"/>
        </DemoBox>
      </D1Group>

      <D1Group label="Palettes & Custom Fill">
        <DemoBox>
          <D1ListItem label="Palette Red Selected" palette="red" selected icon="favorite"/>
          <D1ListItem label="Palette Blue Open" palette="blue" open icon="info"/>
          <D1ListItem label="Palette Green Focus" palette="green" focus icon="check_circle"/>
          <D1ListItem label="Custom Hex Fill" fill="#ff0000" icon="palette"/>
          <D1ListItem label="Custom RGB Fill" fill="rgb(0, 128, 255)" icon="palette"/>
          <D1ListItem label="Custom RGBA Fill" fill="rgba(255, 165, 0, 0.4)" icon="palette"/>
        </DemoBox>
      </D1Group>

      <D1Group label="Tags, Links & ARIA Roles">
        <DemoBox>
          <D1ListItem label="Tag Button" tag="button" type="button" icon="smart_button"/>
          <D1ListItem label="Anchor Link (href)" href="#demo-anchor" icon="link"/>
          <D1ListItem label="Router Navigation (to)" to="/component-list-item" icon="route"/>
          <D1ListItem label="Router Route Object (to)" :to="{ name: 'component-list-item' }" icon="route"/>
          <D1ListItem label="Role Option (selected)" role="option" selected/>
          <D1ListItem label="Role Menuitem Radio (selected)" role="menuitemradio" selected/>
          <D1ListItem label="Role Menuitem Checkbox" role="menuitemcheckbox" :selected="false"/>
          <D1ListItem
            label="Custom Element IDs"
            label-id="demo-list-item-label-id"
            prefix="PRE"
            prefix-id="demo-list-item-prefix-id"
            suffix="SUF"
            suffix-id="demo-list-item-suffix-id"
            description="Custom IDs description"
            description-id="demo-list-item-description-id"
          />
        </DemoBox>
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
          <div class="demo-list-item-page__lazy">
            <D1ListItem
              v-for="itemIndex in 16"
              :key="itemIndex"
              :label="'Lazy Item ' + itemIndex"
              :description="'Deferred content row #' + itemIndex"
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
          <D1ListItem>
            <template #leading>
              <D1Avatar label="LI" size="sm"/>
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
          </D1ListItem>
        </DemoBox>
      </D1Group>

      <D1Group label="Events & Expose">
        <DemoBox>
          <D1ListItem
            ref="exposeTarget"
            label="Interactive ListItem"
            description="Click or press Enter to trigger click and clickLite events"
            icon="touch_app"
            icon-trailing="arrow_forward"
            prefix="ID"
            caption="CAP"
            suffix="SUF"
            :index="1"
            value="list-item-value"
            :detail="{ source: 'demo' }"
            parent="root-group"
            :list-id="42"
            tabindex="0"
            @click="(event, value) => onEvent('click', event, value)"
            @click-lite="(value) => onEvent('clickLite', value)"
          />
        </DemoBox>
        <DemoFlex>
          <D1Button label="Read Expose Methods" size="sm" @click="checkExpose"/>
        </DemoFlex>
        <DemoValue label="expose" :value="exposeResult"/>
        <DemoValue label="event" :value="eventName"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-list-item-page {
  &__lazy {
    max-height: 200px;
    overflow-y: auto;
  }
}
</style>
