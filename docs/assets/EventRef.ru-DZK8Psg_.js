import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Classes/EventRef - Реактивный менеджер событий`}),`
`,(0,c.jsx)(t.h1,{id:`класс-eventref`,children:`Класс EventRef`}),`
`,(0,c.jsxs)(t.p,{children:[`Реактивное расширение `,(0,c.jsx)(t.code,{children:`EventItem`}),` для событий DOM и окна. Отслеживает переданные в конструктор ссылки на цель и контрольный элемент; владеющая область эффектов Vue останавливает слушатели при завершении.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Смена цели`}),` — активные слушатели переносятся при изменении ссылки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Явный запуск`}),` — создание само по себе не включает прослушивание.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Унаследованное управление`}),` — цепочки вызовов, несколько типов событий и detail предоставляет `,(0,c.jsx)(t.code,{children:`EventItem`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor( elementSelector?: RefOrNormal<ElementOrString<E> | undefined>, elementSelectorControl?: RefOrNormal<ElementOrString<HTMLElement>>, type: string | string[] = ['click'], listener?: EventListenerDetail<O, D>, options?: EventOptions, detail?: D )`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementSelector?: RefOrNormal<ElementOrString<E> | undefined>`}),` — Целевой элемент либо селектор.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementSelectorControl?: RefOrNormal<ElementOrString<HTMLElement>>`}),` — Необязательный контрольный элемент либо селектор для проверки присутствия в DOM.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string | string[] = ['click']`}),` — Тип события либо массив; по умолчанию click.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listener?: EventListenerDetail<O, D>`}),` — Обработчик события, получающий событие и сохранённый detail.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: EventOptions`}),` — Параметры настройки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail?: D`}),` — Пользовательские данные события.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`поведение-и-жизненный-цикл`,children:`Поведение и жизненный цикл`}),`
`,(0,c.jsxs)(t.p,{children:[`Параметры типов: `,(0,c.jsx)(t.code,{children:`E`}),` — цель, `,(0,c.jsx)(t.code,{children:`O`}),` — событие, `,(0,c.jsx)(t.code,{children:`D`}),` — пользовательский detail. Ссылки принимают только входы цели и контрольного элемента конструктора; унаследованные сеттеры принимают обычные значения. Перенос слушателей выполняется после очередного обновления Vue. Вне области эффектов вызывайте `,(0,c.jsx)(t.code,{children:`stop()`}),` вручную. Удаление контрольного элемента проверяется при обработке события. `,(0,c.jsx)(t.code,{children:`resize`}),` использует `,(0,c.jsx)(t.code,{children:`ResizeObserver`}),`, `,(0,c.jsx)(t.code,{children:`scroll-sync`}),` — кадры анимации.`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { EventRef } from '@dxtmisha/functional'
import { effectScope, ref } from 'vue'

const target = /*#__PURE__*/ ref<HTMLElement>()
const clicks = /*#__PURE__*/ ref(0)
const scope = /*#__PURE__*/ effectScope()
const listener = /*#__PURE__*/ scope.run(() => new EventRef(
  target, undefined, 'click', () => { clicks.value++ }
).start())
scope.stop()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление-слушателями-унаследовано`,children:`Управление слушателями (унаследовано)`}),`
`,(0,c.jsx)(t.h4,{id:`start`,children:(0,c.jsx)(t.code,{children:`start`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`start(): this`})}),`
`,(0,c.jsx)(t.p,{children:`Включает прослушивание; повторные вызовы не дублируют подписки.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`this`}),` — Текущий экземпляр для цепочек вызовов.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`listener?.start()
`})}),`
`,(0,c.jsx)(t.h4,{id:`stop`,children:(0,c.jsx)(t.code,{children:`stop`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`stop(): this`})}),`
`,(0,c.jsx)(t.p,{children:`Удаляет активных слушателей и наблюдателей; допускает повторные вызовы.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`this`}),` — Текущий экземпляр для цепочек вызовов.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`listener?.stop()
`})}),`
`,(0,c.jsx)(t.h4,{id:`toggle`,children:(0,c.jsx)(t.code,{children:`toggle`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`toggle(activity: boolean): this`})}),`
`,(0,c.jsx)(t.p,{children:`Запускает или останавливает согласно логическому аргументу.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`activity: boolean`}),` — Требуемое состояние прослушивания.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`this`}),` — Текущий экземпляр для цепочек вызовов.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`listener?.toggle(false)
`})}),`
`,(0,c.jsx)(t.h4,{id:`reset`,children:(0,c.jsx)(t.code,{children:`reset`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`reset(): this`})}),`
`,(0,c.jsx)(t.p,{children:`Переподключает активного слушателя; неактивного оставляет остановленным.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`this`}),` — Текущий экземпляр для цепочек вызовов.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`listener?.reset()
`})}),`
`,(0,c.jsx)(t.h3,{id:`состояние-и-настройки-унаследовано`,children:`Состояние и настройки (унаследовано)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`isActive(): boolean`}),` — Сообщает, включено ли прослушивание.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getElement(): E | undefined`}),` — Возвращает текущую разрешённую цель.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`setElement(elementSelector?: ElementOrString<E>): this`}),` — Меняет цель и перезапускает активных слушателей.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`setElementControl<EC extends HTMLElement>(elementSelector?: ElementOrString<EC>): this`}),` — Меняет элемент проверки присутствия в DOM.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`setType(type: string | string[]): this`}),` — Меняет типы событий и перезапускает активных слушателей.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`setListener(listener: EventListenerDetail<O, D>): this`}),` — Заменяет обработчик.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`setOptions(options?: EventOptions): this`}),` — Заменяет опции с повторным подключением при активности.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`setDetail(detail?: D): this`}),` — Заменяет detail, передаваемый вторым аргументом обработчика.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`отправка-событий-унаследовано`,children:`Отправка событий (унаследовано)`}),`
`,(0,c.jsx)(t.h4,{id:`dispatch`,children:(0,c.jsx)(t.code,{children:`dispatch`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`dispatch(detail: D | undefined = this.detail): this`})}),`
`,(0,c.jsx)(t.p,{children:`Отправляет CustomEvent для каждого настроенного типа. Переданный detail попадает в event.detail; второй аргумент обработчика остаётся сохранённым detail слушателя.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail: D | undefined = this.detail`}),` — Пользовательские данные события.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`this`}),` — Текущий экземпляр для цепочек вызовов.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`listener?.dispatch({ source: 'manual' })
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};