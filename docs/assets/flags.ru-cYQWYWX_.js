import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/media/3. Флаги стран`}),`
`,(0,c.jsx)(t.h1,{id:`флаги-стран-подключение-и-интеграция`,children:`Флаги стран: подключение и интеграция`}),`
`,(0,c.jsxs)(t.p,{children:[`Пакет `,(0,c.jsx)(t.code,{children:`@dxtmisha/media`}),` предоставляет полноценную высокопроизводительную подсистему работы с флагами стран и географическими метаданными, охватывающую более 250 стран и территорий (стандарт ISO 3166-1 alpha-2). Она предлагает два подхода к отображению — точечный импорт векторных SVG и ультрабыстрый растровый WebP-спрайт с CSS-классами, объединенные с подробным географическим справочником (`,(0,c.jsx)(t.code,{children:`geo.json`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`способы-подключения`,children:`Способы подключения`}),`
`,(0,c.jsx)(t.p,{children:`В зависимости от интерфейса и требований к производительности флаги можно подключать двумя основными путями:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Векторный импорт SVG (`,(0,c.jsx)(t.code,{children:`@dxtmisha/media/flags`}),`)`]}),` — оптимален для одиночных элементов, крупных баннеров, промо-блоков и ситуаций, когда требуется идеальная четкость векторов на любых экранах.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`WebP-спрайт с CSS-классами (`,(0,c.jsx)(t.code,{children:`@dxtmisha/media/style.css`}),`)`]}),` — оптимален для списков выбора стран, телефонных полей ввода (`,(0,c.jsx)(t.code,{children:`D1InputPhone`}),`) и плотных таблиц, где импорт сотен отдельных SVG привел бы к избыточным HTTP-запросам или загромождению DOM.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`1-прямой-векторный-импорт-svg`,children:`1. Прямой векторный импорт SVG`}),`
`,(0,c.jsxs)(t.p,{children:[`Вы можете импортировать конкретные векторные SVG-строки напрямую из субпути `,(0,c.jsx)(t.code,{children:`@dxtmisha/media/flags`}),`. Каждый флаг назван по коду страны ISO 3166-1 alpha-2 с суффиксом `,(0,c.jsx)(t.code,{children:`Svg`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import {
  UsSvg,
  VnSvg,
  DeSvg,
  GbSvg,
  FrSvg,
  JpSvg,
  RuSvg
} from '@dxtmisha/media/flags'

// Использование напрямую в коде
const vietnamFlag = VnSvg
`})}),`
`,(0,c.jsx)(t.p,{children:`В шаблонах Vue 3:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<template>
  <div class="country-badge">
    <span class="flag-icon" v-html="VnSvg" />
    <span class="country-name">Вьетнам</span>
  </div>
</template>

<script setup lang="ts">
import { VnSvg } from '@dxtmisha/media/flags'
<\/script>
`})}),`
`,(0,c.jsx)(t.p,{children:`Также доступен экспорт по умолчанию, содержащий объект со всеми 250+ SVG-флагами:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import flags from '@dxtmisha/media/flags'

const svgMarkup = flags.UsSvg
`})}),`
`,(0,c.jsxs)(t.h2,{id:`2-высокопроизводительный-webp-спрайт-stylecss`,children:[`2. Высокопроизводительный WebP-спрайт (`,(0,c.jsx)(t.code,{children:`style.css`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Для международных полей ввода телефонов, переключателей языков и селекторов с сотнями вариантов стран импорт сотен отдельных SVG создает лишнюю нагрузку. В `,(0,c.jsx)(t.code,{children:`@dxtmisha/media`}),` предусмотрен готовый оптимизированный WebP-спрайт без накладных расходов в JavaScript.`]}),`
`,(0,c.jsx)(t.h3,{id:`подключение-стилей`,children:`Подключение стилей`}),`
`,(0,c.jsx)(t.p,{children:`Подключите скомпилированную таблицу стилей один раз в точке входа вашего приложения:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// В main.ts, App.vue или стилях компонента
import '@dxtmisha/media/style.css'
`})}),`
`,(0,c.jsx)(t.h3,{id:`использование-css-классов`,children:`Использование CSS-классов`}),`
`,(0,c.jsxs)(t.p,{children:[`Отображайте любой флаг с помощью базового класса `,(0,c.jsx)(t.code,{children:`.ui-sys-flags`}),` и модификатора страны `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--<CODE>`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<!-- Флаг Вьетнама -->
<span class="ui-sys-flags ui-sys-flags--VN" />

<!-- Флаг США -->
<span class="ui-sys-flags ui-sys-flags--US" />

<!-- Флаг Германии -->
<span class="ui-sys-flags ui-sys-flags--DE" />

<!-- Флаг Японии -->
<span class="ui-sys-flags ui-sys-flags--JP" />
`})}),`
`,(0,c.jsx)(t.h3,{id:`масштабирование-и-размеры`,children:`Масштабирование и размеры`}),`
`,(0,c.jsx)(t.p,{children:`Размеры спрайта можно легко регулировать через CSS-переменные:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`.custom-flag {
  --sys-flags-width: 32px;
  --sys-flags-height: 24px;
}
`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<span class="ui-sys-flags ui-sys-flags--VN custom-flag" />
`})}),`
`,(0,c.jsxs)(t.h2,{id:`3-географические-метаданные-geojson`,children:[`3. Географические метаданные (`,(0,c.jsx)(t.code,{children:`geo.json`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Пакет экспортирует полный набор данных `,(0,c.jsx)(t.code,{children:`geo`}),`, содержащий информацию о странах, телефонных кодах, масках ввода номеров и часовых поясах:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { geo } from '@dxtmisha/media'

// Поиск информации по стране
const vietnam = geo.find(item => item.country === 'VN')

console.log(vietnam?.country)   // 'VN'
console.log(vietnam?.phoneCode) // '84'
console.log(vietnam?.phoneMask) // ['+84-**-***-****', ...]
console.log(vietnam?.zone)      // 'Asia/Ho_Chi_Minh'
`})}),`
`,(0,c.jsx)(t.h3,{id:`построение-динамического-селектора-стран`,children:`Построение динамического селектора стран`}),`
`,(0,c.jsxs)(t.p,{children:[`Связка данных `,(0,c.jsx)(t.code,{children:`geo`}),` с CSS-спрайтом позволяет создавать легковесные списки выбора стран:`]}),`
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
  console.log('Выбрана страна:', code)
}
<\/script>
`})}),`
`,(0,c.jsx)(t.h2,{id:`4-интеграция-с-компонентами-dxt-ui`,children:`4. Интеграция с компонентами DXT UI`}),`
`,(0,c.jsxs)(t.p,{children:[`Подсистема флагов напрямую задействована в компонентах библиотеки `,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`D1InputPhone`})}),` — автоматически отрисовывает нужный флаг страны из спрайта на основе распознанного телефонного кода или выбранного региона.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`D1MenuCountry`})}),` — селектор стран со мгновенным рендерингом через спрайт и поддержкой навигации с клавиатуры.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`справочник-популярных-кодов-стран`,children:`Справочник популярных кодов стран`}),`
`,(0,c.jsx)(t.p,{children:`Часто используемые коды стран и соответствующие идентификаторы экспорта:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Вьетнам (`,(0,c.jsx)(t.code,{children:`VN`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`VnSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--VN`}),`, телефонный код `,(0,c.jsx)(t.code,{children:`+84`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`США (`,(0,c.jsx)(t.code,{children:`US`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`UsSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--US`}),`, телефонный код `,(0,c.jsx)(t.code,{children:`+1`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Великобритания (`,(0,c.jsx)(t.code,{children:`GB`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`GbSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--GB`}),`, телефонный код `,(0,c.jsx)(t.code,{children:`+44`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Германия (`,(0,c.jsx)(t.code,{children:`DE`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`DeSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--DE`}),`, телефонный код `,(0,c.jsx)(t.code,{children:`+49`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Франция (`,(0,c.jsx)(t.code,{children:`FR`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`FrSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--FR`}),`, телефонный код `,(0,c.jsx)(t.code,{children:`+33`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Япония (`,(0,c.jsx)(t.code,{children:`JP`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`JpSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--JP`}),`, телефонный код `,(0,c.jsx)(t.code,{children:`+81`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Китай (`,(0,c.jsx)(t.code,{children:`CN`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`CnSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--CN`}),`, телефонный код `,(0,c.jsx)(t.code,{children:`+86`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Южная Корея (`,(0,c.jsx)(t.code,{children:`KR`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`KrSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--KR`}),`, телефонный код `,(0,c.jsx)(t.code,{children:`+82`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Австралия (`,(0,c.jsx)(t.code,{children:`AU`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`AuSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--AU`}),`, телефонный код `,(0,c.jsx)(t.code,{children:`+61`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Канада (`,(0,c.jsx)(t.code,{children:`CA`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`CaSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--CA`}),`, телефонный код `,(0,c.jsx)(t.code,{children:`+1`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Бразилия (`,(0,c.jsx)(t.code,{children:`BR`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`BrSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--BR`}),`, телефонный код `,(0,c.jsx)(t.code,{children:`+55`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Индия (`,(0,c.jsx)(t.code,{children:`IN`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`InSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--IN`}),`, телефонный код `,(0,c.jsx)(t.code,{children:`+91`})]}),`
`,(0,c.jsx)(t.li,{children:`и все остальные 240+ кодов стран стандарта ISO 3166-1 alpha-2.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};