import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Classes/DesignConstructorAbstract - Базовая логика конструктора`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designconstructorabstract`,children:`Класс DesignConstructorAbstract`}),`
`,(0,c.jsxs)(t.p,{children:[`Абстрактный конструктор рендеринга Vue: объединяет именование, ссылку на корневой элемент, подключённые компоненты, атрибуты, слоты, экспортируемые данные и вычисляемые классы/стили. Создавайте конкретный подкласс в `,(0,c.jsx)(t.code,{children:`setup()`}),` компонента.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Композиция`}),` — классы корня объединяют логику, опции и внешние атрибуты.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Стили`}),` — объединяются в порядке приоритета: логика, опции, внешние стили.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Слоты`}),` — фрагменты с ключами сохраняют группы слотов и отслеживают замену слотов.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor( name: string, props: Readonly<P>, options?: ConstrOptions<COMP, EMITS, P> )`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — Имя компонента, зависимости, слота или маршрута согласно методу.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props: Readonly<P>`}),` — Входные свойства.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: ConstrOptions<COMP, EMITS, P>`}),` — Параметры настройки.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`поведение-и-жизненный-цикл`,children:`Поведение и жизненный цикл`}),`
`,(0,c.jsxs)(t.p,{children:[`Параметры типов: `,(0,c.jsx)(t.code,{children:`E`}),` — корневой элемент; `,(0,c.jsx)(t.code,{children:`COMP`}),` — реестр компонентов; `,(0,c.jsx)(t.code,{children:`EMITS`}),` — события; `,(0,c.jsx)(t.code,{children:`EXPOSE`}),` — экспортируемые данные; `,(0,c.jsx)(t.code,{children:`SLOTS`}),` — слоты; `,(0,c.jsx)(t.code,{children:`CLASSES`}),` — карта классов; `,(0,c.jsx)(t.code,{children:`P`}),` — свойства. Реализуйте `,(0,c.jsx)(t.code,{children:`initExpose`}),`, `,(0,c.jsx)(t.code,{children:`initClasses`}),`, `,(0,c.jsx)(t.code,{children:`initStyles`}),` и `,(0,c.jsx)(t.code,{children:`initRender`}),`. Конструктор сразу инициализирует состояние; вызовите `,(0,c.jsx)(t.code,{children:`render()`}),` один раз в `,(0,c.jsx)(t.code,{children:`setup()`}),`, чтобы получить функцию рендеринга. `,(0,c.jsx)(t.code,{children:`getAttrs()`}),` исключает `,(0,c.jsx)(t.code,{children:`class`}),` и `,(0,c.jsx)(t.code,{children:`style`}),`. Записи классов опций, кроме `,(0,c.jsx)(t.code,{children:`main`}),`, заменяют одноимённые записи логики; `,(0,c.jsx)(t.code,{children:`main`}),` нормализуется из всех трёх источников. `,(0,c.jsx)(t.code,{children:`expose()`}),` всегда добавляет ссылку на корень как `,(0,c.jsx)(t.code,{children:`elementHtml`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignConstructorAbstract } from '@dxtmisha/functional'
import { defineComponent, h, type VNode } from 'vue'

class ExampleDesign extends DesignConstructorAbstract<
  HTMLElement, {}, {}, {}, {}, { main: string }, {}
> {
  constructor() { super('d1.example', {}) }
  protected initExpose(): {} { return {} }
  protected initClasses(): { main: string } { return { main: 'd1-example' } }
  protected initStyles(): {} { return {} }
  protected initRender(): VNode {
    return h('div', {
      ...this.getAttrs(),
      ref: this.element,
      class: this.classes?.value.main,
      style: this.styles?.value
    })
  }
}

const Example = /*#__PURE__*/ defineComponent({
  inheritAttrs: false,
  setup(_props, context) {
    const design = new ExampleDesign()
    context.expose(design.expose())
    return design.render()
  }
})
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`атрибуты-и-именование`,children:`Атрибуты и именование`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getAttrs(): ConstrItem`}),` — Возвращает новый объект атрибутов без `,(0,c.jsx)(t.code,{children:`class`}),` и `,(0,c.jsx)(t.code,{children:`style`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getKeyClass<K extends keyof CLASSES>(name: K & string)`}),` — Возвращает ключ подэлемента и его текущее вычисляемое значение класса.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getNaming(): DesignName`}),` — Возвращает экземпляр `,(0,c.jsx)(t.code,{children:`DesignName`}),` этого конструктора.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`рендеринг-и-внешний-api`,children:`Рендеринг и внешний API`}),`
`,(0,c.jsx)(t.h4,{id:`render`,children:(0,c.jsx)(t.code,{children:`render`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`render(): () => VNode | VNode[] | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Регистрирует отслеживание замены слотов и возвращает функцию, делегирующую рендеринг `,(0,c.jsx)(t.code,{children:`initRender()`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`() => VNode | VNode[] | undefined`}),` — Запрошенное значение либо объект согласно сигнатуре.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const render = /*#__PURE__*/ design.render()
`})}),`
`,(0,c.jsx)(t.h4,{id:`expose`,children:(0,c.jsx)(t.code,{children:`expose`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`expose(): ConstrExpose<E, EXPOSE>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Объединяет данные `,(0,c.jsx)(t.code,{children:`initExpose()`}),` со ссылкой на корень `,(0,c.jsx)(t.code,{children:`elementHtml`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ConstrExpose<E, EXPOSE>`}),` — Запрошенное значение либо объект согласно сигнатуре.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`context.expose(design.expose())
`})}),`
`,(0,c.jsx)(t.h3,{id:`защищённые-точки-расширения`,children:`Защищённые точки расширения`}),`
`,(0,c.jsx)(t.h4,{id:`initexpose`,children:(0,c.jsx)(t.code,{children:`initExpose`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`initExpose(): EXPOSE`})}),`
`,(0,c.jsx)(t.p,{children:`Реализуйте в подклассе для получения внешнего API.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`EXPOSE`}),` — Запрошенное значение либо объект согласно сигнатуре.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`protected initExpose(): {} { return {} }
`})}),`
`,(0,c.jsx)(t.h4,{id:`initclasses`,children:(0,c.jsx)(t.code,{children:`initClasses`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`initClasses(): Partial<CLASSES>`})}),`
`,(0,c.jsx)(t.p,{children:`Реализуйте в подклассе для получения карты классов логики перед объединением.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`Partial<CLASSES>`}),` — Запрошенное значение либо объект согласно сигнатуре.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`protected initClasses(): { main: string } { return { main: 'd1-example' } }
`})}),`
`,(0,c.jsx)(t.h4,{id:`initstyles`,children:(0,c.jsx)(t.code,{children:`initStyles`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`initStyles(): ConstrStyles`})}),`
`,(0,c.jsx)(t.p,{children:`Реализуйте в подклассе для получения стилей до применения опций и атрибутов.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ConstrStyles`}),` — Запрошенное значение либо объект согласно сигнатуре.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`protected initStyles(): {} { return {} }
`})}),`
`,(0,c.jsx)(t.h4,{id:`initrender`,children:(0,c.jsx)(t.code,{children:`initRender`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`initRender(): VNode | VNode[] | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Реализуйте дерево VNode. Результат — один узел, массив или `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`VNode | VNode[] | undefined`}),` — Запрошенное значение либо объект согласно сигнатуре.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`protected initRender(): VNode { return h('div', { ref: this.element }) }
`})}),`
`,(0,c.jsx)(t.h4,{id:`initslot`,children:(0,c.jsx)(t.code,{children:`initSlot`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`initSlot<K extends keyof SLOTS>( name: K, children?: VNode[], props: ConstrItem = {} ): VNode | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Рендерит именованный слот как фрагмент с ключом и при необходимости добавляет фрагмент в `,(0,c.jsx)(t.code,{children:`children`}),`. Отсутствующий слот возвращает `,(0,c.jsx)(t.code,{children:`undefined`}),`, не меняя массив.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: K`}),` — Ключ именованного слота.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`children?: VNode[]`}),` — Дочернее содержимое либо необязательный массив VNode.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props: ConstrItem = {}`}),` — Свойства scoped-слота; по умолчанию пустой объект.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`VNode | undefined`}),` — Запрошенное значение либо объект согласно сигнатуре.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const children: VNode[] = []
this.initSlot('default', children, { value: 0 })
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};