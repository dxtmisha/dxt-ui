<script setup lang="ts">
import { ref } from 'vue'
import type { TextareaAutosizeExpose } from '@dxtmisha/constructor/TextareaAutosize'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const valueControlled = ref<string>('First line of auto-growing text.\nSecond line grows the height automatically.')
const valueDisabledAutosize = ref<string>('Autosize is disabled here.\nLine 2\nLine 3\nLine 4\nLine 5')
const valueMaxlength = ref<string>('Up to 80 characters')
const valueDynamicToggle = ref<string>('Line 1\nLine 2\nLine 3')
const isAutosizeEnabled = ref<boolean>(true)

const valueEvents = ref<string>('')
const eventPayload = ref<string>('No input event yet')
const blockedCount = ref<number>(0)

const exposeRef = ref<TextareaAutosizeExpose | null>(null)
const valueExpose = ref<string>('Initial exposed text')
const exposeOutput = ref<string>('Not read yet')

const isLifecycleMounted = ref<boolean>(true)
const multilineBoundaryValue = 'Line 1\nLine 2\nLine 3\nLine 4\nLine 5\nLine 6'
const lifecycleValue = 'Mounted textarea autosize\nVerifies resize observer and frame cleanup on unmount.'

const handleControlledInput = (event: InputEvent): void => {
  const target = event.target as HTMLTextAreaElement | null
  valueControlled.value = target?.value ?? ''
}

const handleTrackedInput = (event: InputEvent): void => {
  const target = event.target as HTMLTextAreaElement | null
  const nextValue = target?.value ?? ''
  valueEvents.value = nextValue
  onEvent('input', { type: event.type, length: nextValue.length, value: nextValue })
  eventPayload.value = JSON.stringify({
    type: event.type,
    length: nextValue.length,
    value: nextValue
  })
}

const handleBlockedInput = (): void => {
  blockedCount.value += 1
}

const handleReadExpose = (): void => {
  exposeOutput.value = JSON.stringify({
    value: exposeRef.value?.getValue() ?? ''
  })
}

const handleSetMultiline = (): void => {
  valueExpose.value = 'Line 1: Auto-grown\nLine 2: Programmatic update\nLine 3: Third line\nLine 4: Fourth line'
}

