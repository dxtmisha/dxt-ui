import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-C8vOrmRQ.js";import{M as d}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function a(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"@dxtmisha/functional/ru/Classes/Loading"}),`
`,n.jsx(e.h1,{id:"класс-loading",children:"Класс Loading"}),`
`,n.jsx(e.p,{children:"Статический класс для управления глобальными индикаторами загрузки с системой событий. Обеспечивает централизованное управление состоянием загрузки с поддержкой счетчика активных операций и автоматической диспетчеризацией событий."}),`
`,n.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Глобальное состояние"})," — централизованное управление индикаторами загрузки"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Система счетчика"})," — автоматический подсчет активных операций загрузки"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Диспетчеризация событий"})," — автоматические события изменения состояния"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Безопасное скрытие"})," — защита от отрицательных значений счетчика"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Регистрация слушателей"})," — простая подписка на изменения состояния"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Контроль элементов"})," — привязка к конкретным DOM элементам"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TypeScript поддержка"})," — полная типизация событий и данных"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматическая инициализация"})," — готов к работе в DOM окружении"]}),`
`]}),`
`,n.jsx(e.h2,{id:"методы-проверки-состояния",children:"Методы проверки состояния"}),`
`,n.jsx(e.h3,{id:"is",children:n.jsx(e.code,{children:"is"})}),`
`,n.jsx(e.p,{children:"Проверяет, активен ли сейчас индикатор загрузки."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"boolean"})," — true если есть активные операции загрузки"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Loading } from '@dxtmisha/functional'

// Проверка состояния загрузки
if (Loading.is()) {
  console.log('Идет загрузка...')
} else {
  console.log('Загрузка завершена')
}

// Условное отображение
const loadingSpinner = document.getElementById('spinner')
loadingSpinner.style.display = Loading.is() ? 'block' : 'none'
`})}),`
`,n.jsx(e.h2,{id:"методы-управления-состоянием",children:"Методы управления состоянием"}),`
`,n.jsx(e.h3,{id:"show",children:n.jsx(e.code,{children:"show"})}),`
`,n.jsx(e.p,{children:"Показывает индикатор загрузки (увеличивает счетчик)."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Loading } from '@dxtmisha/functional'

// Начать операцию загрузки
Loading.show()
console.log('Состояние загрузки:', Loading.is()) // true

// Несколько операций одновременно
async function loadMultipleData() {
  Loading.show() // операция 1
  Loading.show() // операция 2
  Loading.show() // операция 3

  console.log('Активных операций:', Loading.is()) // true

  // Выполнение операций...
  await Promise.all([
    loadUserData(),
    loadSettings(),
    loadPreferences()
  ])

  Loading.hide() // завершена операция 1
  Loading.hide() // завершена операция 2
  Loading.hide() // завершена операция 3

  console.log('Все операции завершены:', Loading.is()) // false
}
`})}),`
`,n.jsx(e.h3,{id:"hide",children:n.jsx(e.code,{children:"hide"})}),`
`,n.jsx(e.p,{children:"Скрывает индикатор загрузки (уменьшает счетчик)."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Loading } from '@dxtmisha/functional'

// Безопасное скрытие
Loading.hide() // Ничего не произойдет, если счетчик уже 0

// Пример с API вызовом
async function fetchData() {
  Loading.show()

  try {
    const data = await fetch('/api/data')
    return await data.json()
  } finally {
    Loading.hide() // Гарантированно скроем загрузку
  }
}

// Множественные операции
function startOperations() {
  // Показываем для каждой операции
  Loading.show() // операция A
  Loading.show() // операция B

  // Скрываем по завершении каждой
  setTimeout(() => Loading.hide(), 1000) // завершилась A
  setTimeout(() => Loading.hide(), 2000) // завершилась B
}
`})}),`
`,n.jsx(e.h2,{id:"система-событий",children:"Система событий"}),`
`,n.jsx(e.h3,{id:"registrationevent",children:n.jsx(e.code,{children:"registrationEvent"})}),`
`,n.jsx(e.p,{children:"Регистрирует слушатель событий для отслеживания изменений состояния загрузки."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"listener: EventListenerDetail<CustomEvent, LoadingDetail>"})," — функция-обработчик события"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"element?: ElementOrString<HTMLElement>"})," — элемент для контроля (опционально)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Loading } from '@dxtmisha/functional'

// Простая регистрация
Loading.registrationEvent((event, detail) => {
  console.log('Состояние загрузки изменилось:', detail.loading)

  if (detail.loading) {
    showLoadingSpinner()
  } else {
    hideLoadingSpinner()
  }
})

// Регистрация с контролем элемента
Loading.registrationEvent(
  (event, detail) => {
    const spinner = document.getElementById('app-spinner')
    spinner.style.display = detail.loading ? 'flex' : 'none'
  },
  '#main-app' // Событие будет активно только пока существует #main-app
)

// Множественные слушатели
Loading.registrationEvent((event, detail) => {
  // Обновление UI
  updateLoadingIndicator(detail.loading)
})

Loading.registrationEvent((event, detail) => {
  // Аналитика
  if (detail.loading) {
    analytics.track('loading_started')
  } else {
    analytics.track('loading_finished')
  }
})
`})}),`
`,n.jsx(e.h3,{id:"loadingdetail",children:"LoadingDetail"}),`
`,n.jsx(e.p,{children:"Тип данных, передаваемый в событие загрузки."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Свойства:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"loading: boolean"})," — состояние загрузки (true = идет загрузка, false = завершена)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`interface LoadingDetail {
  loading: boolean
}

// Обработчик события с типизацией
const handleLoadingChange: EventListenerDetail<CustomEvent, LoadingDetail> = (event, detail) => {
  if (detail?.loading) {
    document.body.classList.add('loading-active')
    document.getElementById('loading-overlay')?.classList.add('visible')
  } else {
    document.body.classList.remove('loading-active')
    document.getElementById('loading-overlay')?.classList.remove('visible')
  }
}

Loading.registrationEvent(handleLoadingChange)
`})}),`
`,n.jsx(e.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,n.jsx(e.h3,{id:"глобальный-индикатор",children:"Глобальный индикатор"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Настройка
Loading.registrationEvent((event, detail) => {
  document.getElementById('spinner').style.display =
    detail.loading ? 'block' : 'none'
})

// Использование
Loading.show()
await fetchData()
Loading.hide()
`})}),`
`,n.jsx(e.h3,{id:"api-интеграция",children:"API интеграция"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`async function apiCall(url) {
  Loading.show()
  try {
    return await fetch(url).then(r => r.json())
  } finally {
    Loading.hide()
  }
}
`})}),`
`,n.jsx(e.h3,{id:"декоратор-загрузки",children:"Декоратор загрузки"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function withLoading(fn) {
  return async (...args) => {
    Loading.show()
    try {
      return await fn(...args)
    } finally {
      Loading.hide()
    }
  }
}

const loadUsers = withLoading(async () => fetch('/users').then(r => r.json()))
`})}),`
`,n.jsx(e.p,{children:"Класс Loading обеспечивает простое и надежное управление глобальными индикаторами загрузки с автоматической системой событий и безопасным подсчетом активных операций."})]})}function g(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(a,{...i})}):a(i)}export{g as default};
