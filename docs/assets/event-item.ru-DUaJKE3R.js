import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/# Управление событиями`}),`
`,(0,c.jsx)(n.h1,{id:`управление-событиями`,children:`Управление событиями`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`EventItem`}),` — это продвинутая обертка для управления слушателями событий на DOM-элементах или объекте `,(0,c.jsx)(n.code,{children:`window`}),`. Он упрощает весь жизненный цикл событий, обеспечивает автоматический контроль наличия элемента в DOM и предоставляет встроенные оптимизации для высокочастотных событий.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { EventItem } from '@dxtmisha/functional-basic'

// 1. Инициализация
const event = new EventItem('.my-button', 'click', () => {
  console.log('Клик по кнопке!')
})

// 2. Управление жизненным циклом
event.start()  // Запустить прослушивание
event.stop()   // Остановить
event.toggle(true) // Переключить состояние
`})}),`
`,(0,c.jsx)(n.h2,{id:`мониторинг-элементов`,children:`Мониторинг элементов`}),`
`,(0,c.jsxs)(n.p,{children:[`Одной из ключевых особенностей `,(0,c.jsx)(n.code,{children:`EventItem`}),` является автоматическая деактивация события, если целевой элемент (или контрольный элемент) удаляется из DOM. Это предотвращает утечки памяти и ошибки в динамических интерфейсах.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Событие автоматически остановится, если элемент .my-button исчезнет из DOM
const event = new EventItem('.my-button', 'scroll', handler)
event.start()
`})}),`
`,(0,c.jsx)(n.h2,{id:`оптимизация-производительности`,children:`Оптимизация производительности`}),`
`,(0,c.jsx)(n.p,{children:`Класс включает встроенные механизмы оптимизации для тяжелых событий, таких как изменение размера окна или синхронизация прокрутки.`}),`
`,(0,c.jsxs)(n.h3,{id:`тип-resize`,children:[`Тип `,(0,c.jsx)(n.code,{children:`resize`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Использует `,(0,c.jsx)(n.code,{children:`ResizeObserver`}),` вместо стандартного события `,(0,c.jsx)(n.code,{children:`resize`}),`, что позволяет отслеживать изменение размера конкретного элемента, а не только всего окна.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const resizeEvent = new EventItem('.container', 'resize', (entry) => {
  console.log('Новая ширина:', entry.contentRect.width)
})
`})}),`
`,(0,c.jsxs)(n.h3,{id:`тип-scroll-sync`,children:[`Тип `,(0,c.jsx)(n.code,{children:`scroll-sync`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Оптимизирует обработку прокрутки через `,(0,c.jsx)(n.code,{children:`requestAnimationFrame`}),`, предотвращая избыточные вызовы обработчика и снижая нагрузку на процессор.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const scrollEvent = new EventItem(window, 'scroll-sync', () => {
  // Выполнится максимально плавно
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`ручной-запуск-событий`,children:`Ручной запуск событий`}),`
`,(0,c.jsxs)(n.p,{children:[`Вы можете вручную инициировать выполнение события на целевом элементе через метод `,(0,c.jsx)(n.code,{children:`dispatch`}),`. Это полезно для программной имитации действий пользователя.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Имитация клика
event.dispatch()

// Передача дополнительных данных (detail)
const customEvent = new EventItem(window, 'my-event', (e, detail) => {
  console.log('Данные:', detail)
})
customEvent.dispatch({ id: 123 })
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};