import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-Zkkrlp1B.js";import{M as c}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function t(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/functional/ru/Classes/EventItem"}),`
`,n.jsx(e.h1,{id:"класс-eventitem",children:"Класс EventItem"}),`
`,n.jsx(e.p,{children:"Мощный класс для управления событиями DOM с поддержкой TypeScript, автоматическим отслеживанием жизненного цикла элементов и оптимизированными обработчиками событий. Предоставляет гибкий API для работы с событиями, включая специальные обработчики для resize и scroll."}),`
`,n.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Типобезопасное управление событиями"})," — полная поддержка TypeScript с дженериками"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматическое отслеживание DOM"})," — события автоматически отключаются при удалении элементов из DOM"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Множественные типы событий"})," — поддержка обработки нескольких типов событий одновременно"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Специальные обработчики"})," — оптимизированные обработчики для resize (ResizeObserver) и scroll"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Гибкое управление состоянием"})," — легкое включение/выключение событий"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Настраиваемые опции"})," — поддержка всех стандартных опций addEventListener"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Диспетчеризация событий"})," — возможность программного вызова событий"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Контроль элементов"})," — отдельный контроль элемента для отслеживания состояния DOM"]}),`
`]}),`
`,n.jsx(e.h2,{id:"конструктор",children:"Конструктор"}),`
`,n.jsx(e.h3,{id:"constructor",children:n.jsx(e.code,{children:"constructor"})}),`
`,n.jsx(e.p,{children:"Создаёт экземпляр EventItem с указанными параметрами."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"elementSelector?: ElementOrString<E>"})," — элемент или селектор для привязки события (опционально)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type: string | string[]"})," — тип события или массив типов (по умолчанию ['click'])"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"listener?: EventListenerDetail<O, D>"})," — функция-обработчик события (опционально)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: EventOptions"})," — опции для addEventListener (опционально)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"detail?: D"})," — данные для передачи в событие (опционально)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { EventItem } from '@dxtmisha/functional'

// Простое создание события клика
const clickEvent = new EventItem(
  document.getElementById('button'),
  'click',
  (event, detail) => {
    console.log('Кнопка нажата!', event, detail)
  }
)

// Множественные события
const multiEvent = new EventItem(
  '.interactive-element',
  ['mouseenter', 'mouseleave'],
  (event) => {
    console.log(\`Событие: \${event.type}\`)
  }
)

// С дополнительными данными
const dataEvent = new EventItem(
  '#form',
  'submit',
  (event, detail) => {
    console.log('Форма отправлена:', detail)
  },
  { passive: false },
  { formId: 'contact-form', timestamp: Date.now() }
)
`})}),`
`,n.jsx(e.h2,{id:"методы-получения-состояния",children:"Методы получения состояния"}),`
`,n.jsx(e.h3,{id:"isactive",children:n.jsx(e.code,{children:"isActive"})}),`
`,n.jsx(e.p,{children:"Проверяет, активно ли прослушивание событий в данный момент."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"boolean"})," — true если события прослушиваются"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const event = new EventItem('#button', 'click', () => {})

console.log(event.isActive()) // false

event.start()
console.log(event.isActive()) // true

event.stop()
console.log(event.isActive()) // false
`})}),`
`,n.jsx(e.h3,{id:"getelement",children:n.jsx(e.code,{children:"getElement"})}),`
`,n.jsx(e.p,{children:"Возвращает элемент, к которому привязано событие."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"E | undefined"})," — элемент или undefined"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const event = new EventItem('#button', 'click', () => {})
const element = event.getElement()

if (element) {
  console.log('Элемент найден:', element.tagName)
} else {
  console.log('Элемент не найден')
}
`})}),`
`,n.jsx(e.h2,{id:"методы-настройки",children:"Методы настройки"}),`
`,n.jsx(e.h3,{id:"setelement",children:n.jsx(e.code,{children:"setElement"})}),`
`,n.jsx(e.p,{children:"Изменяет элемент для отслеживания событий."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"elementSelector?: ElementOrString<E>"})," — новый элемент или селектор"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"this"})," — для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const event = new EventItem()

// Установка элемента
event.setElement('#button')
  .setType('click')
  .setListener(() => console.log('Клик!'))
  .start()

