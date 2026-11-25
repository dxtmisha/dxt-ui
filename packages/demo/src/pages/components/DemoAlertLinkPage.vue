<script setup lang="ts">
import { nextTick, ref } from 'vue'
import type { AlertLinkExpose } from '@dxtmisha/constructor/AlertLink'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()
const dynamicDivider = ref(true)
const exposeTarget = ref<AlertLinkExpose>()
const exposeOutput = ref<string>('Not inspected yet')
const lastPayload = ref<string>('none')
const dynamicValue = ref<string>('security-guide')
const dynamicDetail = ref<Record<string, unknown>>({ category: 'auth', priority: 1 })
const lifecycleMounted = ref(true)

const onToggleDivider = () => {
  dynamicDivider.value = !dynamicDivider.value
}

const onInspectExpose = () => {
  const value = exposeTarget.value?.getValue?.()
  const detail = exposeTarget.value?.getDetail?.()
  exposeOutput.value = `value=${String(value)}, detail=${JSON.stringify(detail)}`
}

const onCycleDynamicExpose = async () => {
  if (dynamicValue.value === 'security-guide') {
    dynamicValue.value = 'audit-report'
    dynamicDetail.value = { category: 'audit', priority: 2 }
  } else {
    dynamicValue.value = 'security-guide'
    dynamicDetail.value = { category: 'auth', priority: 1 }
  }
  await nextTick()
  onInspectExpose()
}

