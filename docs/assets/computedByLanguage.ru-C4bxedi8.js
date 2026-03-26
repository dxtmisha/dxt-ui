import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Functions/computedByLanguage - Вычисляемое свойство по языку`}),`
`,(0,c.jsx)(n.h1,{id:`computedbylanguage`,children:(0,c.jsx)(n.code,{children:`computedByLanguage`})}),`
`,(0,c.jsx)(n.p,{children:`Создаёт реактивное вычисляемое свойство, которое автоматически пересчитывается при изменении текущего языка или зависимостей внутри геттеров.`}),`
`,(0,c.jsx)(n.h3,{id:`как-это-работает`,children:`Как это работает`}),`
`,(0,c.jsx)(n.p,{children:`Функция выполняет проверку в следующем порядке:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Проверка языка`}),`: Проверяет наличие установленного языка через `,(0,c.jsx)(n.code,{children:`GeoRef.get().value`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Проверка условий`}),`: Если передан параметр `,(0,c.jsx)(n.code,{children:`conditions`}),`, он вызывается для дополнительной проверки (например, проверка прав доступа или состояния загрузки данных).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Выполнение основного геттера`}),`: Если обе проверки выше прошли успешно, вызывается `,(0,c.jsx)(n.code,{children:`getter`}),`. Если он возвращает значение (не `,(0,c.jsx)(n.code,{children:`undefined`}),`), это значение становится результатом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Резервный вариант`}),`: Если любая из проверок не прошла или `,(0,c.jsx)(n.code,{children:`getter`}),` вернул `,(0,c.jsx)(n.code,{children:`undefined`}),`, выполняется `,(0,c.jsx)(n.code,{children:`getterNone`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getter: ComputedGetter<R>`}),` — Основная логика получения значения. Вызывается только если язык установлен и условия выполнены.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getterNone: R | (() => R)`}),` — Резервное значение или функция, возвращающая его. Вызывается как "план Б". По умолчанию: `,(0,c.jsx)(n.code,{children:`() => undefined`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`conditions?: () => boolean`}),` — Функция-условие. Служит "затвором" (gatekeeper): если она возвращает `,(0,c.jsx)(n.code,{children:`false`}),`, основной `,(0,c.jsx)(n.code,{children:`getter`}),` даже не будет запущен.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`debugOptions?: DebuggerOptions`}),` — Опции отладки реактивных вычислений Vue.js.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`ComputedRef<R>`}),` — Реактивное вычисляемое свойство.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { computedByLanguage } from '@dxtmisha/functional'
import { ref } from 'vue'

// Базовый пример
const label = computedByLanguage(() => translateKey('hello'))

// С резервным значением
const title = computedByLanguage(
  () => translateKey('page.title'),
  () => 'Untitled'
)

// С дополнительным условием
const isReady = ref(true)
const content = computedByLanguage(
  () => translateKey('content'),
  () => 'Loading...',
  () => isReady.value
)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};