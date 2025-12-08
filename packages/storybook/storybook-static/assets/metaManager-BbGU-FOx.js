import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Zkkrlp1B.js";import{M as r}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function s(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/functional/ru/Classes/MetaManager"}),`
`,n.jsx(e.h1,{id:"класс-metamanager",children:"Класс MetaManager"}),`
`,n.jsx(e.p,{children:"Класс для работы с HTML мета-тегами с автоматической синхронизацией DOM и безопасным кодированием атрибутов. Обеспечивает чтение, обновление и генерацию мета-тегов для SEO-оптимизации и интеграции с социальными сетями (Open Graph, Twitter Cards)."}),`
`,n.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Синхронизация DOM"})," — автоматическое обновление мета-тегов в head документа"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Поддержка двух форматов"})," — работа с атрибутами ",n.jsx(e.code,{children:"name"})," и ",n.jsx(e.code,{children:"property"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Генерация HTML"})," — преобразование мета-тегов в HTML-строки для серверного рендеринга"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Безопасное кодирование"})," — автоматическое экранирование специальных символов в атрибутах"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Типобезопасность"})," — поддержка TypeScript с дженериками для определения типов"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Гибкий API"})," — цепочечные методы для удобного использования"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Совместимость с SSR"})," — работает в браузере и серверной среде"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоинициализация"})," — считывает существующие мета-теги из DOM при создании"]}),`
`]}),`
`,n.jsx(e.h2,{id:"конструктор",children:"Конструктор"}),`
`,n.jsx(e.h3,{id:"constructor",children:n.jsx(e.code,{children:"constructor"})}),`
`,n.jsx(e.p,{children:"Создает экземпляр MetaManager с указанными параметрами и автоматически считывает текущие мета-теги из DOM."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"listMeta: string[]"})," — список имен мета-тегов для управления"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isProperty?: boolean"})," — использовать атрибут ",n.jsx(e.code,{children:"property"})," вместо ",n.jsx(e.code,{children:"name"})," (по умолчанию: ",n.jsx(e.code,{children:"false"}),")"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { MetaManager } from '@dxtmisha/functional'

// Стандартные мета-теги (атрибут name)
const meta = new MetaManager([
  'description',
  'keywords',
  'author'
])

// Мета-теги Open Graph (атрибут property)
const ogMeta = new MetaManager([
  'og:title',
  'og:description',
  'og:image',
  'og:url'
], true)

