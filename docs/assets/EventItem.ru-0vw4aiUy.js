import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/EventItem - Продвинутое Управление Событиями`}),`
`,(0,c.jsx)(n.h1,{id:`класс-eventitem`,children:`Класс EventItem`}),`
`,(0,c.jsxs)(n.p,{children:[`Мощная обертка для управления прослушивателями событий на DOM-элементах или объекте `,(0,c.jsx)(n.code,{children:`window`}),`. Класс упрощает работу с жизненным циклом событий (добавление, удаление, переключение), поддерживает автоматическую проверку наличия элемента в DOM и предоставляет встроенную оптимизацию для тяжелых событий, таких как `,(0,c.jsx)(n.code,{children:`resize`}),` и `,(0,c.jsx)(n.code,{children:`scroll`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление жизненным циклом`}),` — удобные методы `,(0,c.jsx)(n.code,{children:`start`}),`, `,(0,c.jsx)(n.code,{children:`stop`}),`, `,(0,c.jsx)(n.code,{children:`toggle`}),` и `,(0,c.jsx)(n.code,{children:`reset`}),` для контроля прослушивания событий.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Безопасность DOM`}),` — автоматическая проверка `,(0,c.jsx)(n.code,{children:`isInDom`}),` перед выполнением обработчика (можно настроить контрольный элемент).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поддержка ResizeObserver`}),` — встроенная обработка события `,(0,c.jsx)(n.code,{children:`resize`}),` для любых HTML-элементов через современный API.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Оптимизация прокрутки`}),` — специальный тип события `,(0,c.jsx)(n.code,{children:`scroll-sync`}),`, использующий `,(0,c.jsx)(n.code,{children:`requestAnimationFrame`}),` для высокой производительности.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Чейнинг и гибкость`}),` — поддержка цепочки вызовов и динамической смены цели, типа или обработчика события.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Пользовательские данные`}),` — возможность передачи и диспетчеризации кастомных данных через `,(0,c.jsx)(n.code,{children:`CustomEvent`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`EventItem(elementSelector, type, listener, options, detail)`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`ограничения-дженериков-generic-constraints`,children:`Ограничения дженериков (Generic Constraints)`}),`
`,(0,c.jsx)(n.p,{children:`Для обеспечения строгой типизации класс поддерживает следующие дженерики:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`E extends ElementOrWindow`}),` — Тип элемента, на котором слушаются события.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`O extends Event`}),` — Тип объекта события.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`D extends Record<string, any>`}),` — Структура дополнительных данных.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`elementSelector?: ElementOrString<E>`}),` — целевой элемент, на который вешается слушатель.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string | string[] = 'click'`}),` — тип события, массив типов или специальные типы (`,(0,c.jsx)(n.code,{children:`'resize'`}),`, `,(0,c.jsx)(n.code,{children:`'scroll-sync'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listener?: EventListenerDetail<O, D>`}),` — функция-обработчик события.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: EventOptions`}),` — стандартные опции `,(0,c.jsx)(n.code,{children:`addEventListener`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`detail?: D`}),` — пользовательские данные, которые будут доступны в обработчике.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { EventItem } from '@dxtmisha/functional-basic'

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
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`информационные`,children:`Информационные`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isActive(): boolean`}),` — Проверяет, активно ли в данный момент прослушивание события.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getElement(): E | undefined`}),` — Возвращает текущий целевой элемент.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`настройка-сеттеры`,children:`Настройка (Сеттеры)`}),`
`,(0,c.jsxs)(n.p,{children:[`Все методы этой группы поддерживают чейнинг и автоматически вызывают `,(0,c.jsx)(n.code,{children:`reset()`}),`, если событие активно.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setElement(elementSelector?: ElementOrString): this`}),` — Изменяет целевой элемент.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setElementControl(elementSelector?: ElementOrString): this`}),` — Устанавливает контрольный элемент (если его нет в DOM, событие не сработает).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setType(type: string | string[]): this`}),` — Изменяет тип события.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setListener(listener: Function): this`}),` — Изменяет функцию-обработчик.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setOptions(options?: EventOptions): this`}),` — Изменяет параметры прослушивателя.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setDetail(detail?: D): this`}),` — Изменяет пользовательские данные события.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`start(): this`}),` — Запускает прослушивание событий.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`stop(): this`}),` — Останавливает прослушивание.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toggle(activity: boolean): this`}),` — Включает или выключает прослушивание в зависимости от флага.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset(): this`}),` — Перезапускает событие (полезно после смены настроек).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dispatch(detail?: D): this`}),` — Вызывает событие на целевом элементе с передачей данных.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`специальные-события`,children:`Специальные события`}),`
`,(0,c.jsx)(n.h3,{id:`resize`,children:(0,c.jsx)(n.code,{children:`resize`})}),`
`,(0,c.jsxs)(n.p,{children:[`Если тип события установлен в `,(0,c.jsx)(n.code,{children:`resize`}),`, класс автоматически использует `,(0,c.jsx)(n.code,{children:`ResizeObserver`}),` для отслеживания изменений размера элемента (даже если это не `,(0,c.jsx)(n.code,{children:`window`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`scroll-sync`,children:(0,c.jsx)(n.code,{children:`scroll-sync`})}),`
`,(0,c.jsxs)(n.p,{children:[`Специальный тип для оптимизированной прокрутки. Внутри использует `,(0,c.jsx)(n.code,{children:`requestAnimationFrame`}),`, предотвращая лишние вызовы обработчика и повышая производительность.`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`динамическое-переключение-элемента`,children:`Динамическое переключение элемента`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const tracker = new EventItem('.item-1', 'mousemove', (e) => {
  console.log('Координаты:', e.clientX)
})

tracker.start()

// ... позже переключаем на другой элемент
tracker.setElement('.item-2')
`})}),`
`,(0,c.jsx)(n.h3,{id:`использование-customevent-с-данными`,children:`Использование CustomEvent с данными`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const emitter = new EventItem(window, 'my-custom-event')

emitter.setListener((e, detail) => {
  console.log('Получены данные:', e.detail) // данные из CustomEvent
})

emitter.start()

// Отправка события
emitter.dispatch({ userId: 123, action: 'refresh' })
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};