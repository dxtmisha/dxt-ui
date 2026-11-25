<script setup lang="ts">
import { ref } from 'vue'
import type { ClientOnlyProps } from '@dxtmisha/d1/D1ClientOnly'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const isClientOnlyMode = ref<boolean>(true)
const mountKey = ref<number>(1)
const isLifecycleMounted = ref<boolean>(true)
const childClickCount = ref<number>(0)

const ssrConfig: ClientOnlyProps = {
  clientOnly: false
}

const zeroValue = 0
const negativeValue = -42
const decimalValue = 3.14
const emptyString = ''
const whitespaceString = '   '
const xssPayloadString = '<img src=x onerror=alert(1)>'
const scriptXssString = '<' + 'script>alert("xss")<' + '/script>'
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="ClientOnly">
    <D1Section>
      <D1Group label="Default (clientOnly=true)">
        <DemoBox data-testid="demo-co-default">
          <D1ClientOnly>
            <p>This content is rendered only on the <strong>client side</strong> after mount.</p>
            <p>Ideal for widgets relying on browser-only APIs (canvas, window measurements).</p>
          </D1ClientOnly>
        </DemoBox>
      </D1Group>

      <D1Group label="SSR-Enabled Mode (clientOnly=false)">
        <DemoBox data-testid="demo-co-ssr">
          <D1ClientOnly :client-only="ssrConfig.clientOnly">
            <p>This content renders immediately during both SSR and client hydration.</p>
          </D1ClientOnly>
        </DemoBox>
      </D1Group>

      <D1Group label="Slots & Interactive Child Content">
        <DemoBox data-testid="demo-co-slot-interactive">
          <D1ClientOnly>
            <template #default>
              <DemoFlex align="center">
                <span>Explicit #default slot with interactive child:</span>
                <D1Button
                  data-testid="demo-co-child-button"
                  size="sm"
                  primary
                  label="Increment Child Counter"
                  @click="childClickCount += 1"
                />
              </DemoFlex>
            </template>
          </D1ClientOnly>
        </DemoBox>
        <DemoValue data-testid="demo-co-child-count" label="Child Click Count" :value="childClickCount" />
      </D1Group>

      <D1Group label="Dynamic Prop Toggle, Remount & v-if Lifecycle">
        <DemoFlex>
          <D1Button
            data-testid="demo-co-toggle-prop"
            size="sm"
            outline
            label="Toggle clientOnly"
            @click="isClientOnlyMode = !isClientOnlyMode"
          />
          <D1Button
            data-testid="demo-co-remount"
            size="sm"
            outline
            label="Remount Component"
            @click="mountKey += 1"
          />
          <D1Button
            data-testid="demo-co-toggle-mount"
            size="sm"
            outline
            :label="isLifecycleMounted ? 'Unmount v-if' : 'Mount v-if'"
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
        </DemoFlex>
        <DemoValue
          data-testid="demo-co-state"
          label="Lifecycle State"
          :value="`clientOnly=${isClientOnlyMode}, mountKey=${mountKey}, mounted=${isLifecycleMounted}`"
        />
        <DemoBox data-testid="demo-co-dynamic">
          <D1ClientOnly v-if="isLifecycleMounted" :key="mountKey" :client-only="isClientOnlyMode">
            <p>Mounted instance #{{ mountKey }} (clientOnly={{ isClientOnlyMode }})</p>
          </D1ClientOnly>
        </DemoBox>
      </D1Group>

      <D1Group label="Accessibility & Semantic Passthrough">
        <DemoBox data-testid="demo-co-a11y">
          <D1ClientOnly>
            <section role="region" aria-label="Client-only status region" aria-live="polite">
              <p>Semantic region preserved transparently without wrapper nodes.</p>
            </section>
          </D1ClientOnly>
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoFlex>
          <DemoBox data-testid="demo-co-empty">
            <D1ClientOnly />
            <span>Empty slot sibling remains intact</span>
          </DemoBox>
          <DemoBox data-testid="demo-co-empty-values">
            <D1ClientOnly>
              <span data-testid="demo-co-empty-string">[{{ emptyString }}]</span>
              <span data-testid="demo-co-whitespace">[{{ whitespaceString }}]</span>
            </D1ClientOnly>
          </DemoBox>
          <DemoBox data-testid="demo-co-numbers">
            <D1ClientOnly>
              <span>Zero: {{ zeroValue }} | Negative: {{ negativeValue }} | Decimal: {{ decimalValue }}</span>
            </D1ClientOnly>
          </DemoBox>
          <DemoBox data-testid="demo-co-unicode">
            <D1ClientOnly>
              <span>Tiếng Việt / Кириллица / 0 / 🚀</span>
            </D1ClientOnly>
          </DemoBox>
          <DemoBox data-testid="demo-co-xss">
            <D1ClientOnly>
              <span>{{ xssPayloadString }} | {{ scriptXssString }}</span>
            </D1ClientOnly>
          </DemoBox>
          <DemoBox class="demo-client-only-page__narrow-box" data-testid="demo-co-narrow">
            <D1ClientOnly>
              <p>SuperLongUnbrokenClientOnlyTokenWithoutAnySpacesToVerifyLineWrappingInsideNarrowContainer1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            </D1ClientOnly>
          </DemoBox>
        </DemoFlex>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-client-only-page {
  &__narrow-box {
    width: 100%;
    max-width: 240px;
    overflow-wrap: anywhere;
  }
}
</style>
