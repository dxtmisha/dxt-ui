<script setup lang="ts">
import { ref } from 'vue'
import type { InputCodeItemExpose } from '@dxtmisha/constructor/InputCodeItem'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()
const exposeRef = ref<InputCodeItemExpose>()
const exposeValue = ref<string>('')
const isMounted = ref<boolean>(true)
const dynamicDisabled = ref<boolean>(false)

const callSet = (value: string): void => {
  exposeRef.value?.set(value)
  exposeValue.value = exposeRef.value?.getValue() ?? ''
}

const callReset = (): void => {
  exposeRef.value?.reset()
  exposeValue.value = exposeRef.value?.getValue() ?? ''
}

const callFocus = (): void => {
  exposeRef.value?.focusInput()
}

const callTabindex = (value: number | undefined): void => {
  exposeRef.value?.setTabindex(value)
}
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="InputCodeItem">
    <D1Section>
      <D1Group label="Basic & Sizes">
        <DemoFlex>
          <D1InputCodeItem size="sm" placeholder="S" :index="0" text-symbol="Small cell [index]" />
          <D1InputCodeItem size="md" placeholder="M" :index="1" text-symbol="Medium cell [index]" />
          <D1InputCodeItem size="lg" placeholder="L" :index="2" text-symbol="Large cell [index]" />
          <D1InputCodeItem size="display" placeholder="D" :index="3" text-symbol="Display cell [index]" />
        </DemoFlex>
      </D1Group>

      <D1Group label="States (Default, Hide, Success, Error, Disabled, Skeleton)">
        <DemoFlex>
          <D1Button
            :label="dynamicDisabled ? 'Enable Cell' : 'Disable Cell'"
            data-testid="ici-toggle-disabled"
            @click="dynamicDisabled = !dynamicDisabled"
          />
        </DemoFlex>
        <DemoFlex>
          <D1InputCodeItem placeholder="0" :disabled="dynamicDisabled" data-testid="ici-state-toggle" />
          <D1InputCodeItem hide placeholder="*" data-testid="ici-state-hide" />
          <D1InputCodeItem success placeholder="✓" data-testid="ici-state-success" />
          <D1InputCodeItem error placeholder="!" data-testid="ici-state-error" />
          <D1InputCodeItem disabled placeholder="×" data-testid="ici-state-disabled" />
        </DemoFlex>
        <D1Skeleton :active="true">
          <DemoFlex>
            <D1InputCodeItem is-skeleton data-testid="ici-state-skeleton" />
            <D1InputCodeItem is-skeleton />
          </DemoFlex>
        </D1Skeleton>
      </D1Group>

      <D1Group label="Palettes">
        <DemoFlex>
          <D1InputCodeItem palette="blue" placeholder="B" />
          <D1InputCodeItem palette="emerald" placeholder="E" />
          <D1InputCodeItem palette="amber" placeholder="A" />
          <D1InputCodeItem palette="rose" placeholder="R" />
          <D1InputCodeItem palette="violet" placeholder="V" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Sibling Navigation (move: true vs move: false) & Match">
        <DemoFlex data-testid="ici-siblings">
          <D1InputCodeItem :index="0" :move="true" name="pin" placeholder="•" text-symbol="Pin digit [index]" />
          <D1InputCodeItem :index="1" :move="true" name="pin" placeholder="•" text-symbol="Pin digit [index]" />
          <D1InputCodeItem :index="2" :move="true" name="pin" placeholder="•" text-symbol="Pin digit [index]" />
        </DemoFlex>
        <DemoFlex>
          <D1InputCodeItem
            :index="0"
            :move="false"
            :match="/[a-zA-Z0-9]/"
            input-mode="text"
            autocomplete="off"
            placeholder="A"
            text-symbol="Alphanumeric [index]"
            data-testid="ici-alpha"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Expose API & Events">
        <DemoFlex>
          <D1Button label="Set '7'" data-testid="ici-btn-set" @click="callSet('7')" />
          <D1Button label="Reset" outline data-testid="ici-btn-reset" @click="callReset" />
          <D1Button label="Focus" outline data-testid="ici-btn-focus" @click="callFocus" />
          <D1Button label="Tabindex -1" outline data-testid="ici-btn-tab-off" @click="callTabindex(-1)" />
          <D1Button label="Tabindex 0" outline data-testid="ici-btn-tab-on" @click="callTabindex(0)" />
        </DemoFlex>
        <DemoFlex>
          <D1InputCodeItem
            ref="exposeRef"
            :index="0"
            :tabindex="0"
            name="demo-code"
            placeholder="0"
            text-symbol="Code digit [index]"
            data-testid="ici-expose"
            @focus="onEvent('focus', $event)"
            @input="(index, value) => { exposeValue = value; onEvent('input', index, value) }"
            @paste="(index, value) => onEvent('paste', index, value)"
            @backspace="onEvent('backspace', $event)"
          />
        </DemoFlex>
        <DemoValue :value="exposeValue" label="Current Cell Value" />
        <DemoValue :value="eventName" label="Last Event" />
      </D1Group>

      <D1Group label="Boundary & Narrow Container">
        <DemoBox class="demo-input-code-item-page__narrow">
          <DemoFlex>
            <D1InputCodeItem :index="0" placeholder="0" :tabindex="-1" text-symbol="Zero test [index]" data-testid="ici-narrow" />
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Lifecycle (v-if Mount / Unmount)">
        <DemoFlex>
          <D1Button
            :label="isMounted ? 'Unmount' : 'Mount'"
            data-testid="ici-toggle-mount"
            @click="isMounted = !isMounted"
          />
        </DemoFlex>
        <DemoFlex v-if="isMounted">
          <D1InputCodeItem :index="0" placeholder="•" data-testid="ici-lifecycle" />
        </DemoFlex>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-input-code-item-page {
  &__narrow {
    max-width: 240px;
  }
}
</style>
