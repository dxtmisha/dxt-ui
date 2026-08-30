import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/EventItem - Продвинутое Управление Событиями`}),`
`,(0,c.jsx)(t.h1,{id:`класс-eventitem`,children:`Класс EventItem`}),`
`,(0,c.jsxs)(t.p,{children:[`Мощная обертка для управления прослушивателями событий на DOM-элементах или объекте `,(0,c.jsx)(t.code,{children:`window`}),`. Класс упрощает работу с жизненным циклом событий (добавление, удаление, переключение), поддерживает автоматическую проверку наличия элемента в DOM и предоставляет встроенную оптимизацию для тяжелых событий, таких как `,(0,c.jsx)(t.code,{children:`resize`}),` и `,(0,c.jsx)(t.code,{children:`scroll`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление жизненным циклом`}),` — удобные методы `,(0,c.jsx)(t.code,{children:`start`}),`, `,(0,c.jsx)(t.code,{children:`stop`}),`, `,(0,c.jsx)(t.code,{children:`toggle`}),` и `,(0,c.jsx)(t.code,{children:`reset`}),` для контроля прослушивания событий.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Безопасность DOM`}),` — автоматическая проверка `,(0,c.jsx)(t.code,{children:`isInDom`}),` перед выполнением обработчика (можно настроить контрольный элемент).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поддержка ResizeObserver`}),` — встроенная обработка события `,(0,c.jsx)(t.code,{children:`resize`}),` для любых HTML-элементов через современный API.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Оптимизация прокрутки`}),` — специальный тип события `,(0,c.jsx)(t.code,{children:`scroll-sync`}),`, использующий `,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),` для высокой производительности.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Чейнинг и гибкость`}),` — поддержка цепочки вызовов и динамической смены цели, типа или обработчика события.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Пользовательские данные`}),` — возможность передачи и диспетчеризации кастомных данных через `,(0,c.jsx)(t.code,{children:`CustomEvent`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(t.code,{children:`EventItem(elementSelector, type, listener, options, detail)`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`ограничения-дженериков-generic-constraints`,children:`Ограничения дженериков (Generic Constraints)`}),`
`,(0,c.jsx)(t.p,{children:`Для обеспечения строгой типизации класс поддерживает следующие дженерики:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`E extends ElementOrWindow`}),` — Тип элемента, на котором слушаются события.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`O extends Event`}),` — Тип объекта события.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`D extends Record<string, any>`}),` — Структура дополнительных данных.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementSelector?: ElementOrString<E>`}),` — целевой элемент, на который вешается слушатель.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string | string[] = 'click'`}),` — тип события, массив типов или специальные типы (`,(0,c.jsx)(t.code,{children:`'resize'`}),`, `,(0,c.jsx)(t.code,{children:`'scroll-sync'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listener?: EventListenerDetail<O, D>`}),` — функция-обработчик события.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: EventOptions`}),` — стандартные опции `,(0,c.jsx)(t.code,{children:`addEventListener`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail?: D`}),` — пользовательские данные, которые будут доступны в обработчике.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { EventItem } from '@dxtmisha/functional-basic'

// 1. Простая инициализация
const myEvent = new EventItem(
  '.my-button', 
  'click', 
  (event) => console.log('Событие вызвано:', event.type)
)

// 2. Использование дженериков для строгой типизации
interface MyData { id: number }
const customEvent = new EventItem<Window, MouseEvent, MyData>(
  window,
  'mousedown',
  (event, detail) => {
    console.log('Клик по окну, ID данных:', detail?.id)
  },
  { passive: true },
  { id: 42 }
)

// 3. Активация прослушивания
myEvent.start()
customEvent.start()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`информационные`,children:`Информационные`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isActive(): boolean`}),` — Проверяет, активно ли в данный момент прослушивание события.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getElement(): E | undefined`}),` — Возвращает текущий целевой элемент.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`настройка-сеттеры`,children:`Настройка (Сеттеры)`}),`
`,(0,c.jsxs)(t.p,{children:[`Все методы этой группы поддерживают чейнинг и автоматически вызывают `,(0,c.jsx)(t.code,{children:`reset()`}),`, если событие активно.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setElement(elementSelector?: ElementOrString): this`}),` — Изменяет целевой элемент.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setElementControl(elementSelector?: ElementOrString): this`}),` — Устанавливает контрольный элемент (если его нет в DOM, событие не сработает).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setType(type: string | string[]): this`}),` — Изменяет тип события.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setListener(listener: Function): this`}),` — Изменяет функцию-обработчик.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setOptions(options?: EventOptions): this`}),` — Изменяет параметры прослушивателя.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setDetail(detail?: D): this`}),` — Изменяет пользовательские данные события.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`start(): this`}),` — Запускает прослушивание событий.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`stop(): this`}),` — Останавливает прослушивание.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toggle(activity: boolean): this`}),` — Включает или выключает прослушивание в зависимости от флага.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reset(): this`}),` — Перезапускает событие (полезно после смены настроек).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dispatch(detail?: D): this`}),` — Вызывает событие на целевом элементе с передачей данных.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h4,{id:`elementorwindow`,children:(0,c.jsx)(t.code,{children:`ElementOrWindow`})}),`
`,(0,c.jsxs)(t.p,{children:[`Элемент, на котором может висеть событие: `,(0,c.jsx)(t.code,{children:`HTMLElement | Window`}),`.`]}),`
`,(0,c.jsx)(t.h4,{id:`elementorstringe`,children:(0,c.jsx)(t.code,{children:`ElementOrString<E>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Тип для передачи элемента или его селектора: `,(0,c.jsx)(t.code,{children:`E | string`}),`.`]}),`
`,(0,c.jsx)(t.h4,{id:`eventlistenerdetailo-d`,children:(0,c.jsx)(t.code,{children:`EventListenerDetail<O, D>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Функция-обработчик события: `,(0,c.jsx)(t.code,{children:`(event: O, detail?: D) => void`}),`.`]}),`
`,(0,c.jsx)(t.h4,{id:`eventoptions`,children:(0,c.jsx)(t.code,{children:`EventOptions`})}),`
`,(0,c.jsxs)(t.p,{children:[`Опции прослушивания: `,(0,c.jsx)(t.code,{children:`AddEventListenerOptions | boolean | undefined`}),`.`]}),`
`,(0,c.jsx)(t.h4,{id:`eventactivityiteme`,children:(0,c.jsx)(t.code,{children:`EventActivityItem<E>`})}),`
`,(0,c.jsx)(t.p,{children:`Внутренний интерфейс для отслеживания активных слушателей.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: E | undefined`}),` — Целевой элемент.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` — Тип события.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listener?: (event: any) => void`}),` — Активная функция.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`observer?: ResizeObserver`}),` — Инстанс наблюдателя (для `,(0,c.jsx)(t.code,{children:`resize`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`специальные-события`,children:`Специальные события`}),`
`,(0,c.jsx)(t.h3,{id:`resize`,children:(0,c.jsx)(t.code,{children:`resize`})}),`
`,(0,c.jsxs)(t.p,{children:[`Если тип события установлен в `,(0,c.jsx)(t.code,{children:`resize`}),`, класс автоматически использует `,(0,c.jsx)(t.code,{children:`ResizeObserver`}),` для отслеживания изменений размера элемента (даже если это не `,(0,c.jsx)(t.code,{children:`window`}),`).`]}),`
`,(0,c.jsx)(t.h3,{id:`scroll-sync`,children:(0,c.jsx)(t.code,{children:`scroll-sync`})}),`
`,(0,c.jsxs)(t.p,{children:[`Специальный тип для оптимизированной прокрутки. Внутри использует `,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),`, предотвращая лишние вызовы обработчика и повышая производительность.`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.h3,{id:`динамическое-переключение-элемента`,children:`Динамическое переключение элемента`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const tracker = new EventItem('.item-1', 'mousemove', (e) => {
  console.log('Координаты:', e.clientX)
})

tracker.start()

// ... позже переключаем на другой элемент
tracker.setElement('.item-2')
`})}),`
`,(0,c.jsx)(t.h3,{id:`использование-customevent-с-данными`,children:`Использование CustomEvent с данными`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const emitter = new EventItem(window, 'my-custom-event')

emitter.setListener((e, detail) => {
  console.log('Получены данные:', e.detail) // данные из CustomEvent
})

emitter.start()

// Отправка события
emitter.dispatch({ userId: 123, action: 'refresh' })
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};