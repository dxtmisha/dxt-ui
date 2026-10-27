import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Classes/DesignLogicAbstract`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designlogicabstract`,children:`Класс DesignLogicAbstract`}),`
`,(0,c.jsx)(t.p,{children:`Абстрактный координатор зависимостей логики компонента. Сохраняет текущую область эффектов Vue и общие входные данные, лениво создаёт и кэширует зависимости по строковому ключу.`}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ленивое создание`}),` — фабрики параметров вызываются при первом создании.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Владение эффектами`}),` — эффекты зависимостей принадлежат сохранённой активной области.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Жизненный цикл`}),` — синхронные обработчики распознаются через `,(0,c.jsx)(t.code,{children:`DesignLifecycleAbstract`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor( props: Readonly<P>, element: Ref<E | undefined>, naming: DesignName, components?: DesignComponents<COMP, P>, slots?: SLOTS, emits?: ConstrEmit<EMITS>, constructors?: Partial<CONSTRUCTORS>, hasLifecycle: boolean = true )`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props: Readonly<P>`}),` — Входные свойства.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: Ref<E | undefined>`}),` — Ссылка на корневой элемент.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`naming: DesignName`}),` — Общий помощник DesignName.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`components?: DesignComponents<COMP, P>`}),` — Реестр подключённых компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`slots?: SLOTS`}),` — Реестр именованных слотов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`emits?: ConstrEmit<EMITS>`}),` — Функция событий компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`constructors?: Partial<CONSTRUCTORS>`}),` — Переопределения конструкторов зависимостей.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hasLifecycle: boolean = true`}),` — Регистрировать ли хуки компонента; по умолчанию true.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`поведение-и-жизненный-цикл`,children:`Поведение и жизненный цикл`}),`
`,(0,c.jsxs)(t.p,{children:[`Параметры типов: E — корневой элемент, COMP — реестр компонентов, EMITS — события, SLOTS — слоты, P — свойства, CONSTRUCTORS — карта конструкторов зависимостей. Создавайте объект в `,(0,c.jsx)(t.code,{children:`setup()`}),` или активной `,(0,c.jsx)(t.code,{children:`effectScope()`}),`. Без сохранённой активной области или доступного конструктора поиск фактически возвращает `,(0,c.jsx)(t.code,{children:`undefined`}),`, несмотря на объявленный тип экземпляра. Переопределения `,(0,c.jsx)(t.code,{children:`constructors`}),` имеют приоритет над `,(0,c.jsx)(t.code,{children:`constructorItems[name].item`}),`. Условия начинают отслеживаться при монтировании: истинное условие создаёт зависимость, ложное не уничтожает её. Хуки регистрируются только в компонентах Vue; `,(0,c.jsx)(t.code,{children:`hasLifecycle = false`}),` отключает регистрацию. SSR не вызывает клиентские обработчики. При монтировании сначала вызываются обработчики существующих зависимостей, затем инициализируются условия и вызывается обработчик логики. Поздние зависимости монтируются сразу. Ошибки обработчиков зависимостей собираются, передаются в `,(0,c.jsx)(t.code,{children:`ErrorCenter`}),` и выбрасываются как `,(0,c.jsx)(t.code,{children:`AggregateError`}),` после обхода всех обработчиков; последующие обработчики логики на этом пути не вызываются.`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignLogicAbstract, DesignName } from '@dxtmisha/functional'
import { effectScope, ref } from 'vue'

class Dependency {}

class Logic extends DesignLogicAbstract<
  HTMLElement, {}, {}, {}, {}, { dependency: typeof Dependency }
> {
  protected readonly constructorItems = { dependency: { item: Dependency } }

  constructor() {
    super({}, ref<HTMLElement>(), new DesignName('d1.example'))
  }
}

const scope = /*#__PURE__*/ effectScope()
const logic = /*#__PURE__*/ scope.run(() => new Logic())
const dependency = /*#__PURE__*/ logic?.getInstance('dependency')
scope.stop()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`доступ-к-зависимостям`,children:`Доступ к зависимостям`}),`
`,(0,c.jsx)(t.h4,{id:`getinstance`,children:(0,c.jsx)(t.code,{children:`getInstance`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getInstance<K extends keyof CONSTRUCTORS & string>(name: K): ConstrInstance<CONSTRUCTORS, K>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Возвращает кэшированную зависимость или создаёт её в сохранённой активной области. Аргументы берутся из необязательной фабрики `,(0,c.jsx)(t.code,{children:`parameters()`}),`. Ошибка конструктора не кэшируется и допускает повторную попытку.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: K`}),` — Строковый ключ конструктора зависимости.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ConstrInstance<CONSTRUCTORS, K>`}),` — Кэшированный либо созданный экземпляр зависимости.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const dependency = /*#__PURE__*/ logic?.getInstance('dependency')
`})}),`
`,(0,c.jsx)(t.h3,{id:`сокращённый-доступ`,children:`Сокращённый доступ`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`i<K extends keyof CONSTRUCTORS & string>(name: K): ConstrInstance<CONSTRUCTORS, K>`}),` — Вызывает `,(0,c.jsx)(t.code,{children:`getInstance()`}),` с тем же ключом и результатом.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};