// Изменение элемента
event.setElement('#another-button') // автоматически перезапускает событие
`})}),`
`,n.jsx(e.h3,{id:"setelementcontrol",children:n.jsx(e.code,{children:"setElementControl"})}),`
`,n.jsx(e.p,{children:"Устанавливает отдельный элемент для контроля состояния DOM."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"elementSelector?: ElementOrString<EC>"})," — элемент для контроля"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"this"})," — для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const event = new EventItem(window, 'resize', () => {
  console.log('Размер окна изменился')
})

// Контролировать наличие специфического элемента
event.setElementControl('#main-container')
  .start()

// Событие автоматически остановится, если #main-container будет удален из DOM
`})}),`
`,n.jsx(e.h3,{id:"settype",children:n.jsx(e.code,{children:"setType"})}),`
`,n.jsx(e.p,{children:"Изменяет тип или типы обрабатываемых событий."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type: string | string[]"})," — новый тип события или массив типов"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"this"})," — для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const event = new EventItem('#element')

// Один тип события
event.setType('click')

// Множественные типы
event.setType(['mouseenter', 'mouseleave', 'focus', 'blur'])

// Изменение типа перезапускает активные события
event.start()
event.setType('dblclick') // автоматически перезапускается с новым типом
`})}),`
`,n.jsx(e.h3,{id:"setlistener",children:n.jsx(e.code,{children:"setListener"})}),`
`,n.jsx(e.p,{children:"Изменяет функцию-обработчик события."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"listener: EventListenerDetail<O, D>"})," — новая функция-обработчик"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"this"})," — для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const event = new EventItem('#button', 'click')

// Установка первого обработчика
event.setListener((event, detail) => {
  console.log('Первый обработчик')
})

// Замена обработчика
event.setListener((event, detail) => {
  console.log('Новый обработчик', detail)
})
`})}),`
`,n.jsx(e.h3,{id:"setoptions",children:n.jsx(e.code,{children:"setOptions"})}),`
`,n.jsx(e.p,{children:"Изменяет опции для addEventListener."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: EventOptions"})," — новые опции"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"this"})," — для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const event = new EventItem('#element', 'scroll')

// Установка опций
event.setOptions({
  passive: true,
  capture: false
})

// Опции для одноразового события
event.setOptions({
  once: true,
  passive: false
})
`})}),`
`,n.jsx(e.h3,{id:"setdetail",children:n.jsx(e.code,{children:"setDetail"})}),`
`,n.jsx(e.p,{children:"Изменяет данные, передаваемые в обработчик события."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"detail?: D"})," — новые данные"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"this"})," — для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const event = new EventItem('#form', 'submit', (event, detail) => {
  console.log('Данные формы:', detail)
})

// Установка начальных данных
event.setDetail({
  formType: 'contact',
  validation: true
})

// Обновление данных
event.setDetail({
  formType: 'newsletter',
  validation: false,
  timestamp: Date.now()
})
`})}),`
`,n.jsx(e.h2,{id:"управление-событиями",children:"Управление событиями"}),`
`,n.jsx(e.h3,{id:"start",children:n.jsx(e.code,{children:"start"})}),`
`,n.jsx(e.p,{children:"Запускает прослушивание событий."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"this"})," — для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const event = new EventItem('#button', 'click', () => {
  console.log('Кнопка нажата!')
})

// Запуск прослушивания
event.start()

// Проверка состояния
console.log(event.isActive()) // true
`})}),`
`,n.jsx(e.h3,{id:"stop",children:n.jsx(e.code,{children:"stop"})}),`
`,n.jsx(e.p,{children:"Останавливает прослушивание событий."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"this"})," — для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const event = new EventItem('#button', 'click', () => {
  console.log('Этот обработчик больше не вызывается')
})

event.start()
// ... событие активно ...
event.stop()

console.log(event.isActive()) // false
`})}),`
`,n.jsx(e.h3,{id:"toggle",children:n.jsx(e.code,{children:"toggle"})}),`
`,n.jsx(e.p,{children:"Переключает состояние прослушивания событий."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"activity: boolean"})," — true для запуска, false для остановки"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"this"})," — для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const event = new EventItem('#toggle-btn', 'click', () => {
  console.log('Переключатель!')
})

let isListening = false

// Переключение состояния
document.getElementById('control-btn').addEventListener('click', () => {
  isListening = !isListening
  event.toggle(isListening)
  console.log('Прослушивание:', isListening)
})
`})}),`
`,n.jsx(e.h3,{id:"reset",children:n.jsx(e.code,{children:"reset"})}),`
`,n.jsx(e.p,{children:"Перезапускает прослушивание событий (останавливает и запускает заново)."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"this"})," — для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const event = new EventItem('#element', 'click', () => {
  console.log('Клик!')
})

event.start()

// Изменение настроек требует перезапуска
event.setOptions({ passive: true })
  .reset() // Применяет новые опции
`})}),`
`,n.jsx(e.h3,{id:"dispatch",children:n.jsx(e.code,{children:"dispatch"})}),`
`,n.jsx(e.p,{children:"Программно запускает событие."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"detail?: D"})," — данные для события (по умолчанию используется this.detail)"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"this"})," — для цепочки вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const event = new EventItem('#button', 'custom-event', (event, detail) => {
  console.log('Пользовательское событие:', detail)
})

