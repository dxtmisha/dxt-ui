<script setup lang="ts">
import { ref } from 'vue'
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

const onToggleDivider = () => {
  dynamicDivider.value = !dynamicDivider.value
}

const onInspectExpose = () => {
  const value = exposeTarget.value?.getValue?.()
  const detail = exposeTarget.value?.getDetail?.()
  exposeOutput.value = `value=${String(value)}, detail=${JSON.stringify(detail)}`
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
      <D1Group label="Basic">
        <DemoBox>
          <DemoFlex>
            <D1AlertLink label="Default Link" />
            <D1AlertLink :label="0" />
            <D1AlertLink label="Custom Label ID" labelId="demo-alert-link-custom-id" />
            <D1AlertLink />
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
            <D1AlertLink label="Router Link (Home)" :to="{ name: 'home' }" />
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

      <D1Group label="Boundary & Edge Cases">
        <DemoBox>
          <DemoFlex direction="column">
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
              label="Học tiếng Việt • Подробнее • 日本語リンク • 🔗"
            />
            <D1AlertLink
              :divider="false"
              label="<script>alert('xss')</script>"
            />
          </DemoFlex>
        </DemoBox>
      </D1Group>

      <D1Group label="Events & Expose">
        <DemoFlex>
          <D1AlertLink
            ref="exposeTarget"
            label="Value & Detail Link"
            value="security-guide"
            :detail="{ category: 'auth', priority: 1 }"
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
        </DemoFlex>
        <DemoValue :value="eventName" />
        <DemoValue :value="lastPayload" />
        <DemoValue :value="exposeOutput" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
</style>
