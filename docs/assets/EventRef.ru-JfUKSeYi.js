import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Classes/EventRef - Реактивный менеджер событий`}),`
`,(0,c.jsx)(n.h1,{id:`класс-eventref`,children:`Класс EventRef`}),`
`,(0,c.jsxs)(n.p,{children:[`Реактивный менеджер событий, упрощающий управление слушателями для DOM-элементов или объекта `,(0,c.jsx)(n.code,{children:`window`}),`. Автоматически обновляет подписки при изменении целевого элемента (переданного как Vue `,(0,c.jsx)(n.code,{children:`Ref`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:`Включает автоматическую обработку перепривязки слушателей при динамическом изменении элементов и интеграцию с жизненным циклом Vue.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Реактивность`}),` — автоматическое обновление при изменении `,(0,c.jsx)(n.code,{children:`Ref`}),` элемента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поддержка нескольких типов`}),` — одновременное прослушивание нескольких событий.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическая очистка`}),` — эффективное управление памятью через систему реактивности.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Создает новый экземпляр `,(0,c.jsx)(n.code,{children:`EventRef`}),`. Класс автоматически синхронизирует слушатели событий с состоянием переданных Vue `,(0,c.jsx)(n.code,{children:`ref`}),`. Если целевой элемент изменяется, `,(0,c.jsx)(n.code,{children:`EventRef`}),` автоматически перепривязывает событие.`]}),`
`,(0,c.jsx)(n.h3,{id:`ограничения-дженериков-generic-constraints`,children:`Ограничения дженериков (Generic Constraints)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`E extends ElementOrWindow`}),` — тип целевого элемента (например, `,(0,c.jsx)(n.code,{children:`HTMLElement`}),`, `,(0,c.jsx)(n.code,{children:`Window`}),`, или `,(0,c.jsx)(n.code,{children:`Document`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`O extends Event`}),` — тип объекта события (например, `,(0,c.jsx)(n.code,{children:`MouseEvent`}),`, `,(0,c.jsx)(n.code,{children:`KeyboardEvent`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`D extends Record<string, any>`}),` — тип пользовательских данных (`,(0,c.jsx)(n.code,{children:`detail`}),`), связанных с событием.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`elementSelector?: RefOrNormal<ElementOrString<E> | undefined>`}),` — целевой элемент или селектор (может быть реактивным).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`elementSelectorControl?: RefOrNormal<ElementOrString<HTMLElement>>`}),` — контрольный элемент. Если он удален из DOM, прослушивание прекращается.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string | string[] = ['click']`}),` — тип события или массив типов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listener?: EventListenerDetail<O, D>`}),` — функция-обработчик.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: EventOptions`}),` — параметры слушателя (`,(0,c.jsx)(n.code,{children:`capture`}),`, `,(0,c.jsx)(n.code,{children:`passive`}),`, `,(0,c.jsx)(n.code,{children:`once`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`detail?: D`}),` — дополнительные данные события.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { EventRef } from '@dxtmisha/functional'
import { ref, onMounted, onUnmounted } from 'vue'

// 1. Простая инициализация с Ref
const buttonRef = ref<HTMLButtonElement>()
const event = new EventRef(buttonRef, undefined, 'click', (e) => {
  console.log('Нажата кнопка:', e.target)
})

// 2. Использование нескольких событий и опций
const scrollEvent = new EventRef(
  window, 
  undefined, 
  ['scroll', 'resize'], 
  () => console.log('Изменение окна'),
  { passive: true }
)

onMounted(() => {
  event.start()
  scrollEvent.start()
})

onUnmounted(() => {
  event.stop()
  scrollEvent.stop()
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`управление-жизненным-циклом`,children:`Управление жизненным циклом`}),`
`,(0,c.jsx)(n.p,{children:`Методы для контроля активности прослушивателей.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`start(): this`}),` — Активирует прослушивание событий. Если целевой элемент (`,(0,c.jsx)(n.code,{children:`ref`}),`) еще не примонтирован, слушатели будут добавлены автоматически сразу после его появления.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`stop(): this`}),` — Деактивирует прослушивание и удаляет все обработчики с текущего элемента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toggle(activity: boolean): this`}),` — Включает или выключает прослушивание в зависимости от переданного значения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset(): this`}),` — Перезапускает прослушивание. Автоматически вызывается при изменении ключевых параметров (типа события, опций и т.д.).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`состояние-и-получение-данных`,children:`Состояние и получение данных`}),`
`,(0,c.jsx)(n.p,{children:`Методы для проверки текущего статуса объекта.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isActive(): boolean`}),` — Возвращает `,(0,c.jsx)(n.code,{children:`true`}),`, если прослушивание событий в данный момент активно.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getElement(): E | undefined`}),` — Возвращает текущий DOM-элемент или объект, на котором установлены слушатели.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`конфигурация-сеттеры`,children:`Конфигурация (Сеттеры)`}),`
`,(0,c.jsx)(n.p,{children:`Все методы этой группы поддерживают цепочку вызовов (чейнинг) и автоматически обновляют активные слушатели.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setElement(element: ElementOrString): this`}),` — Динамически изменяет целевой элемент. При использовании в `,(0,c.jsx)(n.code,{children:`EventRef`}),` также поддерживает реактивные `,(0,c.jsx)(n.code,{children:`ref`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setElementControl(element: ElementOrString): this`}),` — Устанавливает контрольный элемент. Если этот элемент удаляется из DOM, прослушивание событий на основном элементе автоматически прекращается (защита от утечек памяти).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setType(type: string | string[]): this`}),` — Обновляет типы прослушиваемых событий (например, меняет `,(0,c.jsx)(n.code,{children:`click`}),` на `,(0,c.jsx)(n.code,{children:`dblclick`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setListener(listener: Function): this`}),` — Изменяет функцию-обработчик события без перезапуска всего цикла.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setOptions(options: EventOptions): this`}),` — Обновляет опции слушателя (`,(0,c.jsx)(n.code,{children:`capture`}),`, `,(0,c.jsx)(n.code,{children:`passive`}),`, `,(0,c.jsx)(n.code,{children:`once`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setDetail(detail: object): this`}),` — Обновляет пользовательские данные, доступные внутри обработчика.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`действия`,children:`Действия`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dispatch(detail?: object): this`}),` — Программно инициирует событие на целевом элементе. Если переданы данные в `,(0,c.jsx)(n.code,{children:`detail`}),`, они будут приоритетнее тех, что установлены через `,(0,c.jsx)(n.code,{children:`setDetail`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`специальные-события`,children:`Специальные события`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`EventRef`}),` (через базовый класс `,(0,c.jsx)(n.code,{children:`EventItem`}),`) предоставляет улучшенную обработку для некоторых типов событий:`]}),`
`,(0,c.jsx)(n.h3,{id:`resize`,children:(0,c.jsx)(n.code,{children:`resize`})}),`
`,(0,c.jsxs)(n.p,{children:[`В отличие от стандартного события `,(0,c.jsx)(n.code,{children:`resize`}),`, которое работает только на объекте `,(0,c.jsx)(n.code,{children:`window`}),`, здесь оно использует `,(0,c.jsx)(n.code,{children:`ResizeObserver`}),`. Это позволяет отслеживать изменение размеров любого конкретного DOM-элемента.`]}),`
`,(0,c.jsx)(n.h3,{id:`scroll-sync`,children:(0,c.jsx)(n.code,{children:`scroll-sync`})}),`
`,(0,c.jsxs)(n.p,{children:[`Оптимизированный вариант события прокрутки. Использует `,(0,c.jsx)(n.code,{children:`requestAnimationFrame`}),` для синхронизации вызова обработчика с частотой обновления экрана, что предотвращает "тормоза" при тяжелых вычислениях в процессе скролла.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};