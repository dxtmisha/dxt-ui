<script setup lang="ts">
import { ref } from 'vue'
import type { GridItemProps } from '@dxtmisha/d1/D1GridItem'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

type BaseSpan = NonNullable<GridItemProps['base']>
type AlignValue = NonNullable<GridItemProps['align']>

const baseSpans: readonly BaseSpan[] = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12'
]

const interactiveBaseSpans: readonly BaseSpan[] = ['1', '3', '6', '12']

const alignVariants: readonly AlignValue[] = [
  'center',
  'top',
  'bottom',
  'stretch',
  'baseline',
  'start',
  'end'
]

const responsiveItems: readonly number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const activeBase = ref<BaseSpan>('6')
const activeAlign = ref<AlignValue | undefined>('center')
const isGridItemMounted = ref<boolean>(true)
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="GridItem">
    <D1Section class="demo-grid-item-page">
      <D1Group label="Basic Usage (Default Span)">
        <DemoBox>
          <D1Grid>
            <D1GridItem data-testid="demo-grid-item-default">
              <div class="demo-grid-item-page__cell">Default (1)</div>
            </D1GridItem>
            <D1GridItem base="11">
              <div class="demo-grid-item-page__cell">Companion Item (base="11")</div>
            </D1GridItem>
          </D1Grid>
        </DemoBox>
      </D1Group>

      <D1Group label="All Base Spans (1 to 12)">
        <DemoBox>
          <D1Grid data-testid="demo-grid-item-base-all">
            <D1GridItem
              v-for="span in baseSpans"
              :key="span"
              :base="span"
              :data-testid="`demo-grid-item-base-${span}`"
            >
              <div class="demo-grid-item-page__cell">base="{{ span }}"</div>
            </D1GridItem>
          </D1Grid>
        </DemoBox>
        <DemoBox>
          <D1Grid>
            <D1GridItem base="6">
              <div class="demo-grid-item-page__cell">base="6"</div>
            </D1GridItem>
            <D1GridItem base="6">
              <div class="demo-grid-item-page__cell">base="6"</div>
            </D1GridItem>
            <D1GridItem base="4">
              <div class="demo-grid-item-page__cell">base="4"</div>
            </D1GridItem>
            <D1GridItem base="4">
              <div class="demo-grid-item-page__cell">base="4"</div>
            </D1GridItem>
            <D1GridItem base="4">
              <div class="demo-grid-item-page__cell">base="4"</div>
            </D1GridItem>
            <D1GridItem base="3">
              <div class="demo-grid-item-page__cell">base="3"</div>
            </D1GridItem>
            <D1GridItem base="3">
              <div class="demo-grid-item-page__cell">base="3"</div>
            </D1GridItem>
            <D1GridItem base="3">
              <div class="demo-grid-item-page__cell">base="3"</div>
            </D1GridItem>
            <D1GridItem base="3">
              <div class="demo-grid-item-page__cell">base="3"</div>
            </D1GridItem>
          </D1Grid>
        </DemoBox>
      </D1Group>

      <D1Group label="Responsive Breakpoints (sm, md, lg, xl, xl2)">
        <DemoBox>
          <D1Grid data-testid="demo-grid-item-responsive">
            <D1GridItem
              v-for="item in responsiveItems"
              :key="item"
              base="12"
              sm="6"
              md="4"
              lg="3"
              xl="2"
              xl2="1"
              :data-testid="`demo-grid-item-responsive-${item}`"
            >
              <div class="demo-grid-item-page__cell">
                #{{ item }} (12/sm6/md4/lg3/xl2/xl2-1)
              </div>
            </D1GridItem>
          </D1Grid>
        </DemoBox>
      </D1Group>

      <D1Group label="Self-Alignment Variants (align)">
        <DemoBox>
          <D1Grid class="demo-grid-item-page__align-grid" data-testid="demo-grid-item-align-grid">
            <D1GridItem
              v-for="alignment in alignVariants"
              :key="alignment"
              base="3"
              :align="alignment"
              :data-testid="`demo-grid-item-align-${alignment}`"
            >
              <div
                class="demo-grid-item-page__cell"
                :class="{ 'demo-grid-item-page__cell--baseline-tall': alignment === 'baseline' }"
              >
                align="{{ alignment }}"
              </div>
            </D1GridItem>
            <D1GridItem
              base="3"
              align="baseline"
              data-testid="demo-grid-item-align-baseline-ref"
            >
              <div class="demo-grid-item-page__cell">baseline ref</div>
            </D1GridItem>
          </D1Grid>
        </DemoBox>
      </D1Group>

      <D1Group label="Interactive Controls (base & align)">
        <DemoFlex>
          <D1Button
            v-for="span in interactiveBaseSpans"
            :key="span"
            :label="`base: ${span}`"
            :outline="activeBase !== span"
            size="sm"
            @click="activeBase = span"
          />
        </DemoFlex>
        <DemoFlex>
          <D1Button
            label="align: default"
            :outline="activeAlign !== undefined"
            size="sm"
            @click="activeAlign = undefined"
          />
          <D1Button
            v-for="alignment in alignVariants"
            :key="alignment"
            :label="`align: ${alignment}`"
            :outline="activeAlign !== alignment"
            size="sm"
            @click="activeAlign = alignment"
          />
        </DemoFlex>
        <DemoValue
          label="Active Props"
          :value="`base=${activeBase} | align=${activeAlign ?? 'default'}`"
        />
        <DemoBox>
          <D1Grid class="demo-grid-item-page__align-grid">
            <D1GridItem
              :base="activeBase"
              :align="activeAlign"
              data-testid="demo-grid-item-controlled"
            >
              <div class="demo-grid-item-page__cell demo-grid-item-page__cell--primary">
                Controlled (base="{{ activeBase }}", align="{{ activeAlign ?? 'default' }}")
              </div>
            </D1GridItem>
            <D1GridItem base="2" align="stretch">
              <div class="demo-grid-item-page__cell">Track Reference</div>
            </D1GridItem>
          </D1Grid>
        </DemoBox>
      </D1Group>

      <D1Group label="Attributes & Accessibility">
        <DemoBox>
          <D1Grid>
            <D1GridItem
              base="6"
              role="region"
              aria-label="Accessible grid item region"
              tabindex="0"
              data-testid="demo-grid-item-a11y"
            >
              <div class="demo-grid-item-page__cell">
                Focusable GridItem region (role="region", tabindex="0")
              </div>
            </D1GridItem>
            <D1GridItem base="6" data-testid="demo-grid-item-interactive-child">
              <div class="demo-grid-item-page__cell">
                <D1Button label="Grid Action" size="sm"/>
              </div>
            </D1GridItem>
          </D1Grid>
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoBox>
          <D1Grid data-testid="demo-grid-item-boundaries">
            <D1GridItem data-testid="demo-grid-item-empty"/>
            <D1GridItem data-testid="demo-grid-item-whitespace">   </D1GridItem>
            <D1GridItem base="2" data-testid="demo-grid-item-zero">
              <div class="demo-grid-item-page__cell">{{ 0 }}</div>
            </D1GridItem>
            <D1GridItem base="4" data-testid="demo-grid-item-unbroken">
              <div class="demo-grid-item-page__cell">
                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
              </div>
            </D1GridItem>
            <D1GridItem base="4" data-testid="demo-grid-item-unicode">
              <div class="demo-grid-item-page__cell">
                Tiếng Việt — Привет Мир — 🚀🔥 | {{ '<img src=x onerror=alert(1)>' }}
              </div>
            </D1GridItem>
          </D1Grid>
        </DemoBox>
        <DemoBox class="demo-grid-item-page__narrow" data-testid="demo-grid-item-narrow-box">
          <D1Grid>
            <D1GridItem base="6" data-testid="demo-grid-item-narrow-half">
              <div class="demo-grid-item-page__cell">
                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
              </div>
            </D1GridItem>
            <D1GridItem base="6" data-testid="demo-grid-item-narrow-unicode">
              <div class="demo-grid-item-page__cell">
                Tiếng Việt — Привет — 🚀🔥
              </div>
            </D1GridItem>
            <D1GridItem base="12" data-testid="demo-grid-item-narrow-full">
              <div class="demo-grid-item-page__cell">
                Narrow 240px full-row span (base="12")
              </div>
            </D1GridItem>
          </D1Grid>
        </DemoBox>
      </D1Group>

      <D1Group label="SSR & Lifecycle (Mount / Unmount)">
        <DemoFlex align="center">
          <D1Button
            size="sm"
            outline
            :label="isGridItemMounted ? 'Unmount GridItem' : 'Mount GridItem'"
            @click="isGridItemMounted = !isGridItemMounted"
          />
          <DemoValue label="Mounted" :value="isGridItemMounted"/>
        </DemoFlex>
        <DemoBox>
          <D1Grid>
            <D1GridItem
              v-if="isGridItemMounted"
              base="6"
              data-testid="demo-grid-item-lifecycle"
            >
              <div class="demo-grid-item-page__cell">
                Conditionally mounted D1GridItem (base="6")
              </div>
            </D1GridItem>
            <D1GridItem base="6">
              <div class="demo-grid-item-page__cell">
                Static sibling D1GridItem (base="6")
              </div>
            </D1GridItem>
          </D1Grid>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-grid-item-page {
  &__align-grid {
    grid-template-rows: 120px 120px;
    grid-auto-rows: 120px;
  }

  &__narrow {
    max-width: 240px;

    .d1-grid {
      column-gap: 4px;
    }
  }

  &__cell {
    box-sizing: border-box;
    height: 100%;
    padding: 8px 12px;
    border-width: 1px;
    @include ui.borderColor(ui.v('?sys.palette.outline'), ui.v('?sys.opacity.outline'));
    border-radius: ui.v('?sys.rounded.md');
    @include ui.backgroundColor(ui.v('?sys.palette.primary'), 0.08);
    overflow-wrap: anywhere;

    &--primary {
      @include ui.backgroundColor(ui.v('?sys.palette.primary'), 0.16);
      @include ui.color(ui.v('?sys.palette.primary'));
    }

    &--baseline-tall {
      padding-top: 24px;
      font-size: 1.25em;
    }
  }
}
</style>
