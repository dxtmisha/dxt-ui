<script setup lang="ts">
import { ref } from 'vue'
import type { BadgeProps } from '@dxtmisha/d1/D1Badge'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const countValue = ref<number>(0)
const isHidden = ref<boolean>(false)
const isSelected = ref<boolean>(false)
const isIconTurned = ref<boolean>(false)
const isIconHidden = ref<boolean>(false)
const lifecycleMounted = ref<boolean>(true)

const palettes: readonly NonNullable<BadgeProps['palette']>[] = [
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

const incrementCount = (): void => {
  countValue.value += 25
}

const resetCount = (): void => {
  countValue.value = 0
}

const toggleHide = (): void => {
  isHidden.value = !isHidden.value
}

const toggleSelected = (): void => {
  isSelected.value = !isSelected.value
}

const toggleIconTurn = (): void => {
  isIconTurned.value = !isIconTurned.value
}

const toggleIconHide = (): void => {
  isIconHidden.value = !isIconHidden.value
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Badge">
    <D1Section>
      <D1Group label="Types">
        <DemoFlex>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="mail" size="lg"/>
            <D1Badge label="8" primary/>
          </div>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="notifications" size="lg"/>
            <D1Badge label="new" secondary/>
          </div>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="shopping_cart" size="lg"/>
            <D1Badge label="2" outline/>
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Dot">
        <DemoFlex align="center">
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="mail" size="lg"/>
            <D1Badge dot/>
          </div>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="notifications" size="lg"/>
            <D1Badge dot palette="red"/>
          </div>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="shopping_cart" size="lg"/>
            <D1Badge dot palette="green"/>
          </div>
          <D1Badge dot overlap="static" secondary aria-label="Static secondary dot"/>
          <D1Badge dot overlap="static" outline aria-label="Static outline dot"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Icons & Icon Modifiers">
        <DemoFlex align="center">
          <D1Badge overlap="static" icon="home"/>
          <D1Badge overlap="static" :icon="{ icon: 'star' }" secondary/>
          <D1Badge overlap="static" icon="verified" label="Pro"/>
          <D1Badge
            overlap="static"
            icon="expand_more"
            :icon-turn="isIconTurned"
            :icon-hide="isIconHidden"
            icon-dir
            icon-palette
            :icon-attrs="{ size: 'xs' }"
            label="Turn & Hide"
            outline
          />
          <D1Badge
            overlap="static"
            :icon="{ icon: 'star', iconActive: 'favorite' }"
            :selected="isSelected"
            label="Active Icon"
          />
          <D1Badge overlap="static" :icon="null" label="Null Icon"/>
        </DemoFlex>
        <DemoFlex>
          <D1Button label="Toggle Icon Turn" size="sm" @click="toggleIconTurn"/>
          <D1Button label="Toggle Icon Hide" size="sm" outline @click="toggleIconHide"/>
          <DemoValue label="Icon modifiers" :value="{ isIconTurned, isIconHidden }"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Numbers & Formatting">
        <DemoFlex align="center">
          <D1Badge overlap="static" :label="0"/>
          <D1Badge overlap="static" :label="countValue" :label-max="99"/>
          <D1Badge overlap="static" :label="150" label-max="99" outline/>
          <D1Badge overlap="static" :label="12500" :label-max="9999" formatting language="en-US"/>
          <D1Badge overlap="static" label="12500" formatting language="ru-RU" secondary/>
        </DemoFlex>
        <DemoFlex>
          <D1Button label="Add +25" size="sm" @click="incrementCount"/>
          <D1Button label="Reset to 0" size="sm" outline @click="resetCount"/>
          <DemoValue :value="countValue"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="States">
        <DemoFlex align="center">
          <D1Badge overlap="static" label="Selected Primary" primary selected/>
          <D1Badge overlap="static" label="Selected Secondary" secondary selected/>
          <D1Badge overlap="static" label="Selected Outline" outline selected/>
          <D1Badge overlap="static" label="Interactive Selected" :selected="isSelected"/>
          <D1Badge overlap="static" label="Interactive Hide" :hide="isHidden"/>
          <D1Badge overlap="static" label="" aria-label="Auto hidden empty badge"/>
        </DemoFlex>
        <DemoFlex>
          <D1Button label="Toggle Selected" size="sm" @click="toggleSelected"/>
          <D1Button label="Toggle Hide" size="sm" outline @click="toggleHide"/>
          <DemoValue :value="{ isSelected, isHidden }"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Sizes">
        <DemoFlex align="center">
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="notifications" size="lg"/>
            <D1Badge label="9" size="sm"/>
          </div>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="notifications" size="lg"/>
            <D1Badge label="99" size="md"/>
          </div>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="notifications" size="lg"/>
            <D1Badge label="999+" size="lg"/>
          </div>
          <D1Badge label="None" overlap="static" size="none"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Overlaps">
        <DemoFlex align="center">
          <div class="demo-badge-page__wrapper">
            <div class="demo-badge-page__box demo-badge-page__box--rectangular"></div>
            <D1Badge label="1" overlap="rectangular"/>
          </div>
          <div class="demo-badge-page__wrapper">
            <div class="demo-badge-page__box demo-badge-page__box--circular"></div>
            <D1Badge label="1" overlap="circular"/>
          </div>
          <div class="demo-badge-page__wrapper">
            <div class="demo-badge-page__box"></div>
            <D1Badge label="Static" overlap="static"/>
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Positions">
        <DemoFlex>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="person" size="lg"/>
            <D1Badge dot vertical="top" horizontal="right"/>
          </div>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="person" size="lg"/>
            <D1Badge dot vertical="top" horizontal="center"/>
          </div>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="person" size="lg"/>
            <D1Badge dot vertical="top" horizontal="left"/>
          </div>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="person" size="lg"/>
            <D1Badge dot vertical="center" horizontal="right"/>
          </div>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="person" size="lg"/>
            <D1Badge dot vertical="center" horizontal="center"/>
          </div>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="person" size="lg"/>
            <D1Badge dot vertical="center" horizontal="left"/>
          </div>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="person" size="lg"/>
            <D1Badge dot vertical="bottom" horizontal="right"/>
          </div>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="person" size="lg"/>
            <D1Badge dot vertical="bottom" horizontal="center"/>
          </div>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="person" size="lg"/>
            <D1Badge dot vertical="bottom" horizontal="left"/>
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="All 24 Palettes">
        <DemoFlex>
          <D1Badge
            v-for="palette in palettes"
            :key="palette"
            :label="palette"
            :palette="palette"
            overlap="static"
          />
        </DemoFlex>
        <DemoFlex>
          <D1Badge label="Blue Secondary" palette="blue" secondary overlap="static"/>
          <D1Badge label="Green Outline" palette="green" outline overlap="static"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Compound Integrations">
        <DemoFlex align="center">
          <D1Avatar label="Alex Rivera" badge-dot/>
          <D1Avatar label="Sam Lee" :badge="{ label: '5', palette: 'red' }"/>
          <D1Avatar label="Zero Badge" :badge="0"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Slots & Accessibility">
        <DemoFlex align="center">
          <D1Badge
            overlap="static"
            label-id="demo-badge-custom-id"
            aria-label="3 unread notifications"
            role="status"
            aria-live="polite"
          >
            3
          </D1Badge>
          <D1Badge overlap="static" icon="mail">
            <template #default>Custom Slot</template>
          </D1Badge>
          <D1Badge
            dot
            overlap="static"
            role="status"
            aria-label="Active status indicator"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoFlex align="center">
          <D1Badge overlap="static" data-testid="demo-badge-empty"/>
          <D1Badge overlap="static" label="   " aria-label="Whitespace badge"/>
          <D1Badge overlap="static" label="A"/>
          <D1Badge overlap="static" :label="-5"/>
          <D1Badge overlap="static" :label="12.5"/>
          <D1Badge overlap="static" label="Unicode • Tiếng Việt • Кириллица 🚀"/>
          <D1Badge overlap="static" label="<img src=x onerror=alert(1)>"/>
          <D1Badge overlap="static" label="<script>alert('xss')</script>"/>
        </DemoFlex>
        <DemoBox class="demo-badge-page__narrow-box">
          <D1Badge
            overlap="static"
            label="SuperLongUnbrokenBadgeTokenWithoutSpaces1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="SSR & Lifecycle">
        <DemoFlex align="center">
          <D1Button
            :label="lifecycleMounted ? 'Unmount Badge' : 'Mount Badge'"
            size="sm"
            outline
            @click="lifecycleMounted = !lifecycleMounted"
          />
          <D1Badge
            v-if="lifecycleMounted"
            overlap="static"
            label="Mounted"
            palette="green"
          />
          <DemoValue label="Mounted" :value="lifecycleMounted"/>
        </DemoFlex>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-badge-page {
  &__wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    @include ui.backgroundColor(ui.v('?sys.palette.outline'), 0.12);
    border-radius: 8px;
    padding: 8px;
  }

  &__box {
    width: 40px;
    height: 40px;
    @include ui.backgroundColor(ui.v('?sys.palette.primary'), 0.24);

    &--rectangular {
      border-radius: 4px;
    }

    &--circular {
      border-radius: 50%;
    }
  }

  &__narrow-box {
    max-width: 220px;
    overflow: hidden;
  }
}
</style>
