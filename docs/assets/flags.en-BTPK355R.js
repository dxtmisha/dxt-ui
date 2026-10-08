import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/media/3. Country Flags`}),`
`,(0,c.jsx)(t.h1,{id:`country-flags-connection-and-integration`,children:`Country Flags: Connection and Integration`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`@dxtmisha/media`}),` package provides a complete, high-performance country flag and geographic metadata subsystem covering 250+ countries and territories (ISO 3166-1 alpha-2). It offers dual rendering strategies — individual vector SVG imports and an ultra-fast WebP raster sprite with CSS classes — paired with comprehensive country metadata (`,(0,c.jsx)(t.code,{children:`geo.json`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`connection-approaches`,children:`Connection Approaches`}),`
`,(0,c.jsx)(t.p,{children:`Depending on your UI requirements and performance constraints, flags can be connected using two primary methods:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Vector SVG Imports (`,(0,c.jsx)(t.code,{children:`@dxtmisha/media/flags`}),`)`]}),` — optimal for standalone displays, large banners, hero sections, and high-DPI crisp vector rendering.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`WebP Sprite with CSS Classes (`,(0,c.jsx)(t.code,{children:`@dxtmisha/media/style.css`}),`)`]}),` — optimal for country selectors, phone number pickers (`,(0,c.jsx)(t.code,{children:`D1InputPhone`}),`), and high-density tables where loading individual SVGs would cause excessive network requests or layout shifts.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`1-direct-vector-svg-imports`,children:`1. Direct Vector SVG Imports`}),`
`,(0,c.jsxs)(t.p,{children:[`You can import individual vector SVG strings directly from the `,(0,c.jsx)(t.code,{children:`@dxtmisha/media/flags`}),` subpath. Each flag is named after its ISO 3166-1 alpha-2 country code with an `,(0,c.jsx)(t.code,{children:`Svg`}),` suffix:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import {
  UsSvg,
  VnSvg,
  DeSvg,
  GbSvg,
  FrSvg,
  JpSvg
} from '@dxtmisha/media/flags'

// Use directly in your code
const vietnamFlag = VnSvg
`})}),`
`,(0,c.jsx)(t.p,{children:`In Vue 3 templates:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<template>
  <div class="country-badge">
    <span class="flag-icon" v-html="VnSvg" />
    <span class="country-name">Vietnam</span>
  </div>
</template>

<script setup lang="ts">
import { VnSvg } from '@dxtmisha/media/flags'
<\/script>
`})}),`
`,(0,c.jsx)(t.p,{children:`You can also import the default export object containing all 250+ flag SVGs:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import flags from '@dxtmisha/media/flags'