const handleClearExpose = (): void => {
  valueExpose.value = ''
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="TextareaAutosize">
    <D1Section class="demo-textarea-autosize-page">
      <D1Group label="Basic Autosize & Controlled Value">
        <DemoBox>
          <D1TextareaAutosize
            class="demo-textarea-autosize-page__field"
            :value="valueControlled"
            placeholder="Start typing multiple lines..."
            aria-label="Controlled autosize textarea"
            @input="handleControlledInput"
          />
        </DemoBox>
        <DemoFlex align="center">
          <D1Button
            label="Append Line"
            size="sm"
            outline
            @click="valueControlled = `${valueControlled}\nAppended line`"
          />
          <D1Button
            label="Set Short Text"
            size="sm"
            outline
            @click="valueControlled = 'Short single line'"
          />
          <D1Button
            label="Clear"
            size="sm"
            outline
            @click="valueControlled = ''"
          />
        </DemoFlex>
        <DemoValue label="Value" :value="valueControlled"/>
      </D1Group>

      <D1Group label="Height Scale Variants (xs, sm, md, lg, xl, auto)">
        <DemoFlex>
          <DemoBox>
            <D1TextareaAutosize
              class="demo-textarea-autosize-page__field"
              height="xs"
              value="Height xs"
              aria-label="Textarea autosize height xs"
            />
          </DemoBox>
          <DemoBox>
            <D1TextareaAutosize
              class="demo-textarea-autosize-page__field"
              height="sm"
              value="Height sm"
              aria-label="Textarea autosize height sm"
            />
          </DemoBox>
          <DemoBox>
            <D1TextareaAutosize
              class="demo-textarea-autosize-page__field"
              height="md"
              value="Height md (default)"
              aria-label="Textarea autosize height md"
            />
          </DemoBox>
          <DemoBox>
            <D1TextareaAutosize
              class="demo-textarea-autosize-page__field"
              height="lg"
              value="Height lg"
              aria-label="Textarea autosize height lg"
            />
          </DemoBox>
          <DemoBox>
            <D1TextareaAutosize
              class="demo-textarea-autosize-page__field"
              height="xl"
              value="Height xl"
              aria-label="Textarea autosize height xl"
            />
          </DemoBox>
          <DemoBox>
            <D1TextareaAutosize
              class="demo-textarea-autosize-page__field"
              height="auto"
              value="Height auto"
              aria-label="Textarea autosize height auto"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Autosize Enabled vs Disabled & Dynamic Toggle">
        <DemoFlex>
          <DemoBox>
            <D1TextareaAutosize
              class="demo-textarea-autosize-page__field"
              :autosize="false"
              :rows="3"
              :cols="28"
              :value="valueDisabledAutosize"
              aria-label="Fixed height textarea with rows and cols"
            />
          </DemoBox>
          <DemoBox>
            <D1TextareaAutosize
              class="demo-textarea-autosize-page__field"
              :autosize="isAutosizeEnabled"
              :rows="2"
              :value="valueDynamicToggle"
              aria-label="Dynamically toggled autosize textarea"
            />
            <DemoFlex align="center">
              <D1Button
                label="Toggle Autosize"
                size="sm"
                outline
                @click="isAutosizeEnabled = !isAutosizeEnabled"
              />
            </DemoFlex>
            <DemoValue label="Autosize Enabled" :value="isAutosizeEnabled"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Native Attributes (rows, cols, maxlength, placeholder, inputAttrs)">
        <DemoFlex>
          <DemoBox>
            <D1TextareaAutosize
              class="demo-textarea-autosize-page__field"
              :rows="2"
              :cols="24"
              :maxlength="80"
              :value="valueMaxlength"
              placeholder="Max 80 characters..."
              aria-label="Textarea with maxlength and rows"
            />
          </DemoBox>
          <DemoBox>
            <D1TextareaAutosize
              class="demo-textarea-autosize-page__field"
              value="Configured via inputAttrs"
              :input-attrs="{
                id: 'demo-textarea-autosize-custom',
                name: 'notes',
                rows: 3,
                cols: 30,
                maxlength: 120,
                placeholder: 'Placeholder from inputAttrs',
                spellcheck: false,
                wrap: 'soft',
                'data-custom-textarea': 'yes',
                'aria-label': 'Textarea configured via inputAttrs'
              }"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="States & Guarded Actions (Disabled, Readonly)">
        <DemoFlex>
          <DemoBox>
            <D1TextareaAutosize
              class="demo-textarea-autosize-page__field"
              disabled
              value="Disabled textarea autosize content"
              aria-label="Disabled textarea autosize"
              @input="handleBlockedInput"
            />
          </DemoBox>
          <DemoBox>
            <D1TextareaAutosize
              class="demo-textarea-autosize-page__field"
              readonly
              value="Readonly textarea autosize content"
              aria-label="Readonly textarea autosize"
              @input="handleBlockedInput"
            />
          </DemoBox>
        </DemoFlex>
        <DemoValue label="Blocked Input Count" :value="blockedCount"/>
      </D1Group>

      <D1Group label="Events (@input)">
        <DemoBox>
          <D1TextareaAutosize
            class="demo-textarea-autosize-page__field"
            :value="valueEvents"
            placeholder="Type here to trigger @input events..."
            aria-label="Event tracked textarea autosize"
            @input="handleTrackedInput"
          />
        </DemoBox>
        <DemoValue label="Event Name" :value="eventName"/>
        <DemoValue label="Event Payload" :value="eventPayload"/>
      </D1Group>

      <D1Group label="Programmatic Expose (getValue)">
        <DemoBox>
          <D1TextareaAutosize
            ref="exposeRef"
            class="demo-textarea-autosize-page__field"
            :value="valueExpose"
            placeholder="Type or update programmatically..."
            aria-label="Exposed API textarea autosize"
          />
        </DemoBox>
        <DemoFlex align="center">
          <D1Button label="Read getValue()" size="sm" @click="handleReadExpose"/>
          <D1Button label="Set Multiline" size="sm" outline @click="handleSetMultiline"/>
          <D1Button label="Clear" size="sm" outline @click="handleClearExpose"/>
        </DemoFlex>
        <DemoValue label="Expose Output" :value="exposeOutput"/>
      </D1Group>

      <D1Group label="Boundary Values, Unicode, XSS & Narrow Container">
        <DemoFlex>
          <DemoBox>
            <D1TextareaAutosize
              class="demo-textarea-autosize-page__field"
              value=""
              placeholder="Empty string value"
              aria-label="Empty string textarea autosize"
            />
          </DemoBox>
          <DemoBox>
            <D1TextareaAutosize
              class="demo-textarea-autosize-page__field"
              value="0"
              aria-label="Numeric zero string textarea autosize"
            />
          </DemoBox>
          <DemoBox>
            <D1TextareaAutosize
              class="demo-textarea-autosize-page__field"
              value="   "
              aria-label="Whitespace only textarea autosize"
            />
          </DemoBox>
          <DemoBox>
            <D1TextareaAutosize
              class="demo-textarea-autosize-page__field"
              :value="multilineBoundaryValue"
              aria-label="Multiline auto-growth textarea autosize"
            />
          </DemoBox>
          <DemoBox>
            <D1TextareaAutosize
              class="demo-textarea-autosize-page__field"
              value="Привет · Học tiếng Việt · 🚀✨"
              aria-label="Unicode and emoji textarea autosize"
            />
          </DemoBox>
          <DemoBox>
            <D1TextareaAutosize
              class="demo-textarea-autosize-page__field"
              value="<img src=x onerror=alert(1)>"
              aria-label="XSS escaped textarea autosize"
            />
          </DemoBox>
        </DemoFlex>
        <DemoBox size="sm" class="demo-textarea-autosize-page__narrow">
          <D1TextareaAutosize
            class="demo-textarea-autosize-page__field"
            value="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
            aria-label="Narrow container unbroken string textarea autosize"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount (v-if)">
        <DemoFlex align="center">
          <D1Button
            label="Toggle Mount"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
          <DemoValue label="Mounted" :value="isLifecycleMounted"/>
        </DemoFlex>
        <DemoBox v-if="isLifecycleMounted">
          <D1TextareaAutosize
            class="demo-textarea-autosize-page__field"
            :value="lifecycleValue"
            aria-label="Conditionally mounted textarea autosize"
          />
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-textarea-autosize-page {
  &__field {
    width: 100%;
  }

  &__narrow {
    width: 100%;
    max-width: 240px;
  }
}
</style>
