<script setup lang="ts">
import { ref } from 'vue'
import type { GridProps } from '@dxtmisha/d1/D1Grid'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

type ColumnCount = 2 | 4 | 6 | 12

const aligns: readonly NonNullable<GridProps['align']>[] = [
  'center',
  'top',
  'bottom',
  'stretch',
  'baseline',
  'start',
  'end'
]

const columnOptions: readonly ColumnCount[] = [2, 4, 6, 12]

const activeAlign = ref<NonNullable<GridProps['align']>>('stretch')
const activeColumns = ref<ColumnCount>(4)
const isGridMounted = ref<boolean>(true)

const sixColumnItems: readonly number[] = [1, 2, 3, 4, 5, 6]
const threeColumnItems: readonly number[] = [1, 2, 3]
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Grid">
    <D1Section class="demo-grid-page">
      <D1Group label="Basic 12-Column Grid (D1GridItem Spans)">
        <DemoBox>
          <D1Grid data-testid="demo-grid-span-4">
            <D1GridItem base="4">
              <div class="demo-grid-page__cell">span 4</div>
            </D1GridItem>
            <D1GridItem base="4">
              <div class="demo-grid-page__cell">span 4</div>
            </D1GridItem>
            <D1GridItem base="4">
              <div class="demo-grid-page__cell">span 4</div>
            </D1GridItem>
          </D1Grid>
        </DemoBox>

        <DemoBox>
          <D1Grid data-testid="demo-grid-span-6">
            <D1GridItem base="6">
              <div class="demo-grid-page__cell">span 6</div>
            </D1GridItem>
            <D1GridItem base="6">
              <div class="demo-grid-page__cell">span 6</div>
            </D1GridItem>
          </D1Grid>
        </DemoBox>

        <DemoBox>
          <D1Grid data-testid="demo-grid-span-3-6-3">
            <D1GridItem base="3">
              <div class="demo-grid-page__cell">span 3</div>
            </D1GridItem>
            <D1GridItem base="6">
              <div class="demo-grid-page__cell">span 6</div>
            </D1GridItem>
            <D1GridItem base="3">
              <div class="demo-grid-page__cell">span 3</div>
            </D1GridItem>
          </D1Grid>
        </DemoBox>

        <DemoBox>
          <D1Grid data-testid="demo-grid-span-12">
            <D1GridItem base="12">
              <div class="demo-grid-page__cell">span 12</div>
            </D1GridItem>
          </D1Grid>
        </DemoBox>
      </D1Group>

      <D1Group label="Alignment Variants (All 7 align Values)">
        <DemoBox
          v-for="alignment in aligns"
          :key="alignment"
        >
          <DemoValue label="align" :value="alignment"/>
          <D1Grid
            :align="alignment"
            :data-testid="`demo-grid-align-${alignment}`"
            class="demo-grid-page__align-preview"
          >
            <D1GridItem base="4">
              <div class="demo-grid-page__cell demo-grid-page__cell--short">
                Short cell
              </div>
            </D1GridItem>
            <D1GridItem base="4">
              <div class="demo-grid-page__cell demo-grid-page__cell--tall">
                Tall cell line 1<br>
                Tall cell line 2<br>
                Tall cell line 3
              </div>
            </D1GridItem>
            <D1GridItem base="4">
              <div class="demo-grid-page__cell demo-grid-page__cell--baseline">
                Baseline text
              </div>
            </D1GridItem>
          </D1Grid>
        </DemoBox>
      </D1Group>

      <D1Group label="Custom Columns (--d1-grid-columns) & Nested Grids">
        <DemoBox>
          <DemoValue label="CSS variable" value="--d1-grid-columns: 6"/>
          <D1Grid
            class="demo-grid-page__columns--6"
            data-testid="demo-grid-columns-6"
          >
            <D1GridItem
              v-for="cellItem in sixColumnItems"
              :key="cellItem"
              base="1"
            >
              <div class="demo-grid-page__cell">Col {{ cellItem }}</div>
            </D1GridItem>
          </D1Grid>
        </DemoBox>

        <DemoBox>
          <DemoValue label="CSS variable" value="--d1-grid-columns: 3"/>
          <D1Grid
            class="demo-grid-page__columns--3"
            data-testid="demo-grid-columns-3"
          >
            <D1GridItem
              v-for="cellItem in threeColumnItems"
              :key="cellItem"
              base="1"
            >
              <div class="demo-grid-page__cell">Track {{ cellItem }}</div>
            </D1GridItem>
          </D1Grid>
        </DemoBox>

        <DemoBox>
          <DemoValue label="Structure" value="Nested 2-column D1Grid inside 12-column D1Grid"/>
          <D1Grid data-testid="demo-grid-nested-outer">
            <D1GridItem base="6">
              <div class="demo-grid-page__cell">
                Outer span 6
                <D1Grid
                  class="demo-grid-page__columns--2 demo-grid-page__nested"
                  data-testid="demo-grid-nested-inner"
                >
                  <D1GridItem base="1">
                    <div class="demo-grid-page__cell">Inner A</div>
                  </D1GridItem>
                  <D1GridItem base="1">
                    <div class="demo-grid-page__cell">Inner B</div>
                  </D1GridItem>
                </D1Grid>
              </div>
            </D1GridItem>
            <D1GridItem base="6">
              <div class="demo-grid-page__cell">Outer sibling span 6</div>
            </D1GridItem>
          </D1Grid>
        </DemoBox>
      </D1Group>

      <D1Group label="Reactive Controls (align & Column Count)">
        <DemoFlex>
          <D1Button
            v-for="alignment in aligns"
            :key="alignment"
            :label="alignment"
            :outline="activeAlign !== alignment"
            size="sm"
            @click="activeAlign = alignment"
          />
        </DemoFlex>
        <DemoFlex>
          <D1Button
            v-for="columnCount in columnOptions"
            :key="columnCount"
            :label="`${columnCount} cols`"
            :outline="activeColumns !== columnCount"
            size="sm"
            @click="activeColumns = columnCount"
          />
        </DemoFlex>
        <DemoValue
          label="Active Grid Config"
          :value="`align=${activeAlign} | --d1-grid-columns=${activeColumns}`"
        />
        <DemoBox>
          <D1Grid
            :align="activeAlign"
            :class="`demo-grid-page__columns--${activeColumns}`"
            data-testid="demo-grid-reactive"
          >
            <D1GridItem base="1">
              <div class="demo-grid-page__cell demo-grid-page__cell--short">Item 1</div>
            </D1GridItem>
            <D1GridItem base="1">
              <div class="demo-grid-page__cell demo-grid-page__cell--tall">
                Item 2<br>Tall content
              </div>
            </D1GridItem>
            <D1GridItem base="1">
              <div class="demo-grid-page__cell demo-grid-page__cell--baseline">Item 3</div>
            </D1GridItem>
            <D1GridItem base="1">
              <div class="demo-grid-page__cell demo-grid-page__cell--short">Item 4</div>
            </D1GridItem>
            <D1GridItem base="1">
              <div class="demo-grid-page__cell demo-grid-page__cell--short">Item 5</div>
            </D1GridItem>
            <D1GridItem base="1">
              <div class="demo-grid-page__cell demo-grid-page__cell--short">Item 6</div>
            </D1GridItem>
          </D1Grid>
        </DemoBox>
      </D1Group>

      <D1Group label="Accessibility & Attributes Forwarding">
        <DemoBox>
          <D1Grid
            data-testid="demo-grid-a11y"
            role="region"
            aria-label="Accessible dashboard grid"
            tabindex="0"
          >
            <D1GridItem base="4">
              <div class="demo-grid-page__cell">
                <D1Button label="First Grid Action" size="sm"/>
              </div>
            </D1GridItem>
            <D1GridItem base="4">
              <div class="demo-grid-page__cell">
                <D1Button label="Second Grid Action" size="sm" outline/>
              </div>
            </D1GridItem>
            <D1GridItem base="4">
              <div class="demo-grid-page__cell">Static summary card</div>
            </D1GridItem>
          </D1Grid>
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoBox>
          <DemoValue label="Empty Grid" value="No slot children"/>
          <D1Grid data-testid="demo-grid-empty"/>
        </DemoBox>

        <DemoBox class="demo-grid-page__narrow">
          <DemoValue label="Narrow Box" value="max-width: 240px (minmax(0, 1fr))"/>
          <D1Grid
            class="demo-grid-page__columns--2"
            data-testid="demo-grid-narrow"
          >
            <D1GridItem base="1">
              <div class="demo-grid-page__cell">
                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
              </div>
            </D1GridItem>
            <D1GridItem base="1">
              <div class="demo-grid-page__cell">
                Adjacent cell
              </div>
            </D1GridItem>
          </D1Grid>
        </DemoBox>

        <DemoBox>
          <D1Grid
            class="demo-grid-page__columns--3"
            data-testid="demo-grid-boundary-content"
          >
            <D1GridItem base="1">
              <div class="demo-grid-page__cell">0 | -5 | 12.5</div>
            </D1GridItem>
            <D1GridItem base="1">
              <div class="demo-grid-page__cell">Tiếng Việt — Привет Мир — 🚀🔥</div>
            </D1GridItem>
            <D1GridItem base="1">
              <div class="demo-grid-page__cell">
                {{ '<script>alert("xss")</script> & <img src=x onerror=alert(1)>' }}
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
            :label="isGridMounted ? 'Unmount Grid' : 'Mount Grid'"
            @click="isGridMounted = !isGridMounted"
          />
          <DemoValue label="Mounted" :value="isGridMounted"/>
        </DemoFlex>
        <DemoBox v-if="isGridMounted">
          <D1Grid data-testid="demo-grid-lifecycle">
            <D1GridItem base="6">
              <div class="demo-grid-page__cell">Lifecycle Left Cell</div>
            </D1GridItem>
            <D1GridItem base="6">
              <div class="demo-grid-page__cell">Lifecycle Right Cell</div>
            </D1GridItem>
          </D1Grid>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-grid-page {
  &__narrow {
    max-width: 240px;
  }

  &__align-preview {
    margin-top: ui.v('?layout.gapY');
  }

  &__nested {
    margin-top: ui.v('?layout.gapY');
  }

  &__columns {
    &--2 {
      --d1-grid-columns: 2;
    }

    &--3 {
      --d1-grid-columns: 3;
    }

    &--4 {
      --d1-grid-columns: 4;
    }

    &--6 {
      --d1-grid-columns: 6;
    }

    &--12 {
      --d1-grid-columns: 12;
    }
  }

  &__cell {
    padding: ui.v('?layout.paddingY') ui.v('?layout.paddingX');
    border-style: dashed;
    border-width: 1px;
    @include ui.borderColor(ui.v('?sys.palette.outline'), ui.v('?sys.opacity.outline'));
    border-radius: ui.v('?sys.rounded.sm');
    @include ui.backgroundColor(ui.v('?sys.palette.primary'), 0.08);
    overflow-wrap: anywhere;

    &--short {
      min-height: 36px;
    }

    &--tall {
      min-height: 96px;
    }

    &--baseline {
      padding-top: 20px;
      font-size: 1.25rem;
      line-height: 1.4;
    }
  }
}
</style>
