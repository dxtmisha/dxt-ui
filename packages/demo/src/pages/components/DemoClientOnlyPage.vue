<script setup lang="ts">
import { ref } from 'vue'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const isClientOnlyMode = ref<boolean>(true)
const mountKey = ref<number>(1)
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
          <D1ClientOnly :client-only="false">
            <p>This content renders immediately during both SSR and client hydration.</p>
          </D1ClientOnly>
        </DemoBox>
      </D1Group>

      <D1Group label="Dynamic Prop Toggle & Remount Lifecycle">
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
        </DemoFlex>
        <DemoValue data-testid="demo-co-state" :value="`clientOnly=${isClientOnlyMode}, mountKey=${mountKey}`" />
        <DemoBox data-testid="demo-co-dynamic">
          <D1ClientOnly :key="mountKey" :client-only="isClientOnlyMode">
            <p>Mounted instance #{{ mountKey }} (clientOnly={{ isClientOnlyMode }})</p>
          </D1ClientOnly>
        </DemoBox>
      </D1Group>

      <D1Group label="Boundaries (Rich Content, Unicode & Empty Slot)">
        <DemoFlex>
          <DemoBox data-testid="demo-co-unicode">
            <D1ClientOnly>
              <span>Tiếng Việt / Кириллица / 0 / 🚀</span>
            </D1ClientOnly>
          </DemoBox>
          <DemoBox data-testid="demo-co-empty">
            <D1ClientOnly />
            <span>Empty slot sibling remains intact</span>
          </DemoBox>
        </DemoFlex>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
