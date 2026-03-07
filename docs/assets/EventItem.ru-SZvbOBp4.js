import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/ru/functional-basic/Classes/EventItem - Продвинутое Управление Событиями"}),`
`,e.jsx(n.h1,{id:"класс-eventitem",children:"Класс EventItem"}),`
`,e.jsxs(n.p,{children:["Мощная обертка для управления прослушивателями событий на DOM-элементах или объекте ",e.jsx(n.code,{children:"window"}),". Класс упрощает работу с жизненным циклом событий (добавление, удаление, переключение), поддерживает автоматическую проверку наличия элемента в DOM и предоставляет встроенную оптимизацию для тяжелых событий, таких как ",e.jsx(n.code,{children:"resize"})," и ",e.jsx(n.code,{children:"scroll"}),"."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Управление жизненным циклом"})," — удобные методы ",e.jsx(n.code,{children:"start"}),", ",e.jsx(n.code,{children:"stop"}),", ",e.jsx(n.code,{children:"toggle"})," и ",e.jsx(n.code,{children:"reset"})," для контроля прослушивания событий."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Безопасность DOM"})," — автоматическая проверка ",e.jsx(n.code,{children:"isInDom"})," перед выполнением обработчика (можно настроить контрольный элемент)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Поддержка ResizeObserver"})," — встроенная обработка события ",e.jsx(n.code,{children:"resize"})," для любых HTML-элементов через современный API."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Оптимизация прокрутки"})," — специальный тип события ",e.jsx(n.code,{children:"scroll-sync"}),", использующий ",e.jsx(n.code,{children:"requestAnimationFrame"})," для высокой производительности."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Чейнинг и гибкость"})," — поддержка цепочки вызовов и динамической смены цели, типа или обработчика события."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Пользовательские данные"})," — возможность передачи и диспетчеризации кастомных данных через ",e.jsx(n.code,{children:"CustomEvent"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(n.p,{children:["Создает новый экземпляр ",e.jsx(n.code,{children:"EventItem"}),". Для активации прослушивания необходимо вызвать метод ",e.jsx(n.code,{children:"start()"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"elementSelector?: ElementOrString"})," — целевой элемент или селектор."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: string | string[] = 'click'"})," — тип события или массив типов."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"listener?: Function"})," — функция-обработчик."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: EventOptions"})," — объект настроек (",e.jsx(n.code,{children:"passive"}),", ",e.jsx(n.code,{children:"once"}),", ",e.jsx(n.code,{children:"capture"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"detail?: Record<string, any>"})," — пользовательские данные для события."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { EventItem } from '@dxtmisha/functional-basic'

const btn = document.querySelector('.my-button')
const myEvent = new EventItem(btn, 'click', (e) => {
  console.log('Нажато!', e)
})

myEvent.start()
`})}),`
`,e.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,e.jsx(n.h3,{id:"информационные",children:"Информационные"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isActive(): boolean"})," — Проверяет, активно ли в данный момент прослушивание события."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getElement(): E | undefined"})," — Возвращает текущий целевой элемент."]}),`
`]}),`
`,e.jsx(n.h3,{id:"настройка-сеттеры",children:"Настройка (Сеттеры)"}),`
`,e.jsxs(n.p,{children:["Все методы этой группы поддерживают чейнинг и автоматически вызывают ",e.jsx(n.code,{children:"reset()"}),", если событие активно."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setElement(elementSelector?: ElementOrString): this"})," — Изменяет целевой элемент."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setElementControl(elementSelector?: ElementOrString): this"})," — Устанавливает контрольный элемент (если его нет в DOM, событие не сработает)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setType(type: string | string[]): this"})," — Изменяет тип события."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setListener(listener: Function): this"})," — Изменяет функцию-обработчик."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setOptions(options?: EventOptions): this"})," — Изменяет параметры прослушивателя."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setDetail(detail?: D): this"})," — Изменяет пользовательские данные события."]}),`
`]}),`
`,e.jsx(n.h3,{id:"управление",children:"Управление"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"start(): this"})," — Запускает прослушивание событий."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"stop(): this"})," — Останавливает прослушивание."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toggle(activity: boolean): this"})," — Включает или выключает прослушивание в зависимости от флага."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reset(): this"})," — Перезапускает событие (полезно после смены настроек)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dispatch(detail?: D): this"})," — Вызывает событие на целевом элементе с передачей данных."]}),`
`]}),`
`,e.jsx(n.h2,{id:"специальные-события",children:"Специальные события"}),`
`,e.jsx(n.h3,{id:"resize",children:e.jsx(n.code,{children:"resize"})}),`
`,e.jsxs(n.p,{children:["Если тип события установлен в ",e.jsx(n.code,{children:"resize"}),", класс автоматически использует ",e.jsx(n.code,{children:"ResizeObserver"})," для отслеживания изменений размера элемента (даже если это не ",e.jsx(n.code,{children:"window"}),")."]}),`
`,e.jsx(n.h3,{id:"scroll-sync",children:e.jsx(n.code,{children:"scroll-sync"})}),`
`,e.jsxs(n.p,{children:["Специальный тип для оптимизированной прокрутки. Внутри использует ",e.jsx(n.code,{children:"requestAnimationFrame"}),", предотвращая лишние вызовы обработчика и повышая производительность."]}),`
`,e.jsx(n.h2,{id:"примеры",children:"Примеры"}),`
`,e.jsx(n.h3,{id:"динамическое-переключение-элемента",children:"Динамическое переключение элемента"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const tracker = new EventItem('.item-1', 'mousemove', (e) => {
  console.log('Координаты:', e.clientX)
})

tracker.start()

// ... позже переключаем на другой элемент
tracker.setElement('.item-2')
`})}),`
`,e.jsx(n.h3,{id:"использование-customevent-с-данными",children:"Использование CustomEvent с данными"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const emitter = new EventItem(window, 'my-custom-event')

emitter.setListener((e, detail) => {
  console.log('Получены данные:', e.detail) // данные из CustomEvent
})

emitter.start()

// Отправка события
emitter.dispatch({ userId: 123, action: 'refresh' })
`})})]})}function j(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{j as default};
