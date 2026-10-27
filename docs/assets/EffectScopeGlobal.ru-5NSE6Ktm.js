import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Classes/EffectScopeGlobal - Глобальная реактивная область`}),`
`,(0,c.jsx)(t.h1,{id:`класс-effectscopeglobal`,children:`Класс EffectScopeGlobal`}),`
`,(0,c.jsxs)(t.p,{children:[`Статическая точка входа для эффектов в лениво созданной отсоединённой области Vue. Область кэшируется через `,(0,c.jsx)(t.code,{children:`ServerStorage`}),`; при SSR её владелец определяется инициализированным контекстом запроса.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ленивая область`}),` — создаётся при первом `,(0,c.jsx)(t.code,{children:`run()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Отдельный срок жизни`}),` — остановка области компонента не останавливает эти эффекты.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сохранение результата`}),` — результат и ошибки обработчика передаются вызывающему коду.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`поведение-и-жизненный-цикл`,children:`Поведение и жизненный цикл`}),`
`,(0,c.jsxs)(t.p,{children:[`Перед SSR инициализируйте `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` контекстом текущего запроса. Класс не предоставляет метода остановки; при необходимости отдельной очистки возвращайте из обработчика соответствующие функции. Асинхронная работа после `,(0,c.jsx)(t.code,{children:`await`}),` не включается в область автоматически.`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { EffectScopeGlobal } from '@dxtmisha/functional'
import { ref, watch } from 'vue'

const source = /*#__PURE__*/ ref(0)
const observed = /*#__PURE__*/ ref(0)
const stop = /*#__PURE__*/ EffectScopeGlobal.run(() => watch(source, value => {
  observed.value = value
}))
stop?.()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`выполнение-эффектов`,children:`Выполнение эффектов`}),`
`,(0,c.jsx)(t.h4,{id:`run`,children:(0,c.jsx)(t.code,{children:`run`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`run<T>(fn: () => T): T | undefined`})}),`
`,(0,c.jsx)(t.p,{children:`Синхронно выполняет обработчик в кэшированной отсоединённой области эффектов и возвращает результат.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fn: () => T`}),` — Обработчик для выполнения в отсоединённой области.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`T | undefined`}),` — Результат обработчика либо undefined для неактивной сохранённой области.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ EffectScopeGlobal.run(() => 0)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};