import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Classes/DesignComp`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designcomp`,children:`Класс DesignComp`}),`
`,(0,c.jsxs)(t.p,{children:[`Экспортируемый подкласс `,(0,c.jsx)(t.code,{children:`DesignComponents<COMP, P>`}),`. Не добавляет собственных членов или поведения: поиск, реактивные модификации и рендеринг VNode наследуются без изменений.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Реестр`}),` — `,(0,c.jsx)(t.code,{children:`COMP`}),` определяет допустимые имена компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Реактивные значения по умолчанию`}),` — карты модификаций и отдельные значения могут быть ссылками.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Объединение свойств`}),` — явные свойства заменяют значения по умолчанию; классы и стили объединяются.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor( components: COMP = {} as COMP, modification?: ConstrComponentMod<P> )`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`components: COMP = {} as COMP`}),` — Реестр подключённых компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`modification?: ConstrComponentMod<P>`}),` — Карты свойств по умолчанию по индексам, могут быть реактивными.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`поведение-и-жизненный-цикл`,children:`Поведение и жизненный цикл`}),`
`,(0,c.jsxs)(t.p,{children:[`Конструктор и методы ниже наследуются от `,(0,c.jsx)(t.code,{children:`DesignComponents`}),`. `,(0,c.jsx)(t.code,{children:`COMP`}),` описывает реестр, `,(0,c.jsx)(t.code,{children:`P`}),` — свойства компонентов.`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignComp } from '@dxtmisha/functional'
import { ref } from 'vue'

const disabled = /*#__PURE__*/ ref(false)
const components = /*#__PURE__*/ new DesignComp(
  { button: 'button' },
  { button: { disabled, class: 'base' } }
)
const node = /*#__PURE__*/ components.renderOne('button', { title: 'Save' })
disabled.value = true
const updatedNode = /*#__PURE__*/ components.renderOne('button')
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`поиск-в-реестре`,children:`Поиск в реестре`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`is<K extends keyof COMP>(name: K): name is K`}),` — Проверяет наличие компонента в записи реестра.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`get<K extends keyof COMP>(name: K): COMP[K]`}),` — Возвращает запись реестра без создания VNode.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`модификация-свойств`,children:`Модификация свойств`}),`
`,(0,c.jsx)(t.h4,{id:`getmodification`,children:(0,c.jsx)(t.code,{children:`getModification`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getModification<K extends keyof P>( index?: K & string | string, props?: P[K] | ConstrItem ): ConstrItem | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Кэширует вычисляемые значения по индексу и объединяет явные свойства через `,(0,c.jsx)(t.code,{children:`toBinds`}),`. Без непустого индекса возвращает исходные свойства без изменений.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index?: K & string | string`}),` — Индекс записи либо модификации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props?: P[K] | ConstrItem`}),` — Входные свойства.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ConstrItem | undefined`}),` — Объединённая карта свойств либо исходные свойства без индекса.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const props = /*#__PURE__*/ components.getModification('button', { disabled: false })
`})}),`
`,(0,c.jsx)(t.h3,{id:`рендеринг`,children:`Рендеринг`}),`
`,(0,c.jsx)(t.h4,{id:`renderone`,children:(0,c.jsx)(t.code,{children:`renderOne`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`renderOne< K extends keyof COMP, PK extends keyof P >( name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string ): VNode | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Создаёт один VNode с объединёнными свойствами и дочерними элементами. Возвращает `,(0,c.jsx)(t.code,{children:`undefined`}),` для отсутствующего компонента.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: K & string`}),` — Ключ подключённого компонента в реестре.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props?: P[PK] & ConstrItem | ConstrItem`}),` — Входные свойства.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`children?: RawChildren | RawSlots`}),` — Дочернее содержимое либо необязательный массив VNode.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index?: PK & string | string`}),` — Индекс записи либо модификации.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`VNode | undefined`}),` — Отрендеренный VNode либо undefined при отсутствии компонента.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const node = /*#__PURE__*/ components.renderOne('button', { title: 'Save' })
`})}),`
`,(0,c.jsx)(t.h4,{id:`render`,children:(0,c.jsx)(t.code,{children:`render`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`render< K extends keyof COMP, PK extends keyof P >( name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string ): VNode[]`})}),`
`,(0,c.jsx)(t.p,{children:`Оборачивает VNode в массив; возвращает пустой массив для отсутствующего компонента.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: K & string`}),` — Ключ подключённого компонента в реестре.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props?: P[PK] & ConstrItem | ConstrItem`}),` — Входные свойства.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`children?: RawChildren | RawSlots`}),` — Дочернее содержимое либо необязательный массив VNode.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index?: PK & string | string`}),` — Индекс записи либо модификации.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`VNode[]`}),` — Массив из одного VNode либо пустой массив.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const nodes = /*#__PURE__*/ components.render('button')
`})}),`
`,(0,c.jsx)(t.h4,{id:`renderadd`,children:(0,c.jsx)(t.code,{children:`renderAdd`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`renderAdd< K extends keyof COMP, PK extends keyof P >( item: unknown[], name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string ): this`})}),`
`,(0,c.jsx)(t.p,{children:`Добавляет отрендеренные узлы в существующий массив и возвращает тот же реестр для цепочек вызовов.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: unknown[]`}),` — Элемент либо выходной массив согласно сигнатуре.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: K & string`}),` — Ключ подключённого компонента в реестре.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props?: P[PK] & ConstrItem | ConstrItem`}),` — Входные свойства.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`children?: RawChildren | RawSlots`}),` — Дочернее содержимое либо необязательный массив VNode.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index?: PK & string | string`}),` — Индекс записи либо модификации.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`this`}),` — Текущий экземпляр для цепочек вызовов.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const nodes: unknown[] = []
components.renderAdd(nodes, 'button')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};