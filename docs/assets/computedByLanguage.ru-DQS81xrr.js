import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Functions/computedByLanguage - Вычисляемое свойство по языку`}),`
`,(0,c.jsx)(t.h1,{id:`computedbylanguage`,children:(0,c.jsx)(t.code,{children:`computedByLanguage`})}),`
`,(0,c.jsx)(t.p,{children:`Создаёт реактивное вычисляемое свойство, которое автоматически пересчитывается при изменении текущего языка или зависимостей внутри геттеров.`}),`
`,(0,c.jsx)(t.h3,{id:`как-это-работает`,children:`Как это работает`}),`
`,(0,c.jsx)(t.p,{children:`Функция выполняет проверку в следующем порядке:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Проверка языка`}),`: Проверяет наличие установленного языка через `,(0,c.jsx)(t.code,{children:`GeoRef.get().value`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Проверка условий`}),`: Если передан параметр `,(0,c.jsx)(t.code,{children:`conditions`}),`, он вызывается для дополнительной проверки (например, проверка прав доступа или состояния загрузки данных).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Выполнение основного геттера`}),`: Если обе проверки выше прошли успешно, вызывается `,(0,c.jsx)(t.code,{children:`getter`}),`. Если он возвращает значение (не `,(0,c.jsx)(t.code,{children:`undefined`}),`), это значение становится результатом.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Резервный вариант`}),`: Если любая из проверок не прошла или `,(0,c.jsx)(t.code,{children:`getter`}),` вернул `,(0,c.jsx)(t.code,{children:`undefined`}),`, выполняется `,(0,c.jsx)(t.code,{children:`getterNone`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getter: ComputedGetter<R>`}),` — Основная логика получения значения. Вызывается только если язык установлен и условия выполнены.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getterNone: R | (() => R)`}),` — Резервное значение или функция, возвращающая его. Вызывается как "план Б". По умолчанию: `,(0,c.jsx)(t.code,{children:`() => undefined`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`conditions?: () => boolean`}),` — Функция-условие. Служит "затвором" (gatekeeper): если она возвращает `,(0,c.jsx)(t.code,{children:`false`}),`, основной `,(0,c.jsx)(t.code,{children:`getter`}),` даже не будет запущен.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`debugOptions?: DebuggerOptions`}),` — Опции отладки реактивных вычислений Vue.js.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`ComputedRef<R>`}),` — Реактивное вычисляемое свойство.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { computedByLanguage } from '@dxtmisha/functional'
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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};