import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-C8vOrmRQ.js";import{M as h}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/functional/ru/Classes/Hash"}),`
`,n.jsx(e.h1,{id:"класс-hash",children:"Класс Hash"}),`
`,n.jsx(e.p,{children:"Статический класс для работы с данными в URL hash с автоматической синхронизацией браузера. Обеспечивает сохранение состояния приложения в URL, систему наблюдения за изменениями и автоматическое преобразование типов данных."}),`
`,n.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Синхронизация с URL"})," — автоматическое обновление hash части URL браузера"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Система наблюдения"})," — колбэки на изменения конкретных переменных"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Преобразование типов"})," — автоматическое преобразование строк в нужные типы"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Защита от циклов"})," — предотвращение бесконечных обновлений URL"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Поддержка функций"})," — значения по умолчанию через функции"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Парсинг URL"})," — автоматический разбор существующих hash параметров"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TypeScript поддержка"})," — типобезопасность с дженериками"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Персистентность"})," — сохранение данных между перезагрузками страницы"]}),`
`]}),`
`,n.jsx(e.h2,{id:"методы-управления-данными",children:"Методы управления данными"}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsx(e.p,{children:"Получает значение переменной из hash."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — название переменной"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"defaultValue?: T | (() => T)"})," — значение по умолчанию или функция"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"T"})," — значение переменной"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Hash } from '@dxtmisha/functional'

// Простое получение
const userId = Hash.get('userId', '12345')

// С функцией по умолчанию
const timestamp = Hash.get('timestamp', () => Date.now())

// Типизированное получение
const settings = Hash.get<{theme: string}>('settings', {theme: 'dark'})
`})}),`
`,n.jsx(e.h3,{id:"set",children:n.jsx(e.code,{children:"set"})}),`
`,n.jsx(e.p,{children:"Устанавливает значение переменной в hash."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — название переменной"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: T | (() => T)"})," — новое значение или функция"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Простая установка
Hash.set('userId', '12345')

// Установка объекта
Hash.set('settings', { theme: 'dark', lang: 'ru' })

// С функцией
Hash.set('counter', () => Math.random())

// Удаление
Hash.set('temp', undefined)
`})}),`
`,n.jsx(e.h3,{id:"addwatch",children:n.jsx(e.code,{children:"addWatch"})}),`
`,n.jsx(e.p,{children:"Добавляет наблюдатель за изменениями переменной."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — название переменной"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: (value: T) => void"})," — функция обратного вызова"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Наблюдение за темой
Hash.addWatch('theme', (theme) => {
  document.body.className = \`theme-\${theme}\`
})

// Наблюдение за пользователем
Hash.addWatch('userId', (userId) => {
  if (userId) loadUserData(userId)
})
`})}),`
`,n.jsx(e.h3,{id:"reload",children:n.jsx(e.code,{children:"reload"})}),`
`,n.jsx(e.p,{children:"Принудительно обновляет данные из текущего URL hash."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// После программного изменения location.hash
location.hash = '#param:value'
Hash.reload()

// При инициализации приложения
Hash.reload()
const currentPage = Hash.get('page', 'home')
`})}),`
`,n.jsx(e.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,n.jsx(e.h3,{id:"управление-состоянием",children:"Управление состоянием"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Инициализация
Hash.reload()

// Установка наблюдателей
Hash.addWatch('page', (page) => navigateTo(page))
Hash.addWatch('filters', (filters) => applyFilters(filters))

// Программное изменение
Hash.set('page', 'products')
Hash.set('filters', { category: 'electronics' })
`})}),`
`,n.jsx(e.h3,{id:"сохранение-формы",children:"Сохранение формы"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Восстановление состояния формы
const formData = Hash.get('formData', {})
restoreForm(formData)

// Сохранение при изменении
form.addEventListener('input', () => {
  Hash.set('formData', getFormData(form))
})
`})}),`
`,n.jsx(e.h3,{id:"навигация",children:"Навигация"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class Router {
  constructor() {
    Hash.addWatch('route', (route) => this.navigate(route))
    Hash.reload()
  }

  navigate(route) {
    loadPage(route || 'home')
  }

  go(route) {
    Hash.set('route', route)
  }
}
`})}),`
`,n.jsx(e.p,{children:"Класс Hash обеспечивает простую и надежную синхронизацию состояния JavaScript приложения с URL браузера, поддерживая закладки и кнопки назад/вперед."})]})}function j(s={}){const{wrapper:e}={...a(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{j as default};