// Twitter Cards
const twitterMeta = new MetaManager([
  'twitter:card',
  'twitter:title',
  'twitter:description',
  'twitter:image'
])
`})}),`
`,n.jsx(e.h2,{id:"методы-запроса-данных",children:"Методы запроса данных"}),`
`,n.jsx(e.h3,{id:"getlistmeta",children:n.jsx(e.code,{children:"getListMeta"})}),`
`,n.jsx(e.p,{children:"Возвращает список имен управляемых мета-тегов."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string[]"})," — массив имен мета-тегов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const meta = new MetaManager(['description', 'keywords', 'author'])

const names = meta.getListMeta()
// ['description', 'keywords', 'author']

// Проверка управляемого тега
const isManaged = names.includes('description') // true

// Итерация по управляемым тегам
names.forEach(name => {
  console.log(\`Управление: \${name}\`)
})
`})}),`
`,n.jsx(e.h3,{id:"getitem",children:n.jsx(e.code,{children:"getItem"})}),`
`,n.jsx(e.p,{children:"Получает содержимое мета-тега по имени из внутреннего хранилища."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — имя мета-тега"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — содержимое мета-тега (пустая строка если не установлен)"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const meta = new MetaManager(['description', 'keywords', 'author'])

// Получить meta description
const description = meta.get('description')

// Получить keywords
const keywords = meta.get('keywords')

// Несуществующий тег возвращает пустую строку
const missing = meta.get('non-existent') // ''

// Использование в условиях
if (meta.get('description')) {
  console.log('Description установлен')
}
`})}),`
`,n.jsx(e.h3,{id:"getitems",children:n.jsx(e.code,{children:"getItems"})}),`
`,n.jsx(e.p,{children:"Возвращает все мета-теги в виде объекта."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Record<string, string | undefined>"})," — объект со всеми мета-тегами"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const meta = new MetaManager(['description', 'keywords', 'author'])

const allMeta = meta.getItems()
// { description: '...', keywords: '...', author: '...' }

// Проверка всех мета-тегов
Object.keys(allMeta).forEach(key => {
  console.log(\`\${key}: \${allMeta[key]}\`)
})

// Использование в валидации
const hasAllTags = Object.values(allMeta).every(value => value !== '')

// Экспорт для логирования
console.log('Текущее состояние мета:', allMeta)
`})}),`
`,n.jsx(e.h2,{id:"методы-управления-данными",children:"Методы управления данными"}),`
`,n.jsx(e.h3,{id:"set",children:n.jsx(e.code,{children:"set"})}),`
`,n.jsx(e.p,{children:"Устанавливает содержимое мета-тега во внутреннем хранилище и обновляет или создает соответствующий мета-элемент в DOM."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — имя мета-тега"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"content: string"})," — содержимое мета-тега"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"this"})," — для цепочечных вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const meta = new MetaManager(['description', 'keywords', 'author'])

// Установить один мета-тег
meta.set('description', 'Описание сайта')

// Цепочка обновлений
meta
  .set('description', 'Мой замечательный сайт')
  .set('keywords', 'веб, разработка, javascript')
  .set('author', 'Иван Иванов')

// Динамическое обновление
const updateSEO = (pageData) => {
  meta
    .set('description', pageData.description)
    .set('keywords', pageData.keywords)
}

// Удаление мета-тега
meta.set('temporary', '')
`})}),`
`,n.jsx(e.h3,{id:"setbylist",children:n.jsx(e.code,{children:"setByList"})}),`
`,n.jsx(e.p,{children:"Устанавливает несколько мета-тегов из объекта."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"metaList: Record<string, string | undefined>"})," — объект с именами и содержимым мета-тегов"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"this"})," — для цепочечных вызовов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const meta = new MetaManager(['description', 'keywords', 'author'])

// Установить несколько тегов сразу
meta.setByList({
  description: 'Мой замечательный сайт',
  keywords: 'веб, разработка, javascript',
  author: 'Иван Иванов'
})

// Динамическое обновление страницы
const updatePageMeta = (page) => {
  meta.setByList(page.meta)
}

// Из ответа API
fetch('/api/page-meta')
  .then(res => res.json())
  .then(data => meta.setByList(data))

// Частичные обновления
meta.setByList({
  description: 'Обновленное описание'
  // Остальные теги остаются без изменений
})
`})}),`
`,n.jsx(e.h3,{id:"html",children:n.jsx(e.code,{children:"html"})}),`
`,n.jsx(e.p,{children:"Возвращает все мета-теги в виде HTML-строки с безопасным кодированием атрибутов. Полезно для серверного рендеринга."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — HTML-строка с мета-тегами"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const meta = new MetaManager(['description', 'keywords', 'author'])

meta.setByList({
  description: 'Мой сайт с "кавычками" & спецсимволами',
  keywords: 'веб, javascript',
  author: 'Иван Иванов'
})

const htmlString = meta.html()
// <meta name="description" content="Мой сайт с &quot;кавычками&quot; &amp; спецсимволами">
// <meta name="keywords" content="веб, javascript">
// <meta name="author" content="Иван Иванов">

// Использование в SSR шаблонах
const htmlTemplate = \`
<!DOCTYPE html>
<html>
<head>
  \${meta.html()}
  <title>Заголовок страницы</title>
</head>
<body>...</body>
</html>
\`

// Пример с Express.js
app.get('/page', (req, res) => {
  const meta = new MetaManager(['description', 'keywords'])
  meta.setByList(req.pageData.meta)

  res.send(\`
    <html>
      <head>\${meta.html()}</head>
      <body>...</body>
    </html>
  \`)
})
`})}),`
`,n.jsx(e.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,n.jsx(e.h3,{id:"управление-seo",children:"Управление SEO"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const seoMeta = new MetaManager([
  'description',
  'keywords',
  'author',
  'robots',
  'viewport'
])

// Установка SEO тегов
seoMeta.setByList({
  description: 'Полное руководство по веб-разработке',
  keywords: 'веб, html, css, javascript, учебник',
  author: 'Команда WebDev',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0'
})

// Обновление при смене маршрута
router.on('change', (route) => {
  seoMeta.setByList(route.meta)
})
`})}),`
`,n.jsx(e.h3,{id:"интеграция-open-graph",children:"Интеграция Open Graph"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const ogMeta = new MetaManager([
  'og:title',
  'og:description',
  'og:image',
  'og:url',
  'og:type',
  'og:site_name'
], true)

// Установка данных Open Graph
ogMeta.setByList({
  'og:title': 'Потрясающий заголовок статьи',
  'og:description': 'Эта статья взорвет ваш мозг',
  'og:image': 'https://example.com/image.jpg',
  'og:url': 'https://example.com/article',
  'og:type': 'article',
  'og:site_name': 'Мой сайт'
})

// Для шаринга в соцсетях
const shareData = {
  title: ogMeta.get('og:title'),
  description: ogMeta.get('og:description'),
  image: ogMeta.get('og:image')
}
`})}),`
`,n.jsx(e.h3,{id:"мультиплатформенное-управление-мета-тегами",children:"Мультиплатформенное управление мета-тегами"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Создание менеджеров для разных платформ
const standardMeta = new MetaManager(['description', 'keywords'])
const ogMeta = new MetaManager(['og:title', 'og:description', 'og:image'], true)
const twitterMeta = new MetaManager(['twitter:card', 'twitter:title', 'twitter:description'])

// Обновление всех платформ
const updateAllMeta = (data) => {
  standardMeta.setByList({
    description: data.description,
    keywords: data.keywords
  })

  ogMeta.setByList({
    'og:title': data.title,
    'og:description': data.description,
    'og:image': data.image
  })

  twitterMeta.setByList({
    'twitter:card': 'summary_large_image',
    'twitter:title': data.title,
    'twitter:description': data.description
  })
}

// Генерация объединенного HTML для SSR
const allMetaHTML = [
  standardMeta.html(),
  ogMeta.html(),
  twitterMeta.html()
].join('')
`})}),`
`,n.jsx(e.h3,{id:"динамическое-обновление-страниц",children:"Динамическое обновление страниц"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const meta = new MetaManager(['description', 'keywords'])

// Single Page Application
const loadPage = async (pageId) => {
  const pageData = await fetch(\`/api/pages/\${pageId}\`).then(r => r.json())

  // Обновление мета-тегов
  meta.setByList(pageData.meta)

  // Обновление заголовка
  document.title = pageData.title
}

// Интеграция с React/Vue
useEffect(() => {
  meta.set('description', page.description)
  return () => {
    // Очистка при необходимости
    meta.set('description', '')
  }
}, [page])
`})}),`
`,n.jsx(e.h2,{id:"примечания",children:"Примечания"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Конструктор автоматически считывает существующие мета-теги из DOM с помощью метода ",n.jsx(e.code,{children:"update()"})]}),`
`,n.jsxs(e.li,{children:["Методы, изменяющие DOM, проверяют среду выполнения через ",n.jsx(e.code,{children:"isDomRuntime()"})," перед доступом к ",n.jsx(e.code,{children:"document"})]}),`
`,n.jsxs(e.li,{children:["Метод ",n.jsx(e.code,{children:"html()"})," использует функцию ",n.jsx(e.code,{children:"encodeAttribute()"})," для предотвращения XSS при внедрении в SSR шаблоны"]}),`
`,n.jsxs(e.li,{children:["Специальные символы в содержимом автоматически экранируются: ",n.jsx(e.code,{children:'"'})," → ",n.jsx(e.code,{children:"&quot;"}),", ",n.jsx(e.code,{children:"&"})," → ",n.jsx(e.code,{children:"&amp;"})," и т.д."]}),`
`,n.jsxs(e.li,{children:["Когда мета-тег не существует в DOM, ",n.jsx(e.code,{children:"set()"})," создает его в ",n.jsx(e.code,{children:"document.head"})]}),`
`,n.jsx(e.li,{children:"Пустые строки являются допустимыми значениями и обновят содержимое мета-тега на пустое"}),`
`,n.jsx(e.li,{children:"Класс работает как в браузере, так и в Node.js (SSR) окружении"}),`
`]})]})}function g(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{g as default};
