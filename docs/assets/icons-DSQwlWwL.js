import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-Zkkrlp1B.js";import{M as i}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function c(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/functional/ru/Classes/Icons"}),`
`,n.jsx(s.h1,{id:"класс-icons",children:"Класс Icons"}),`
`,n.jsx(s.p,{children:"Статический класс для управления иконками с поддержкой асинхронной загрузки, глобального кеширования и автоматической генерации путей. Обеспечивает централизованное хранение и оптимизированную загрузку SVG иконок."}),`
`,n.jsx(s.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Глобальное кеширование"})," — автоматическое сохранение в window для переиспользования"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Асинхронная загрузка"})," — поддержка Promise и ленивой загрузки иконок"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Режим ожидания"})," — автоматическое ожидание загрузки с таймаутом"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Автоматические пути"})," — генерация SVG путей по названию с префиксом @"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Пакетное добавление"})," — массовое добавление иконок из объекта"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Глобальные URL"})," — поддержка CDN и различных окружений"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Проверка существования"})," — быстрая проверка наличия иконок"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Список иконок"})," — получение всех зарегистрированных названий"]}),`
`]}),`
`,n.jsx(s.h2,{id:"методы-проверки-и-получения",children:"Методы проверки и получения"}),`
`,n.jsx(s.h3,{id:"is",children:n.jsx(s.code,{children:"is"})}),`
`,n.jsx(s.p,{children:"Проверяет наличие иконки в коллекции."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"index: string"})," — название иконки"]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"boolean"})," — true если иконка существует"]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`if (Icons.is('user')) {
  // иконка доступна
}
`})}),`
`,n.jsx(s.h3,{id:"get",children:n.jsx(s.code,{children:"get"})}),`
`,n.jsx(s.p,{children:"Возвращает содержимое иконки с поддержкой асинхронной загрузки."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"index: string"})," — название иконки"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"url?: string"})," — альтернативный путь хранения"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"wait?: number"})," — время ожидания в мс (по умолчанию 180000)"]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"Promise<string>"})," — содержимое иконки"]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`// Простое получение
const icon = await Icons.get('user')

// С альтернативным URL
const customIcon = await Icons.get('custom', '/assets/')

// Автоматический путь
const arrowIcon = await Icons.get('@arrow-left') // → /icons/arrow-left.svg
`})}),`
`,n.jsx(s.h3,{id:"getnamelist",children:n.jsx(s.code,{children:"getNameList"})}),`
`,n.jsx(s.p,{children:"Возвращает список всех зарегистрированных иконок."}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"string[]"})," — массив названий иконок"]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`const iconNames = Icons.getNameList()
console.log(iconNames) // ['user', 'home', 'settings']
`})}),`
`,n.jsx(s.h3,{id:"geturlglobal",children:n.jsx(s.code,{children:"getUrlGlobal"})}),`
`,n.jsx(s.p,{children:"Возвращает глобальный URL для иконок."}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"string"})," — базовый URL"]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`const globalUrl = Icons.getUrlGlobal()
console.log(globalUrl) // '/icons/' или полный CDN URL
`})}),`
`,n.jsx(s.h2,{id:"методы-добавления",children:"Методы добавления"}),`
`,n.jsx(s.h3,{id:"add",children:n.jsx(s.code,{children:"add"})}),`
`,n.jsx(s.p,{children:"Добавляет иконку в коллекцию."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"index: string"})," — название иконки"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"file: IconsItem"})," — путь к файлу или Promise с содержимым"]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`// Простое добавление
Icons.add('user', '/icons/user.svg')

// SVG содержимое
Icons.add('custom', '<svg>...</svg>')

// Асинхронная загрузка
Icons.add('async', fetch('/api/icon.svg').then(r => r.text()))
`})}),`
`,n.jsx(s.h3,{id:"addload",children:n.jsx(s.code,{children:"addLoad"})}),`
`,n.jsx(s.p,{children:"Добавляет иконку в режиме загрузки."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"index: string"})," — название иконки"]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`Icons.addLoad('processing')
// Иконка будет ожидать загрузки при вызове get()
`})}),`
`,n.jsx(s.h3,{id:"addglobal",children:n.jsx(s.code,{children:"addGlobal"})}),`
`,n.jsx(s.p,{children:"Добавляет глобальную иконку."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"index: string"})," — название иконки"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"file: string"})," — относительный путь к файлу"]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`Icons.addGlobal('logo', 'brand/logo.svg')
// Использует getUrlGlobal() + file
`})}),`
`,n.jsx(s.h3,{id:"addbylist",children:n.jsx(s.code,{children:"addByList"})}),`
`,n.jsx(s.p,{children:"Добавляет иконки из объекта."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"list: Record<string, IconsItem>"})," — объект с иконками"]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`const uiIcons = {
  'arrow-up': '/icons/arrow-up.svg',
  'arrow-down': '/icons/arrow-down.svg'
}
Icons.addByList(uiIcons)
`})}),`
`,n.jsx(s.h2,{id:"методы-конфигурации",children:"Методы конфигурации"}),`
`,n.jsx(s.h3,{id:"seturl",children:n.jsx(s.code,{children:"setUrl"})}),`
`,n.jsx(s.p,{children:"Изменяет базовый путь к файлам иконок."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"url: string"})," — новый базовый путь"]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`// Для разработки
Icons.setUrl('/dev-icons/')

// Для продакшена
Icons.setUrl('https://cdn.example.com/icons/')
`})}),`
`,n.jsx(s.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,n.jsx(s.h3,{id:"инициализация-иконок",children:"Инициализация иконок"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`// Настройка базового URL
Icons.setUrl('/assets/icons/')

// Добавление основных иконок
Icons.addByList({
  'user': 'user.svg',
  'home': 'home.svg',
  'settings': 'settings.svg'
})

// Добавление темных иконок
Icons.addByList({
  'user-dark': 'dark/user.svg',
  'home-dark': 'dark/home.svg'
})
`})}),`
`,n.jsx(s.h3,{id:"динамическая-загрузка",children:"Динамическая загрузка"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`async function loadIcon(name) {
  if (!Icons.is(name)) {
    Icons.addLoad(name)
  }
  return await Icons.get(name)
}

// Использование
const userIcon = await loadIcon('user')
document.getElementById('icon').innerHTML = userIcon
`})}),`
`,n.jsx(s.h3,{id:"компонент-иконки",children:"Компонент иконки"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`class IconComponent {
  async render(iconName) {
    try {
      const iconContent = await Icons.get(iconName)
      return \`<span class="icon">\${iconContent}</span>\`
    } catch (error) {
      return \`<span class="icon-error">❌</span>\`
    }
  }
}
`})}),`
`,n.jsx(s.p,{children:"Класс Icons обеспечивает эффективное управление иконками с автоматическим кешированием, асинхронной загрузкой и гибкой конфигурацией путей для различных окружений."})]})}function j(e={}){const{wrapper:s}={...r(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(c,{...e})}):c(e)}export{j as default};
