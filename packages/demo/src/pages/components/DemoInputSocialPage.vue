<script setup lang="ts">
import { ref } from 'vue'
import type { InputSocialExpose } from '@dxtmisha/constructor/InputSocial'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const telegramVal = ref<string>('dxtmisha')
const githubVal = ref<string>('dxt-ui')
const youtubeVal = ref<string>('')
const plainVal = ref<string>('custom_handle')
const dynamicSocialType = ref<'telegram' | 'github' | 'instagram' | undefined>('telegram')
const isDynamicDisabled = ref<boolean>(false)
const isDynamicReadonly = ref<boolean>(false)
const isLifecycleMounted = ref<boolean>(true)

const socialRef = ref<InputSocialExpose>()
const exposeOutput = ref<string>('No expose action executed yet')

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const handleTrackEvent = (name: string, payload: unknown): void => {
  onEvent(name, payload)
  eventPayload.value = JSON.stringify(payload)
}

const handleReadExposed = (): void => {
  const value = socialRef.value?.getValue()
  const valid = socialRef.value?.checkValidity()
  exposeOutput.value = `value=${String(value)}, valid=${String(valid)}`
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="InputSocial">
    <D1Section class="demo-input-social-page">
      <D1Group label="Social Network Types (Interactive v-model)">
        <DemoFlex>
          <DemoBox style="width: 300px;">
            <D1InputSocial v-model="telegramVal" social-type="telegram" cancel="always"/>
            <DemoValue :value="telegramVal" label="Telegram"/>
          </DemoBox>
          <DemoBox style="width: 300px;">
            <D1InputSocial v-model="githubVal" social-type="github"/>
            <DemoValue :value="githubVal" label="GitHub"/>
          </DemoBox>
          <DemoBox style="width: 300px;">
            <D1InputSocial v-model="youtubeVal" social-type="youtube"/>
            <DemoValue :value="youtubeVal" label="YouTube"/>
          </DemoBox>
          <DemoBox style="width: 300px;">
            <D1InputSocial social-type="instagram"/>
          </DemoBox>
          <DemoBox style="width: 300px;">
            <D1InputSocial social-type="vk"/>
          </DemoBox>
          <DemoBox style="width: 300px;">
            <D1InputSocial social-type="discord"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Custom socialIcons (Partial Dictionary Fallback) & Plain Mode">
        <DemoFlex>
          <D1Button label="Telegram" outline @click="dynamicSocialType = 'telegram'"/>
          <D1Button label="GitHub (Custom Icon)" outline @click="dynamicSocialType = 'github'"/>
          <D1Button label="Instagram (Fallback)" outline @click="dynamicSocialType = 'instagram'"/>
          <D1Button label="None (Plain Input)" outline @click="dynamicSocialType = undefined"/>
        </DemoFlex>
        <D1InputSocial
          v-model="plainVal"
          :social-type="dynamicSocialType"
          :social-icons="{ github: 'code' }"
          helper-message="Uses custom icon for GitHub and falls back to default for others"
        />
        <DemoValue :value="plainVal" label="Value"/>
      </D1Group>

      <D1Group label="States, Validation & Skeleton">
        <DemoFlex>
          <DemoBox>
            <D1InputSocial social-type="instagram" value="misha_ivanov" :success="true"/>
          </DemoBox>
          <DemoBox>
            <D1InputSocial social-type="vk" :loading="true"/>
          </DemoBox>
          <DemoBox>
            <D1InputSocial social-type="x" disabled value="disabled_user"/>
          </DemoBox>
          <DemoBox>
            <D1InputSocial social-type="telegram" readonly value="readonly_user"/>
          </DemoBox>
          <DemoBox>
            <D1InputSocial
              social-type="github"
              validation-message="Username is required"
              force-show-message
            />
          </DemoBox>
          <DemoBox>
            <D1Skeleton :active="true">
              <D1InputSocial social-type="telegram" is-skeleton/>
            </D1Skeleton>
          </DemoBox>
        </DemoFlex>

        <D1InputSocial
          social-type="telegram"
          value="toggle_target"
          :disabled="isDynamicDisabled"
          :readonly="isDynamicReadonly"
        />
        <DemoFlex>
          <D1Button label="Toggle Disabled" outline @click="isDynamicDisabled = !isDynamicDisabled"/>
          <D1Button label="Toggle Readonly" outline @click="isDynamicReadonly = !isDynamicReadonly"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Slots">
        <D1InputSocial social-type="telegram" value="slot_user">
          <template #label>
            <strong>Custom #label Slot</strong>
          </template>
          <template #caption>
            <span>Custom #caption</span>
          </template>
        </D1InputSocial>
      </D1Group>

      <D1Group label="Programmatic Control (Expose)">
        <DemoFlex>
          <D1Button label="setValue('dev_account')" @click="socialRef?.setValue('dev_account'); handleReadExposed()"/>
          <D1Button label="clear()" outline @click="socialRef?.clear(); handleReadExposed()"/>
          <D1Button label="Read Expose" outline @click="handleReadExposed"/>
        </DemoFlex>
        <D1InputSocial
          ref="socialRef"
          social-type="telegram"
        />
        <DemoValue :value="exposeOutput" label="Expose state"/>
      </D1Group>

      <D1Group label="Events">
        <D1InputSocial
          social-type="telegram"
          @input="(event, data) => handleTrackEvent('input', { type: event.type, value: data.value })"
          @input-lite="(data) => handleTrackEvent('inputLite', data)"
          @change="(event, data) => handleTrackEvent('change', { type: event.type, value: data.value })"
          @change-lite="(data) => handleTrackEvent('changeLite', data)"
          @focus="(event) => handleTrackEvent('focus', { type: event.type })"
          @blur="(event) => handleTrackEvent('blur', { type: event.type })"
          @update:model-value="(val) => handleTrackEvent('update:modelValue', { val })"
        />
        <DemoValue :value="eventName" label="Last Event"/>
        <DemoValue :value="eventPayload" label="Last Payload"/>
      </D1Group>

      <D1Group label="Boundary & Lifecycle">
        <DemoBox style="width: 240px;">
          <D1InputSocial
            social-type="telegram"
            value="very_long_social_account_identifier_123456"
          />
        </DemoBox>
        <DemoFlex>
          <D1Button label="Toggle Mount (v-if)" outline @click="isLifecycleMounted = !isLifecycleMounted"/>
        </DemoFlex>
        <D1InputSocial
          v-if="isLifecycleMounted"
          social-type="github"
          value="active_org"
        />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
