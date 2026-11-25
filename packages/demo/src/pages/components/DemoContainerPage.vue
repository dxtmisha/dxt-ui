<script setup lang="ts">
import { ref } from 'vue'
import type { ConstrExpose } from '@dxtmisha/functional'
import type { ContainerExpose } from '@dxtmisha/constructor/Container'
import type { ContainerProps } from '@dxtmisha/d1/D1Container'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const aligns: readonly NonNullable<ContainerProps['align']>[] = [
  'left',
  'center',
  'right'
]

const dynamicArea = ref<string | undefined>('container')
const dynamicAlign = ref<NonNullable<ContainerProps['align']>>('center')
const compactWidth = ref<boolean>(true)
const isContainerMounted = ref<boolean>(true)

const containerReference = ref<ConstrExpose<HTMLDivElement, ContainerExpose>>()
const elementInfo = ref<string>('Click button to inspect elementHtml')

const inspectElement = (): void => {
  const element = containerReference.value?.elementHtml
  if (element instanceof HTMLElement) {
    elementInfo.value = `<${element.tagName.toLowerCase()} class="${element.className}">`
  } else {
    elementInfo.value = 'undefined'
  }
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Container">
    <D1Section class="demo-container-page">
      <D1Group label="Basic Usage (Default Center Alignment)">
        <DemoBox>
          <D1Container>
            <div class="demo-container-page__sample">
              Default D1Container (align="center", area="container")
            </div>
          </D1Container>
        </DemoBox>
      </D1Group>

      <D1Group label="Alignment Variants (left, center, right)">
        <DemoBox
          v-for="alignment in aligns"
          :key="alignment"
        >
          <D1Container class="demo-container-page__narrow" :align="alignment">
            <div class="demo-container-page__sample">
              align="{{ alignment }}" (--d1-container-width: 280px)
            </div>
          </D1Container>
        </DemoBox>
      </D1Group>

      <D1Group label="Width & Padding Tokens (--d1-container-width, --d1-container-paddingX)">
        <DemoBox>
          <D1Container class="demo-container-page__width-sm">
            <div class="demo-container-page__sample">--d1-container-width: 240px</div>
          </D1Container>
        </DemoBox>
        <DemoBox>
          <D1Container class="demo-container-page__width-md">
            <div class="demo-container-page__sample">--d1-container-width: 480px</div>
          </D1Container>
        </DemoBox>
        <DemoBox>
          <D1Container class="demo-container-page__width-full">
            <div class="demo-container-page__sample">--d1-container-width: 100%</div>
          </D1Container>
        </DemoBox>
        <DemoBox>
          <D1Container class="demo-container-page__width-full demo-container-page__padding-none">
            <div class="demo-container-page__sample">--d1-container-paddingX: 0px</div>
          </D1Container>
        </DemoBox>
        <DemoBox>
          <D1Container class="demo-container-page__width-full demo-container-page__padding-lg">
            <div class="demo-container-page__sample">--d1-container-paddingX: 32px</div>
          </D1Container>
        </DemoBox>
      </D1Group>

      <D1Group label="Area Context Propagation (Integration with D1Area)">
        <DemoFlex>
          <D1Button label="container" size="sm" @click="dynamicArea = 'container'"/>
          <D1Button label="header" size="sm" @click="dynamicArea = 'header'"/>
          <D1Button label="sidebar" size="sm" @click="dynamicArea = 'sidebar'"/>
          <D1Button label="unknown (fallback)" size="sm" outline @click="dynamicArea = 'unknown'"/>
          <D1Button label="undefined (areaDefault)" size="sm" outline @click="dynamicArea = undefined"/>
        </DemoFlex>
        <DemoFlex>
          <D1Button label="align: left" size="sm" outline @click="dynamicAlign = 'left'"/>
          <D1Button label="align: center" size="sm" outline @click="dynamicAlign = 'center'"/>
          <D1Button label="align: right" size="sm" outline @click="dynamicAlign = 'right'"/>
          <D1Button label="Toggle Width" size="sm" outline @click="compactWidth = !compactWidth"/>
        </DemoFlex>
        <DemoValue label="Active Area & Align" :value="`${String(dynamicArea)} | align=${dynamicAlign}`"/>
        <DemoBox>
          <D1Container
            :class="compactWidth ? 'demo-container-page__width-md' : 'demo-container-page__width-full'"
            :area="dynamicArea"
            :align="dynamicAlign"
          >
            <div class="demo-container-page__sample">
              <D1Area area-default="fallback">
                <template #container>
                  <span>Resolved D1Area slot: #container</span>
                </template>
                <template #header>
                  <span>Resolved D1Area slot: #header</span>
                </template>
                <template #sidebar>
                  <span>Resolved D1Area slot: #sidebar</span>
                </template>
                <template #fallback>
                  <span>Resolved D1Area slot: #fallback (areaDefault)</span>
                </template>
                <template #default>
                  <span>Resolved D1Area slot: #default</span>
                </template>
              </D1Area>
            </div>
          </D1Container>
        </DemoBox>
      </D1Group>

      <D1Group label="Expose & Attributes Forwarding">
        <DemoFlex align="center">
          <D1Button label="Inspect elementHtml" size="sm" @click="inspectElement"/>
        </DemoFlex>
        <DemoBox>
          <D1Container
            ref="containerReference"
            class="demo-container-page__width-md"
            data-testid="exposed-container"
            aria-label="Exposed container landmark"
          >
            <div class="demo-container-page__sample">
              Container with forwarded data-testid and aria-label
            </div>
          </D1Container>
        </DemoBox>
        <DemoValue label="Exposed elementHtml" :value="elementInfo"/>
      </D1Group>

      <D1Group label="Accessibility (A11y Landmarks)">
        <DemoBox>
          <D1Container
            class="demo-container-page__width-full"
            role="region"
            aria-labelledby="demo-container-a11y-heading"
            tabindex="0"
          >
            <section class="demo-container-page__sample">
              <h3 id="demo-container-a11y-heading" class="demo-container-page__heading">
                Accessible Region Container
              </h3>
              <p>Focusable landmark region with role="region" and aria-labelledby.</p>
            </section>
          </D1Container>
        </DemoBox>
      </D1Group>

      <D1Group label="Nested Containers & Boundary Content">
        <DemoBox>
          <D1Container class="demo-container-page__width-md" area="outer">
            <div class="demo-container-page__sample">
              <div>Outer area: <D1Area><template #outer><strong>#outer</strong></template></D1Area></div>
              <D1Container class="demo-container-page__narrow" area="inner" align="left">
                <div class="demo-container-page__nested">
                  Inner area: <D1Area><template #inner><strong>#inner</strong></template></D1Area>
                </div>
              </D1Container>
            </div>
          </D1Container>
        </DemoBox>
        <DemoBox>
          <D1Container data-testid="demo-container-empty"/>
          <D1Container area="" data-testid="demo-container-area-empty">
            <div class="demo-container-page__sample">
              <D1Area area-default="fallback">
                <template #fallback><span>area="" fallback</span></template>
              </D1Area>
            </div>
          </D1Container>
          <D1Container area="   " data-testid="demo-container-area-whitespace">
            <div class="demo-container-page__sample">
              <D1Area area-default="fallback">
                <template #fallback><span>area="   " fallback</span></template>
              </D1Area>
            </div>
          </D1Container>
          <D1Container area="0" data-testid="demo-container-area-zero">
            <div class="demo-container-page__sample">
              <D1Area>
                <template #0><span>Matched area="0"</span></template>
              </D1Area>
            </div>
          </D1Container>
        </DemoBox>
        <DemoBox>
          <D1Container class="demo-container-page__narrow">
            <div class="demo-container-page__sample">
              <div>0 | -5 | 12.5</div>
              <div>Tiếng Việt — Привет Мир — 🚀🔥</div>
              <div>&lt;img src=x onerror=alert(1)&gt;</div>
              <div>SupercalifragilisticexpialidociousContainerBoundaryToken1234567890</div>
            </div>
          </D1Container>
        </DemoBox>
      </D1Group>

      <D1Group label="SSR & Lifecycle (Mount / Unmount)">
        <DemoFlex align="center">
          <D1Button
            size="sm"
            outline
            :label="isContainerMounted ? 'Unmount Container' : 'Mount Container'"
            @click="isContainerMounted = !isContainerMounted"
          />
          <DemoValue label="Mounted" :value="isContainerMounted"/>
        </DemoFlex>
        <DemoBox v-if="isContainerMounted">
          <D1Container area="lifecycle">
            <div class="demo-container-page__sample">
              <D1Area>
                <template #lifecycle>
                  <span>Lifecycle mounted container area: #lifecycle</span>
                </template>
              </D1Area>
            </div>
          </D1Container>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-container-page {
  &__narrow {
    --d1-container-width: 280px;
    max-width: 100%;
  }

  &__width-sm {
    --d1-container-width: 240px;
    max-width: 100%;
  }

  &__width-md {
    --d1-container-width: 480px;
    max-width: 100%;
  }

  &__width-full {
    --d1-container-width: 100%;
  }

  &__padding-none {
    --d1-container-paddingX: 0px;
  }

  &__padding-lg {
    --d1-container-paddingX: 32px;
  }

  &__sample {
    padding: 12px 16px;
    border: 1px dashed currentColor;
    border-radius: 8px;
    overflow-wrap: anywhere;
  }

  &__nested {
    margin-top: 8px;
    padding: 8px 12px;
    border: 1px solid currentColor;
    border-radius: 6px;
  }

  &__heading {
    margin: 0 0 4px;
  }
}
</style>
