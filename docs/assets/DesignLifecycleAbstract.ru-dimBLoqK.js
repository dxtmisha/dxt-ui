import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Classes/DesignLifecycleAbstract`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designlifecycleabstract`,children:`Класс DesignLifecycleAbstract`}),`
`,(0,c.jsxs)(t.p,{children:[`Абстрактный базовый класс зависимостей с синхронными обработчиками жизненного цикла. `,(0,c.jsx)(t.code,{children:`DesignLogicAbstract`}),` вызывает эти обработчики только у экземпляров, наследующих этот класс.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Необязательные обработчики`}),` — любой обработчик можно не реализовывать.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Синхронный контракт`}),` — обработчики возвращают `,(0,c.jsx)(t.code,{children:`void`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Явный вызов`}),` — создание зависимости не запускает обработчики.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:`Наследуйте абстрактный класс; не создавайте его напрямую.`}),`
`,(0,c.jsx)(t.h2,{id:`поведение-и-жизненный-цикл`,children:`Поведение и жизненный цикл`}),`
`,(0,c.jsxs)(t.p,{children:[`У класса нет публичных методов. Подклассы реализуют readonly-свойства `,(0,c.jsx)(t.code,{children:`onMounted?: () => void`}),` и `,(0,c.jsx)(t.code,{children:`onUnmounted?: () => void`}),`. Асинхронную работу и её очистку организует подкласс.`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignLifecycleAbstract } from '@dxtmisha/functional'

class Dependency extends DesignLifecycleAbstract {
  mounted = false
  override readonly onMounted = (): void => { this.mounted = true }
  override readonly onUnmounted = (): void => { this.mounted = false }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`свойства`,children:`Свойства`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`onMounted: (() => void) | undefined`}),` — Необязательный синхронный обработчик монтирования.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`onUnmounted: (() => void) | undefined`}),` — Необязательный синхронный обработчик очистки.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.p,{children:`Публичных методов нет; используйте описанные выше свойства.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};