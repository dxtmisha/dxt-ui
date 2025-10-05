import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-DB_maGql.js";import{M as c}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function l(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/functional/ru/Classes/Ref/EventRef"}),`
`,e.jsx(n.h1,{id:"класс-eventref",children:"Класс EventRef"}),`
`,e.jsx(n.p,{children:"Vue-ориентированный класс для работы с DOM событиями с реактивными возможностями. Расширяет базовый класс EventItem системой реактивности Vue, обеспечивая автоматическое отслеживание элементов и конфигураций событий."}),`
`,e.jsx(n.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Vue Reactivity"})," — использует ref/watch для реактивного отслеживания элементов"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Автоматическое отслеживание элементов"})," — автоматически обновляет обработчики при изменении ссылок на элементы"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Гибкий ввод элементов"})," — принимает DOM элементы, селекторы или реактивные refs"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Множественные типы событий"})," — поддержка одиночных и множественных событий"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Контрольный элемент"})," — отдельный элемент для проверки присутствия в DOM"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Автоматическая очистка"})," — удаляет обработчики при удалении элементов из DOM"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Специальная обработка событий"})," — встроенная поддержка resize, scroll-sync"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Диспетчеризация событий"})," — программный запуск пользовательских событий"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Управление жизненным циклом"})," — методы запуска, остановки и переключения"]}),`
`]}),`
`,e.jsx(n.h2,{id:"конструктор",children:"Конструктор"}),`
`,e.jsx(n.h3,{id:"constructor",children:e.jsx(n.code,{children:"constructor"})}),`
`,e.jsx(n.p,{children:"Создаёт экземпляр EventRef с реактивными параметрами."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"elementSelector?: RefOrNormal<ElementOrString<E> | undefined>"})," — целевой элемент (ref или обычное значение)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"elementSelectorControl?: RefOrNormal<ElementOrString<HTMLElement>>"})," — контрольный элемент для проверки DOM"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: string | string[]"})," — тип(ы) событий для прослушивания (по умолчанию: ['click'])"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"listener?: EventListenerDetail<O, D>"})," — функция обработчика событий"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: EventOptions"})," — опции обработчика событий"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"detail?: D"})," — пользовательские данные для передачи в обработчик"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Дженерик типы:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"E extends ElementOrWindow"})," — тип целевого элемента (HTMLElement или Window)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"O extends Event"})," — тип объекта события"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"D extends Record<string, any>"})," — тип пользовательских данных detail"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { EventRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// С ref элементом
const buttonRef = ref(null)
const containerRef = ref(null)

const clickEvent = new EventRef(
  buttonRef,
  containerRef, // контрольный элемент
  'click',
  (event, detail) => console.log('Кнопка нажата!', detail),
  undefined,
  { component: 'MyButton' }
)

// С селектором строки
const hoverEvent = new EventRef(
  '#my-element',
  undefined,
  ['mouseenter', 'mouseleave'],
  (event) => console.log('Hover:', event.type)
)
`})}),`
`,e.jsx(n.h2,{id:"наследуемые-методы",children:"Наследуемые методы"}),`
`,e.jsx(n.p,{children:"EventRef наследует все методы от базового класса EventItem:"}),`
`,e.jsx(n.h3,{id:"isactive",children:e.jsx(n.code,{children:"isActive"})}),`
`,e.jsx(n.p,{children:"Проверяет, активны ли обработчики событий."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"boolean"})," — true если обработчики активны"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const isListening = eventRef.isActive()
`})}),`
`,e.jsx(n.h3,{id:"getelement",children:e.jsx(n.code,{children:"getElement"})}),`
`,e.jsx(n.p,{children:"Возвращает текущий целевой элемент."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"E | undefined"})," — текущий целевой элемент"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const currentElement = eventRef.getElement()
`})}),`
`,e.jsx(n.h3,{id:"setelement",children:e.jsx(n.code,{children:"setElement"})}),`
`,e.jsx(n.p,{children:"Изменяет целевой элемент (автоматически вызывается при изменении ref)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"elementSelector?: ElementOrString<E>"})," — новый целевой элемент"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"this"})," — экземпляр для цепочки методов"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`eventRef.setElement('#new-element')
`})}),`
`,e.jsx(n.h3,{id:"setelementcontrol",children:e.jsx(n.code,{children:"setElementControl"})}),`
`,e.jsx(n.p,{children:"Устанавливает контрольный элемент (автоматически вызывается при изменении ref)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"elementSelector?: ElementOrString<HTMLElement>"})," — контрольный элемент"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"this"})," — экземпляр для цепочки методов"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`eventRef.setElementControl('#parent-container')
`})}),`
`,e.jsx(n.h3,{id:"settype",children:e.jsx(n.code,{children:"setType"})}),`
`,e.jsx(n.p,{children:"Изменяет тип(ы) событий."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: string | string[]"})," — новый тип(ы) событий"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"this"})," — экземпляр для цепочки методов"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`eventRef.setType(['focus', 'blur'])
`})}),`
`,e.jsx(n.h3,{id:"setlistener",children:e.jsx(n.code,{children:"setListener"})}),`
`,e.jsx(n.p,{children:"Изменяет функцию обработчика событий."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"listener: EventListenerDetail<O, D>"})," — новая функция обработчика"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"this"})," — экземпляр для цепочки методов"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`eventRef.setListener((event, detail) => {
  console.log('Новый обработчик!', event, detail)
})
`})}),`
`,e.jsx(n.h3,{id:"setoptions",children:e.jsx(n.code,{children:"setOptions"})}),`
`,e.jsx(n.p,{children:"Изменяет опции обработчика событий."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: EventOptions"})," — новые опции событий"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"this"})," — экземпляр для цепочки методов"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`eventRef.setOptions({ capture: true, once: true })
`})}),`
`,e.jsx(n.h3,{id:"setdetail",children:e.jsx(n.code,{children:"setDetail"})}),`
`,e.jsx(n.p,{children:"Изменяет пользовательские данные detail."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"detail?: D"})," — новые данные detail"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"this"})," — экземпляр для цепочки методов"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`eventRef.setDetail({ timestamp: Date.now() })
`})}),`
`,e.jsx(n.h2,{id:"методы-управления-жизненным-циклом",children:"Методы управления жизненным циклом"}),`
`,e.jsx(n.h3,{id:"start",children:e.jsx(n.code,{children:"start"})}),`
`,e.jsx(n.p,{children:"Запускает прослушивание событий."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"this"})," — экземпляр для цепочки методов"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`eventRef.start()
`})}),`
`,e.jsx(n.h3,{id:"stop",children:e.jsx(n.code,{children:"stop"})}),`
`,e.jsx(n.p,{children:"Останавливает прослушивание событий."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"this"})," — экземпляр для цепочки методов"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`eventRef.stop()
`})}),`
`,e.jsx(n.h3,{id:"toggle",children:e.jsx(n.code,{children:"toggle"})}),`
`,e.jsx(n.p,{children:"Переключает состояние обработчика событий."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"activity: boolean"})," — true для запуска, false для остановки"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"this"})," — экземпляр для цепочки методов"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`eventRef.toggle(true) // запуск
eventRef.toggle(false) // остановка
`})}),`
`,e.jsx(n.h3,{id:"reset",children:e.jsx(n.code,{children:"reset"})}),`
`,e.jsx(n.p,{children:"Перезагружает обработчики событий."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"this"})," — экземпляр для цепочки методов"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`eventRef.reset()
`})}),`
`,e.jsx(n.h3,{id:"dispatch",children:e.jsx(n.code,{children:"dispatch"})}),`
`,e.jsx(n.p,{children:"Программно запускает событие."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"detail?: D"})," — пользовательские данные для события"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"this"})," — экземпляр для цепочки методов"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`eventRef.dispatch({ source: 'programmatic' })
`})}),`
`,e.jsx(n.h2,{id:"реактивные-возможности",children:"Реактивные возможности"}),`
`,e.jsx(n.h3,{id:"автоматическое-отслеживание-элементов",children:"Автоматическое отслеживание элементов"}),`
`,e.jsx(n.p,{children:"EventRef автоматически отслеживает изменения в реактивных ссылках на элементы:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const elementRef = ref('#button1')
const eventRef = new EventRef(elementRef, undefined, 'click', () => {
  console.log('Клик!')
})

eventRef.start()

// Изменение элемента автоматически обновит обработчики
elementRef.value = '#button2'
`})}),`
`,e.jsx(n.h3,{id:"отслеживание-контрольного-элемента",children:"Отслеживание контрольного элемента"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const buttonRef = ref(null)
const containerRef = ref(null)

const eventRef = new EventRef(buttonRef, containerRef, 'click')

// События автоматически остановятся, если containerRef будет удален из DOM
`})}),`
`,e.jsx(n.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,e.jsx(n.h3,{id:"vue-компонент-с-реактивными-событиями",children:"Vue компонент с реактивными событиями"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<template>
  <button ref="buttonEl">Нажми меня</button>
  <input ref="inputEl" placeholder="Введите...">
</template>

<script setup>
import { EventRef } from '@dxtmisha/functional'
import { ref, onMounted } from 'vue'

const buttonEl = ref(null)
const inputEl = ref(null)

onMounted(() => {
  new EventRef(buttonEl, undefined, 'click', () => {
    console.log('Кнопка нажата!')
  }).start()

  new EventRef(inputEl, undefined, ['focus', 'blur'], (event) => {
    console.log(\`Ввод \${event.type}\`)
  }).start()
})
<\/script>
`})}),`
`,e.jsx(n.h3,{id:"composable-для-управления-событиями",children:"Composable для управления событиями"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`export function useElementEvents(elementRef) {
  const events = new Map()

  const addEvent = (name, type, listener) => {
    const eventRef = new EventRef(elementRef, undefined, type, listener)
    events.set(name, eventRef.start())
    return eventRef
  }

  return { addEvent }
}
`})}),`
`,e.jsx(n.h3,{id:"специальные-типы-событий",children:"Специальные типы событий"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Событие прокрутки
new EventRef('#container', undefined, 'scroll-sync', (event) => {
  console.log('Прокрутка:', event.target.scrollTop)
}).start()

// Событие изменения размера
new EventRef('#element', undefined, 'resize', (entry) => {
  console.log('Размер:', entry.contentRect)
}).start()
`})}),`
`,e.jsx(n.p,{children:"Класс EventRef предоставляет мощную реактивную систему управления событиями для Vue приложений с автоматическим отслеживанием элементов и очисткой ресурсов."})]})}function x(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{x as default};
