import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-DB_maGql.js";import{M as i}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function l(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/functional/ru/Classes/ScrollbarWidth"}),`
`,n.jsx(e.h1,{id:"класс-scrollbarwidth",children:"Класс ScrollbarWidth"}),`
`,n.jsx(e.p,{children:"Статический класс для определения ширины полосы прокрутки браузера с интеграцией DataStorage для персистентного кеширования. Предоставляет методы для точного измерения скроллбара и определения необходимости его скрытия."}),`
`,n.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Точное измерение"})," — определение реальной ширины скроллбара через DOM тестирование"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Персистентное кеширование"})," — сохранение результата через DataStorage"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Определение необходимости скрытия"})," — автоматическая проверка для тонких скроллбаров"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Защита от повторных вычислений"})," — блокировка параллельных измерений"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"DOM безопасность"})," — создание временных элементов для измерения"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматическая очистка"})," — удаление тестовых элементов после измерения"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"requestAnimationFrame"})," — неблокирующее измерение в следующем кадре"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Статический API"})," — простой интерфейс без необходимости создания экземпляров"]}),`
`]}),`
`,n.jsx(e.h2,{id:"статические-методы",children:"Статические методы"}),`
`,n.jsx(e.h3,{id:"is",children:n.jsx(e.code,{children:"is"})}),`
`,n.jsx(e.p,{children:"Проверяет, нужно ли включить скрытие скролла (для тонких скроллбаров)."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Promise<boolean>"})," — true если скролл стоит скрывать (ширина ≤ 8px)"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { ScrollbarWidth } from '@dxtmisha/functional'

// Проверка необходимости скрытия скролла
const shouldHide = await ScrollbarWidth.is()

if (shouldHide) {
  // Скроллбар тонкий (≤ 8px), можно скрывать
  document.body.classList.add('hide-scrollbar')
} else {
  // Скроллбар широкий, лучше оставить видимым
  document.body.classList.remove('hide-scrollbar')
}

// Использование в CSS
// .hide-scrollbar { scrollbar-width: none; }
`})}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsx(e.p,{children:"Возвращает ширину скроллбара, измеряя при первом вызове."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Promise<number>"})," — ширина скроллбара в пикселях (-1 если не измерена)"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { ScrollbarWidth } from '@dxtmisha/functional'

// Получение ширины скроллбара
const width = await ScrollbarWidth.get()
console.log(\`Ширина скроллбара: \${width}px\`)

// Первый вызов выполнит измерение и сохранит в DataStorage
// Последующие вызовы вернут кешированное значение

// Использование для компенсации ширины
async function compensateScrollbar() {
  const scrollbarWidth = await ScrollbarWidth.get()

  if (scrollbarWidth > 0) {
    document.body.style.paddingRight = \`\${scrollbarWidth}px\`
  }
}
`})}),`
`,n.jsx(e.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,n.jsx(e.h3,{id:"автоматическое-скрытие-тонких-скроллбаров",children:"Автоматическое скрытие тонких скроллбаров"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Инициализация при загрузке страницы
async function initScrollbarBehavior() {
  const shouldHideScrollbar = await ScrollbarWidth.is()

  if (shouldHideScrollbar) {
    document.documentElement.style.setProperty('scrollbar-width', 'none')
    console.log('Тонкий скроллбар скрыт для улучшения UX')
  }
}

// Вызов при DOMContentLoaded
document.addEventListener('DOMContentLoaded', initScrollbarBehavior)
`})}),`
`,n.jsx(e.h3,{id:"модальные-окна-с-компенсацией",children:"Модальные окна с компенсацией"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class ModalManager {
  async openModal() {
    const scrollbarWidth = await ScrollbarWidth.get()

    // Скрываем скролл и компенсируем ширину
    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = \`\${scrollbarWidth}px\`
    }
  }

  closeModal() {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
  }
}
`})}),`
`,n.jsx(e.h3,{id:"адаптивная-верстка",children:"Адаптивная верстка"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// CSS переменные на основе ширины скроллбара
async function setupScrollbarCSS() {
  const width = await ScrollbarWidth.get()
  const shouldHide = await ScrollbarWidth.is()

  document.documentElement.style.setProperty(
    '--scrollbar-width',
    \`\${width}px\`
  )

  document.documentElement.style.setProperty(
    '--scrollbar-display',
    shouldHide ? 'none' : 'auto'
  )
}
`})}),`
`,n.jsx(e.p,{children:"Класс ScrollbarWidth предоставляет надежное решение для определения характеристик полосы прокрутки и принятия решений о ее отображении для создания оптимального пользовательского опыта."})]})}function x(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(l,{...r})}):l(r)}export{x as default};
