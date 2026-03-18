import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as d}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"@dxtmisha/ru/functional/Classes/EventRef - Реактивный менеджер событий"}),`
`,e.jsx(n.h1,{id:"класс-eventref",children:"Класс EventRef"}),`
`,e.jsxs(n.p,{children:["Реактивный менеджер событий, упрощающий управление слушателями для DOM-элементов или объекта ",e.jsx(n.code,{children:"window"}),". Автоматически обновляет подписки при изменении целевого элемента (переданного как Vue ",e.jsx(n.code,{children:"Ref"}),")."]}),`
`,e.jsx(n.p,{children:"Включает автоматическую обработку перепривязки слушателей при динамическом изменении элементов и интеграцию с жизненным циклом Vue."}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Реактивность"})," — автоматическое обновление при изменении ",e.jsx(n.code,{children:"Ref"})," элемента."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Поддержка нескольких типов"})," — одновременное прослушивание нескольких событий."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Автоматическая очистка"})," — эффективное управление памятью через систему реактивности."]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(n.p,{children:["Создает новый экземпляр ",e.jsx(n.code,{children:"EventRef"}),". Класс автоматически синхронизирует слушатели событий с состоянием переданных Vue ",e.jsx(n.code,{children:"ref"}),". Если целевой элемент изменяется, ",e.jsx(n.code,{children:"EventRef"})," автоматически перепривязывает событие."]}),`
`,e.jsx(n.h3,{id:"ограничения-дженериков-generic-constraints",children:"Ограничения дженериков (Generic Constraints)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"E extends ElementOrWindow"})," — тип целевого элемента (например, ",e.jsx(n.code,{children:"HTMLElement"}),", ",e.jsx(n.code,{children:"Window"}),", или ",e.jsx(n.code,{children:"Document"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"O extends Event"})," — тип объекта события (например, ",e.jsx(n.code,{children:"MouseEvent"}),", ",e.jsx(n.code,{children:"KeyboardEvent"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"D extends Record<string, any>"})," — тип пользовательских данных (",e.jsx(n.code,{children:"detail"}),"), связанных с событием."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"elementSelector?: RefOrNormal<ElementOrString<E> | undefined>"})," — целевой элемент или селектор (может быть реактивным)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"elementSelectorControl?: RefOrNormal<ElementOrString<HTMLElement>>"})," — контрольный элемент. Если он удален из DOM, прослушивание прекращается."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: string | string[] = ['click']"})," — тип события или массив типов."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"listener?: EventListenerDetail<O, D>"})," — функция-обработчик."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: EventOptions"})," — параметры слушателя (",e.jsx(n.code,{children:"capture"}),", ",e.jsx(n.code,{children:"passive"}),", ",e.jsx(n.code,{children:"once"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"detail?: D"})," — дополнительные данные события."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { EventRef } from '@dxtmisha/functional'
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
`,e.jsx(n.h2,{id:"управление-жизненным-циклом",children:"Управление жизненным циклом"}),`
`,e.jsx(n.p,{children:"Методы для контроля активности прослушивателей."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"start(): this"})," — Активирует прослушивание событий. Если целевой элемент (",e.jsx(n.code,{children:"ref"}),") еще не примонтирован, слушатели будут добавлены автоматически сразу после его появления."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"stop(): this"})," — Деактивирует прослушивание и удаляет все обработчики с текущего элемента."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toggle(activity: boolean): this"})," — Включает или выключает прослушивание в зависимости от переданного значения."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reset(): this"})," — Перезапускает прослушивание. Автоматически вызывается при изменении ключевых параметров (типа события, опций и т.д.)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"состояние-и-получение-данных",children:"Состояние и получение данных"}),`
`,e.jsx(n.p,{children:"Методы для проверки текущего статуса объекта."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isActive(): boolean"})," — Возвращает ",e.jsx(n.code,{children:"true"}),", если прослушивание событий в данный момент активно."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getElement(): E | undefined"})," — Возвращает текущий DOM-элемент или объект, на котором установлены слушатели."]}),`
`]}),`
`,e.jsx(n.h2,{id:"конфигурация-сеттеры",children:"Конфигурация (Сеттеры)"}),`
`,e.jsx(n.p,{children:"Все методы этой группы поддерживают цепочку вызовов (чейнинг) и автоматически обновляют активные слушатели."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setElement(element: ElementOrString): this"})," — Динамически изменяет целевой элемент. При использовании в ",e.jsx(n.code,{children:"EventRef"})," также поддерживает реактивные ",e.jsx(n.code,{children:"ref"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setElementControl(element: ElementOrString): this"})," — Устанавливает контрольный элемент. Если этот элемент удаляется из DOM, прослушивание событий на основном элементе автоматически прекращается (защита от утечек памяти)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setType(type: string | string[]): this"})," — Обновляет типы прослушиваемых событий (например, меняет ",e.jsx(n.code,{children:"click"})," на ",e.jsx(n.code,{children:"dblclick"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setListener(listener: Function): this"})," — Изменяет функцию-обработчик события без перезапуска всего цикла."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setOptions(options: EventOptions): this"})," — Обновляет опции слушателя (",e.jsx(n.code,{children:"capture"}),", ",e.jsx(n.code,{children:"passive"}),", ",e.jsx(n.code,{children:"once"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setDetail(detail: object): this"})," — Обновляет пользовательские данные, доступные внутри обработчика."]}),`
`]}),`
`,e.jsx(n.h2,{id:"действия",children:"Действия"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dispatch(detail?: object): this"})," — Программно инициирует событие на целевом элементе. Если переданы данные в ",e.jsx(n.code,{children:"detail"}),", они будут приоритетнее тех, что установлены через ",e.jsx(n.code,{children:"setDetail"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"специальные-события",children:"Специальные события"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"EventRef"})," (через базовый класс ",e.jsx(n.code,{children:"EventItem"}),") предоставляет улучшенную обработку для некоторых типов событий:"]}),`
`,e.jsx(n.h3,{id:"resize",children:e.jsx(n.code,{children:"resize"})}),`
`,e.jsxs(n.p,{children:["В отличие от стандартного события ",e.jsx(n.code,{children:"resize"}),", которое работает только на объекте ",e.jsx(n.code,{children:"window"}),", здесь оно использует ",e.jsx(n.code,{children:"ResizeObserver"}),". Это позволяет отслеживать изменение размеров любого конкретного DOM-элемента."]}),`
`,e.jsx(n.h3,{id:"scroll-sync",children:e.jsx(n.code,{children:"scroll-sync"})}),`
`,e.jsxs(n.p,{children:["Оптимизированный вариант события прокрутки. Использует ",e.jsx(n.code,{children:"requestAnimationFrame"}),' для синхронизации вызова обработчика с частотой обновления экрана, что предотвращает "тормоза" при тяжелых вычислениях в процессе скролла.']})]})}function j(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{j as default};