event.start()

// Программный вызов события
event.dispatch({
  message: 'Привет из кода!',
  timestamp: Date.now()
})

// Или с новыми данными
event.dispatch({
  message: 'Другое сообщение',
  source: 'manual'
})
`})}),`
`,n.jsx(e.h2,{id:"специальные-типы-событий",children:"Специальные типы событий"}),`
`,n.jsxs(e.h3,{id:"событие-resize",children:["Событие ",n.jsx(e.code,{children:"resize"})]}),`
`,n.jsx(e.p,{children:"EventItem автоматически использует ResizeObserver для оптимизированного отслеживания изменений размера элементов."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const resizeEvent = new EventItem('#resizable-element', 'resize', (entry) => {
  console.log('Новые размеры:', {
    width: entry.contentRect.width,
    height: entry.contentRect.height
  })
})

resizeEvent.start()

// ResizeObserver будет использован автоматически для лучшей производительности
`})}),`
`,n.jsxs(e.h3,{id:"событие-scroll-sync",children:["Событие ",n.jsx(e.code,{children:"scroll-sync"})]}),`
`,n.jsx(e.p,{children:"Специальное событие для синхронизированного скролла с оптимизацией через requestAnimationFrame."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const scrollEvent = new EventItem('#scrollable-container', 'scroll-sync', () => {
  console.log('Синхронизированный скролл')
})

scrollEvent.start()

// Обработчик будет вызываться не чаще одного раза за кадр анимации
`})}),`
`,n.jsx(e.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,n.jsx(e.h3,{id:"управление-модальными-окнами",children:"Управление модальными окнами"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class ModalManager {
  constructor() {
    this.overlayEvent = null
    this.escapeEvent = null
  }

  openModal(element) {
    element.classList.add('modal-open')

    this.overlayEvent = new EventItem(document, 'click', (event) => {
      if (event.target.classList.contains('modal-overlay')) {
        this.closeModal(element)
      }
    })

    this.escapeEvent = new EventItem(document, 'keydown', (event) => {
      if (event.key === 'Escape') this.closeModal(element)
    })

    this.overlayEvent.start()
    this.escapeEvent.start()
  }

  closeModal(element) {
    element.classList.remove('modal-open')
    this.overlayEvent?.stop()
    this.escapeEvent?.stop()
  }
}

// Использование
const modal = new ModalManager()
document.getElementById('open-btn').addEventListener('click', () => {
  modal.openModal(document.getElementById('modal'))
})
`})}),`
`,n.jsx(e.h3,{id:"drag-and-drop-система",children:"Drag and Drop система"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class DragDropManager {
  makeDraggable(element, data = {}) {
    const dragStart = new EventItem(element, 'dragstart', (event) => {
      event.dataTransfer.setData('text/plain', JSON.stringify(data))
      element.classList.add('dragging')
    })

    const dragEnd = new EventItem(element, 'dragend', () => {
      element.classList.remove('dragging')
    })

    element.draggable = true
    dragStart.start()
    dragEnd.start()
  }

  createDropZone(element, onDrop) {
    const dropEvent = new EventItem(element, 'drop', (event) => {
      event.preventDefault()
      const data = JSON.parse(event.dataTransfer.getData('text/plain'))
      onDrop(data)
    }, { passive: false })

    const dragOver = new EventItem(element, 'dragover', (event) => {
      event.preventDefault()
    }, { passive: false })

    dropEvent.start()
    dragOver.start()
  }
}

// Использование
const dragDrop = new DragDropManager()
dragDrop.makeDraggable(document.getElementById('item'), { id: '1', type: 'product' })
dragDrop.createDropZone(document.getElementById('basket'), (data) => {
  console.log('Добавлен в корзину:', data)
})
`})}),`
`,n.jsx(e.p,{children:"Класс EventItem предоставляет мощный и гибкий инструмент для управления событиями DOM в JavaScript-приложениях, обеспечивая типобезопасность, автоматическое управление жизненным циклом и оптимизированную производительность."})]})}function j(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{j as default};
