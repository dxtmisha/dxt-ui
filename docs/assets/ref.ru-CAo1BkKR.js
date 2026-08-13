import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/# Реактивные классы (Ref)`}),`
`,(0,c.jsx)(t.h1,{id:`реактивные-классы-ref`,children:`Реактивные классы (Ref)`}),`
`,(0,c.jsxs)(t.p,{children:[`Реактивные версии базовых классов созданы для бесшовной интеграции с `,(0,c.jsx)(t.strong,{children:`Vue 3 (Composition API)`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`особенности`,children:`Особенности`}),`
`,(0,c.jsxs)(t.p,{children:[`Основная идея заключается в том, что класс сам следит за изменениями входных данных и предоставляет готовые `,(0,c.jsx)(t.code,{children:`ComputedRef`}),` для использования в шаблонах. Это избавляет от необходимости вручную пересчитывать значения при смене локали или входных переменных.`]}),`
`,(0,c.jsx)(t.h2,{id:`доступные-классы`,children:`Доступные классы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`GeoRef`}),` — Управление глобальной локалью (страна, язык) и ее реактивным состоянием.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`DatetimeRef`}),` — Реактивная работа с датами, форматирование и вычисление компонентов времени.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`GeoIntlRef`}),` — Реактивное форматирование чисел, валют, списков и относительного времени.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`EventRef`}),` — Управление слушателями событий с автоматической привязкой к реактивным элементам.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`GeoFlagRef`}),` — Реактивное получение ссылок на флаги стран и списков государств.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`как-с-ними-работать`,children:`Как с ними работать`}),`
`,(0,c.jsxs)(t.p,{children:[`В отличие от базовых классов из `,(0,c.jsx)(t.code,{children:`functional-basic`}),`, которые работают с прямыми значениями, классы с суффиксом `,(0,c.jsx)(t.code,{children:`Ref`}),` принимают на вход как обычные данные, так и `,(0,c.jsx)(t.code,{children:`ref`}),`. Внутри они настраивают наблюдение (`,(0,c.jsx)(t.code,{children:`watch`}),`) таким образом, что любое изменение источника автоматически обновляет все зависимые вычисляемые свойства.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Глобальное состояние приложения управляется через статический класс `,(0,c.jsx)(t.code,{children:`GeoRef`}),`. Его методы возвращают реактивные данные о текущей стране и языке, а вызов `,(0,c.jsx)(t.code,{children:`GeoRef.set()`}),` мгновенно обновляет форматирование во всех остальных классах, таких как `,(0,c.jsx)(t.code,{children:`GeoIntlRef`}),` или `,(0,c.jsx)(t.code,{children:`DatetimeRef`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { ref } from 'vue'
import { GeoRef, DatetimeRef, GeoIntlRef } from '@dxtmisha/functional'

// 1. Глобальное управление (GeoRef)
const country = GeoRef.getCountry() // Всегда актуальный код страны

// 2. Реактивная обертка над датой (DatetimeRef)
const dateRaw = ref('2024-03-21')
const date = new DatetimeRef(dateRaw)
const displayDate = date.locale() // Автоматически обновится при изменении dateRaw или локали

// 3. Форматирование на лету (GeoIntlRef)
const price = ref(12500)
const intl = new GeoIntlRef()
const displayPrice = intl.currency(price, 'RUB')
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Этот же подход используется в `,(0,c.jsx)(t.code,{children:`EventRef`}),` для работы с событиями. Если целевой элемент (`,(0,c.jsx)(t.code,{children:`ref`}),`) меняется или временно становится `,(0,c.jsx)(t.code,{children:`null`}),`, класс сам переподключит слушатели, как только элемент снова появится в DOM. Вам не нужно следить за жизненным циклом элементов вручную — достаточно передать ссылку на объект.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { ref } from 'vue'
import { EventRef } from '@dxtmisha/functional'

const buttonRef = ref(null)

// Слушатель сам найдет кнопку, когда Vue привяжет ее к buttonRef
new EventRef(buttonRef, null, 'click', () => {
  console.log('Клик обработан реактивно')
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};