const svgMarkup = flags.UsSvg
`})}),`
`,(0,c.jsxs)(t.h2,{id:`2-high-performance-webp-sprite-stylecss`,children:[`2. High-Performance WebP Sprite (`,(0,c.jsx)(t.code,{children:`style.css`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`For international phone input fields, language switchers, and dropdowns with hundreds of country options, importing dozens of individual SVGs causes unnecessary DOM weight. `,(0,c.jsx)(t.code,{children:`@dxtmisha/media`}),` provides a pre-compiled, highly optimized WebP sprite with zero runtime JavaScript.`]}),`
`,(0,c.jsx)(t.h3,{id:`setup-and-import`,children:`Setup and Import`}),`
`,(0,c.jsx)(t.p,{children:`Import the compiled flag stylesheet once in your application entry point:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// In main.ts, App.vue, or component style
import '@dxtmisha/media/style.css'
`})}),`
`,(0,c.jsx)(t.h3,{id:`usage-with-css-classes`,children:`Usage with CSS Classes`}),`
`,(0,c.jsxs)(t.p,{children:[`Render any flag using the `,(0,c.jsx)(t.code,{children:`.ui-sys-flags`}),` base class combined with the country modifier `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--<CODE>`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<!-- Vietnam Flag -->
<span class="ui-sys-flags ui-sys-flags--VN" />

<!-- United States Flag -->
<span class="ui-sys-flags ui-sys-flags--US" />

<!-- Germany Flag -->
<span class="ui-sys-flags ui-sys-flags--DE" />

<!-- Japan Flag -->
<span class="ui-sys-flags ui-sys-flags--JP" />
`})}),`
`,(0,c.jsx)(t.h3,{id:`sizing-and-customization`,children:`Sizing and Customization`}),`
`,(0,c.jsx)(t.p,{children:`The sprite dimensions can be scaled using CSS custom properties:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`.custom-flag {
  --sys-flags-width: 32px;
  --sys-flags-height: 24px;
}
`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<span class="ui-sys-flags ui-sys-flags--VN custom-flag" />
`})}),`
`,(0,c.jsxs)(t.h2,{id:`3-geographic-metadata-geojson`,children:[`3. Geographic Metadata (`,(0,c.jsx)(t.code,{children:`geo.json`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`The package exports the complete `,(0,c.jsx)(t.code,{children:`geo`}),` dataset containing country metadata, phone codes, phone input masks, and timezones:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { geo } from '@dxtmisha/media'

// Find country information
const vietnam = geo.find(item => item.country === 'VN')

console.log(vietnam?.country)   // 'VN'
console.log(vietnam?.phoneCode) // '84'
console.log(vietnam?.phoneMask) // ['+84-**-***-****', ...]
console.log(vietnam?.zone)      // 'Asia/Ho_Chi_Minh'
`})}),`
`,(0,c.jsx)(t.h3,{id:`building-a-dynamic-country-picker`,children:`Building a Dynamic Country Picker`}),`
`,(0,c.jsxs)(t.p,{children:[`Combining `,(0,c.jsx)(t.code,{children:`geo`}),` with the CSS sprite allows building lightweight country dropdowns:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<template>
  <div class="country-list">
    <div
      v-for="item in geo"
      :key="item.country"
      class="country-option"
      @click="selectCountry(item.country)"
    >
      <span :class="['ui-sys-flags', \`ui-sys-flags--\${item.country}\`]" />
      <span class="country-code">+{{ item.phoneCode }}</span>
      <span class="country-name">{{ item.country }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { geo } from '@dxtmisha/media'
import '@dxtmisha/media/style.css'

function selectCountry(code: string) {
  console.log('Selected:', code)
}
<\/script>
`})}),`
`,(0,c.jsx)(t.h2,{id:`4-integration-with-dxt-ui-components`,children:`4. Integration with DXT UI Components`}),`
`,(0,c.jsxs)(t.p,{children:[`The flag subsystem is natively integrated into `,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),` components:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`D1InputPhone`})}),` — automatically renders the appropriate country flag sprite based on the detected phone dial code or selected country.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`D1MenuCountry`})}),` — displays country selectors with fast sprite rendering and keyboard navigation.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`popular-country-codes-reference`,children:`Popular Country Codes Reference`}),`
`,(0,c.jsx)(t.p,{children:`Common country codes and their corresponding export identifiers:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Vietnam (`,(0,c.jsx)(t.code,{children:`VN`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`VnSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--VN`}),`, dial code `,(0,c.jsx)(t.code,{children:`+84`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`United States (`,(0,c.jsx)(t.code,{children:`US`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`UsSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--US`}),`, dial code `,(0,c.jsx)(t.code,{children:`+1`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`United Kingdom (`,(0,c.jsx)(t.code,{children:`GB`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`GbSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--GB`}),`, dial code `,(0,c.jsx)(t.code,{children:`+44`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Germany (`,(0,c.jsx)(t.code,{children:`DE`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`DeSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--DE`}),`, dial code `,(0,c.jsx)(t.code,{children:`+49`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`France (`,(0,c.jsx)(t.code,{children:`FR`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`FrSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--FR`}),`, dial code `,(0,c.jsx)(t.code,{children:`+33`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Japan (`,(0,c.jsx)(t.code,{children:`JP`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`JpSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--JP`}),`, dial code `,(0,c.jsx)(t.code,{children:`+81`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`China (`,(0,c.jsx)(t.code,{children:`CN`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`CnSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--CN`}),`, dial code `,(0,c.jsx)(t.code,{children:`+86`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`South Korea (`,(0,c.jsx)(t.code,{children:`KR`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`KrSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--KR`}),`, dial code `,(0,c.jsx)(t.code,{children:`+82`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Australia (`,(0,c.jsx)(t.code,{children:`AU`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`AuSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--AU`}),`, dial code `,(0,c.jsx)(t.code,{children:`+61`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Canada (`,(0,c.jsx)(t.code,{children:`CA`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`CaSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--CA`}),`, dial code `,(0,c.jsx)(t.code,{children:`+1`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Brazil (`,(0,c.jsx)(t.code,{children:`BR`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`BrSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--BR`}),`, dial code `,(0,c.jsx)(t.code,{children:`+55`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`India (`,(0,c.jsx)(t.code,{children:`IN`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`InSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--IN`}),`, dial code `,(0,c.jsx)(t.code,{children:`+91`})]}),`
`,(0,c.jsx)(t.li,{children:`and all other 240+ ISO 3166-1 alpha-2 country codes.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};