const onTrackClick = (name: string, ...args: unknown[]) => {
  onEvent(name, ...args)
  const payload = name === 'click' ? args[1] : args[0]
  lastPayload.value = JSON.stringify(payload)
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="AlertLink">
    <D1Section>
      <D1Group label="Basic & Data Formats">
        <DemoBox>
          <DemoFlex>
            <D1AlertLink label="Default Link" />
            <D1AlertLink :label="0" />
            <D1AlertLink :label="-3.14" />
            <D1AlertLink label="Custom Label ID" labelId="demo-alert-link-custom-id" />
            <D1AlertLink />
          </DemoFlex>
        </DemoBox>
        <DemoBox>
          <DemoFlex>
            <D1AlertLink
              label="Numeric Value (0)"
              :value="0"
              :index="0"
              @click="(event, value) => onTrackClick('click', event, value)"
              @click-lite="(value) => onTrackClick('clickLite', value)"
            />
            <D1AlertLink
              label="Negative Value (-5)"
              :value="-5"
              @click="(event, value) => onTrackClick('click', event, value)"
              @click-lite="(value) => onTrackClick('clickLite', value)"
            />
            <D1AlertLink
              label="Boolean Value (true)"
              :value="true"
              @click="(event, value) => onTrackClick('click', event, value)"
              @click-lite="(value) => onTrackClick('clickLite', value)"
            />
            <D1AlertLink
              label="Object Value"
              :value="{ id: 1, scope: 'admin' }"
              @click="(event, value) => onTrackClick('click', event, value)"
              @click-lite="(value) => onTrackClick('clickLite', value)"
            />
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Divider">
        <DemoBox>
          <DemoFlex>
            <D1AlertLink label="First Link" />
            <D1AlertLink label="Second Link" />
            <D1AlertLink label="Third Link" />
          </DemoFlex>
        </DemoBox>
        <DemoBox>
          <DemoFlex>
            <D1AlertLink label="No Divider 1" :divider="false" />
            <D1AlertLink label="No Divider 2" :divider="false" />
            <D1AlertLink label="No Divider 3" :divider="false" />
          </DemoFlex>
        </DemoBox>
        <DemoFlex>
          <D1Button
            :label="`Toggle Divider (${dynamicDivider ? 'on' : 'off'})`"
            size="sm"
            outline
            @click="onToggleDivider"
          />
        </DemoFlex>
        <DemoBox>
          <DemoFlex>
            <D1AlertLink label="Leading Link" :divider="dynamicDivider" />
            <D1AlertLink label="Middle Link" :divider="dynamicDivider" />
            <D1AlertLink label="Trailing Link" :divider="dynamicDivider" />
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Navigation">
        <DemoBox>
          <DemoFlex>
            <D1AlertLink label="Anchor Href (#section)" href="#demo-alert-link-section" />
            <D1AlertLink
              label="External Link"
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            />
            <D1AlertLink label="Router Object (Home)" :to="{ name: 'home' }" />
            <D1AlertLink label="Router String (/)" to="/" />
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Slots">
        <DemoBox>
          <DemoFlex>
            <D1AlertLink>
              <template #default>
                <strong>Slotted Content Only</strong>
              </template>
            </D1AlertLink>
            <D1AlertLink label="Label With ">
              <template #default>
                <span>Appended Slot</span>
              </template>
            </D1AlertLink>
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Compound Usage Inside Alert">
        <D1Alert
          label="Embedded Alert Links"
          description="Inherits --d1-alert-linkGap spacing inside D1Alert."
          icon="info"
          :links="[
            { label: 'Review details', value: 'details' },
            { label: 'Documentation', href: '#docs' },
            { label: 'Settings', to: '/' }
          ]"
          @link="(event, value) => onTrackClick('alertLink', event, value)"
        />
      </D1Group>

      <D1Group label="Accessibility">
        <DemoBox>
          <DemoFlex>
            <D1AlertLink
              label="Action Button Semantics"
              aria-label="Open interactive security action"
              @click="(event, value) => onTrackClick('click', event, value)"
            />
            <D1AlertLink
              label="Native Anchor Navigation"
              href="#accessible-section"
              aria-label="Jump to accessible section"
            />
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoBox>
          <DemoFlex direction="column">
            <D1AlertLink :divider="false" label="" />
            <D1AlertLink :divider="false" label="   " />
            <D1AlertLink :divider="false" label="A" />
            <D1AlertLink
              :divider="false"
              label="Very long alert link label demonstrating wrapping behavior inside narrow containers and responsive mobile viewports"
            />
            <D1AlertLink
              :divider="false"
              label="UnbrokenTokenStringABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            />
            <D1AlertLink
              :divider="false"
              label="Unicode: Học tiếng Việt • Кириллица • 日本語リンク • 🔗"
            />
            <D1AlertLink
              :divider="false"
              label="<script>alert('xss')</script>"
            />
          </DemoFlex>
        </DemoBox>
        <DemoBox class="demo-alert-link-page__narrow-box">
          <D1AlertLink label="Constrained Narrow Box Link" />
          <D1AlertLink label="Second Narrow Link" />
        </DemoBox>
      </D1Group>

      <D1Group label="Events, Expose & Lifecycle">
        <DemoFlex>
          <D1AlertLink
            v-if="lifecycleMounted"
            ref="exposeTarget"
            label="Value & Detail Link"
            :value="dynamicValue"
            :detail="dynamicDetail"
            @click="(event, value) => onTrackClick('click', event, value)"
            @click-lite="(value) => onTrackClick('clickLite', value)"
          />
          <D1AlertLink
            label="Index Fallback Link"
            index="fallback-index"
            @click="(event, value) => onTrackClick('click', event, value)"
            @click-lite="(value) => onTrackClick('clickLite', value)"
          />
          <D1Button label="Inspect Expose" size="sm" outline @click="onInspectExpose" />
          <D1Button label="Cycle Value & Detail" size="sm" outline @click="onCycleDynamicExpose" />
          <D1Button
            :label="lifecycleMounted ? 'Unmount Link' : 'Mount Link'"
            size="sm"
            secondary
            @click="lifecycleMounted = !lifecycleMounted"
          />
        </DemoFlex>
        <DemoValue :value="eventName" />
        <DemoValue label="Payload" :value="lastPayload" />
        <DemoValue label="Expose" :value="exposeOutput" />
        <DemoValue label="Mounted" :value="lifecycleMounted" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-alert-link-page {
  &__narrow-box {
    max-width: 240px;
  }
}
</style>
