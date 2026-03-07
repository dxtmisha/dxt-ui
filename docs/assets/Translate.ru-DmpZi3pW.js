import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as c}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/functional-basic/Classes/Translate - Управление Переводами и Текстами"}),`
`,n.jsx(e.h1,{id:"класс-translate",children:"Класс Translate"}),`
`,n.jsx(e.p,{children:"Статический служебный класс для управления переводами и локализованным текстом. Предоставляет мощные инструменты для получения, кэширования и отображения контента с поддержкой шаблонов, автоматическим определением локали и пакетной загрузкой запросов для оптимизации производительности."}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Пакетная загрузка"})," — интеллектуально группирует запросы на перевод, отправляя их одним паком через 160 мс после постановки в очередь."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Гибкие шаблоны"})," — поддерживает замену параметров в тексте как по индексам (",n.jsx(e.code,{children:"[0]"}),"), так и по именованным ключам (",n.jsx(e.code,{children:"{key}"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Синхронный и асинхронный доступ"})," — методы для мгновенного получения текста из кэша (",n.jsx(e.code,{children:"getSync"}),") или гарантированной загрузки с сервера (",n.jsx(e.code,{children:"get"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Умный кэш"})," — хранит переводы с учетом текущей локали и поддерживает фоллбэки (язык-страна → язык → глобально)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Локальная разработка"})," — режим ",n.jsx(e.code,{children:"addNormalOrSync"})," автоматически переключается между моками и реальными запросами в зависимости от окружения."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsx(e.p,{children:"Класс является статическим и не требует создания экземпляра. Основная настройка заключается в указании URL-адреса API."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Translate } from '@dxtmisha/functional-basic'

// Настройка URL для запросов
Translate.setUrl('/api/v1/translate')

// Предварительная загрузка необходимых текстов
await Translate.add(['welcome', 'auth.login', 'errors.required'])
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"получение-переводов",children:"Получение переводов"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"async get(name: string, replacement?: any): Promise<string>"})," — Асинхронно получает текст. Если его нет в кэше и мы не на localhost, пытается загрузить его."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getSync(name: string, first?: boolean, replacement?: any): string"})," — Возвращает текст из кэша. Если ",n.jsx(e.code,{children:"first"})," равен ",n.jsx(e.code,{children:"true"}),", вернет ",n.jsx(e.code,{children:" "})," при отсутствии текста, иначе — сам код ",n.jsx(e.code,{children:"name"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"async getList(names: TranslateCode[]): Promise<TranslateList>"})," — Получает объект с группой переводов (асинхронно)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getListSync(names: TranslateCode[], first?: boolean): TranslateList"})," — Получает объект с группой переводов из кэша (синхронно)."]}),`
`]}),`
`,n.jsx(e.h3,{id:"управление-данными",children:"Управление данными"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"async add(names: string | string[]): Promise<void>"})," — Добавляет коды в очередь на загрузку. Запросы группируются для минимизации нагрузки на сеть."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"addSync(data: Record<string, string>): void"})," — Напрямую добавляет переведенные строки в кэш."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"async addNormalOrSync(data: Record<string, string>): Promise<void>"})," — Интеллектуальное добавление: на localhost работает как ",n.jsx(e.code,{children:"addSync"}),", иначе — как ",n.jsx(e.code,{children:"add"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"addSyncByLocation(data: Record<string, Record<string, string>>): void"})," — Массовое добавление текстов с привязкой к конкретным локалям."]}),`
`]}),`
`,n.jsx(e.h3,{id:"конфигурация",children:"Конфигурация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setUrl(url: string): Translate"})," — Устанавливает путь к API для загрузки переводов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setPropsName(name: string): Translate"})," — Устанавливает имя свойства в теле запроса (по умолчанию ",n.jsx(e.code,{children:"list"}),")."]}),`
`]}),`
`,n.jsx(e.h2,{id:"примеры",children:"Примеры"}),`
`,n.jsx(e.h3,{id:"работа-с-шаблонами",children:"Работа с шаблонами"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// В базе: "Привет, [0]! У вас {count} уведомлений."
const text = await Translate.get('user.notifications', ['Иван', { count: 5 }])
// Результат: "Привет, Иван! У вас 5 уведомлений."
`})}),`
`,n.jsx(e.h3,{id:"синхронное-использование-в-компонентах",children:"Синхронное использование в компонентах"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Сначала загружаем всё нужное (например, при инициализации приложения)
await Translate.add(['btn.save', 'btn.cancel'])

// Внутри компонента используем синхронно, чтобы не плодить await
const label = Translate.getSync('btn.save')
`})}),`
`,n.jsx(e.h3,{id:"групповое-получение-списка",children:"Групповое получение списка"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const labels = await Translate.getList([
  'home.title',
  ['home.welcome', 'Гость'], // с заменой шаблона сразу
  'home.footer'
])

console.log(labels['home.welcome']) // "Добро пожаловать, Гость!"
`})})]})}function x(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{x as default};
