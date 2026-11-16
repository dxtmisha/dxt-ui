<script setup lang="ts">
import { ref } from 'vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const countValue = ref<number>(0)
const isHidden = ref<boolean>(false)
const isSelected = ref<boolean>(false)

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
        <DemoFlex>
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
        </DemoFlex>
      </D1Group>

      <D1Group label="Icons">
        <DemoFlex>
          <D1Badge overlap="static" icon="home"/>
          <D1Badge overlap="static" :icon="{ icon: 'star' }" secondary/>
          <D1Badge overlap="static" icon="verified" label="Pro"/>
          <D1Badge overlap="static" icon="expand_more" iconTurn label="Turn" outline/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Numbers & Formatting">
        <DemoFlex>
          <D1Badge overlap="static" :label="0"/>
          <D1Badge overlap="static" :label="countValue" :label-max="99"/>
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
        <DemoFlex>
          <D1Badge overlap="static" label="Selected Primary" primary selected/>
          <D1Badge overlap="static" label="Selected Secondary" secondary selected/>
          <D1Badge overlap="static" label="Selected Outline" outline selected/>
          <D1Badge overlap="static" label="Interactive Selected" :selected="isSelected"/>
          <D1Badge overlap="static" label="Interactive Hide" :hide="isHidden"/>
          <D1Badge overlap="static" label="" ariaLabel="Auto hidden empty badge"/>
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
        </DemoFlex>
        <DemoFlex align="center">
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
            <D1Badge dot vertical="center" horizontal="center"/>
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

      <D1Group label="Palettes">
        <DemoFlex>
          <D1Badge label="Red" palette="red" overlap="static"/>
          <D1Badge label="Green" palette="green" overlap="static"/>
          <D1Badge label="Blue" palette="blue" overlap="static"/>
          <D1Badge label="Orange" palette="orange" overlap="static"/>
          <D1Badge label="Purple" palette="purple" overlap="static"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Slots & Accessibility">
        <DemoFlex>
          <D1Badge overlap="static" label-id="demo-badge-custom-id" aria-label="3 unread notifications">
            3
          </D1Badge>
          <D1Badge overlap="static" icon="mail">
            <template #default>Custom Slot</template>
          </D1Badge>
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
}
</style>
