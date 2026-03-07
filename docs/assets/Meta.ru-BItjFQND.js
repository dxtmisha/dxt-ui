import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-BaLriJNq.js";import{M as c}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/ru/functional-basic/Classes/Meta - Управление SEO мета-тегами"}),`
`,e.jsx(n.h1,{id:"класс-meta",children:"Класс Meta"}),`
`,e.jsxs(n.p,{children:["Унифицированный фасад для управления всеми мета-тегами документа. Наследует ",e.jsx(n.code,{children:"MetaManager"})," и объединяет стандартные HTML-теги, Open Graph (",e.jsx(n.code,{children:"MetaOg"}),") и Twitter Card (",e.jsx(n.code,{children:"MetaTwitter"}),") в единый интерфейс."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Единая точка управления"})," — один объект управляет ",e.jsx(n.code,{children:"<title>"}),", мета-тегами ",e.jsx(n.code,{children:"name"}),", ",e.jsx(n.code,{children:"og:*"})," и ",e.jsx(n.code,{children:"twitter:*"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Синхронизация"})," — ",e.jsx(n.code,{children:"setTitle"}),", ",e.jsx(n.code,{children:"setImage"}),", ",e.jsx(n.code,{children:"setCanonical"})," и ",e.jsx(n.code,{children:"setSiteName"})," автоматически обновляют соответствующие теги во всех трёх системах."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Суффикс заголовка"})," — поддержка автоматического добавления названия сайта к заголовку страницы."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"SSR-совместимость"})," — метод ",e.jsx(n.code,{children:"html()"})," генерирует полный HTML всех тегов."]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()
`})}),`
`,e.jsxs(n.p,{children:["Автоматически создаёт внутренние экземпляры ",e.jsx(n.code,{children:"MetaOg"})," и ",e.jsx(n.code,{children:"MetaTwitter"}),"."]}),`
`,e.jsx(n.h2,{id:"геттеры",children:"Геттеры"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getTitle(): string"})," — заголовок страницы без суффикса."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getKeywords(): string"})," — мета-тег ",e.jsx(n.code,{children:"keywords"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getDescription(): string"})," — мета-тег ",e.jsx(n.code,{children:"description"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getImage(): string"})," — URL изображения из Open Graph."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getCanonical(): string"})," — канонический URL."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getRobots(): MetaRobots"})," — мета-тег ",e.jsx(n.code,{children:"robots"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getAuthor(): string"})," — мета-тег ",e.jsx(n.code,{children:"author"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getSiteName(): string"})," — название сайта из Open Graph."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getLocale(): string"})," — локаль из Open Graph."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getOg(): MetaOg"})," — прямой доступ к экземпляру ",e.jsx(n.code,{children:"MetaOg"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getTwitter(): MetaTwitter"})," — прямой доступ к экземпляру ",e.jsx(n.code,{children:"MetaTwitter"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"сеттеры",children:"Сеттеры"}),`
`,e.jsxs(n.p,{children:["Все сеттеры возвращают ",e.jsx(n.code,{children:"this"})," для цепочки вызовов."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setTitle(title: string)"})," — устанавливает ",e.jsx(n.code,{children:"document.title"})," (с суффиксом), ",e.jsx(n.code,{children:"og:title"})," и ",e.jsx(n.code,{children:"twitter:title"})," одновременно."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setKeywords(keywords: string | string[])"})," — принимает строку или массив; массив объединяется через запятую."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setDescription(description: string)"})," — устанавливает ",e.jsx(n.code,{children:'<meta name="description">'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setImage(image: string)"})," — устанавливает ",e.jsx(n.code,{children:"og:image"})," и ",e.jsx(n.code,{children:"twitter:image"})," одновременно."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setCanonical(canonical: string)"})," — устанавливает ",e.jsx(n.code,{children:'<meta name="canonical">'}),", ",e.jsx(n.code,{children:"og:url"})," и ",e.jsx(n.code,{children:"twitter:url"})," одновременно."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setRobots(robots: MetaRobots)"})," — устанавливает ",e.jsx(n.code,{children:'<meta name="robots">'})," (",e.jsx(n.code,{children:"'index, follow'"}),", ",e.jsx(n.code,{children:"'noindex, nofollow'"})," и др.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setAuthor(author: string)"})," — устанавливает ",e.jsx(n.code,{children:'<meta name="author">'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setSiteName(siteName: string)"})," — устанавливает ",e.jsx(n.code,{children:"og:site_name"})," и ",e.jsx(n.code,{children:"twitter:site"})," одновременно."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setLocale(locale: string)"})," — устанавливает ",e.jsx(n.code,{children:"og:locale"})," (формат: ",e.jsx(n.code,{children:"'ru_RU'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setSuffix(suffix?: string)"})," — суффикс заголовка. ",e.jsx(n.code,{children:"setTitle('Статья')"})," + ",e.jsx(n.code,{children:"setSuffix('Сайт')"})," → ",e.jsx(n.code,{children:"'Статья - Сайт'"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"генерация-html",children:"Генерация HTML"}),`
`,e.jsx(n.h3,{id:"html-string",children:e.jsx(n.code,{children:"html(): string"})}),`
`,e.jsx(n.p,{children:"Генерирует полную HTML-строку всех мета-тегов: стандартных + Open Graph + Twitter Card. Используется для SSR."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()
meta.setTitle('Статья').setDescription('Описание').setImage('https://example.com/img.jpg')

const html = meta.html()
// <meta name="description" content="Описание">
// <meta property="og:title" content="Статья">
// <meta property="og:image" content="https://example.com/img.jpg">
// <meta name="twitter:title" content="Статья">
// ...
`})}),`
`,e.jsx(n.h2,{id:"пример",children:"Пример"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Meta } from '@dxtmisha/functional-basic'

const meta = new Meta()
meta.setSuffix('Мой Сайт')

meta
  .setTitle('Как использовать Vue 3')
  .setDescription('Подробное руководство по Vue 3')
  .setKeywords(['vue', 'javascript', 'typescript'])
  .setImage('https://example.com/images/vue.jpg')
  .setCanonical('https://example.com/articles/vue-3')
  .setRobots('index, follow')
  .setAuthor('Иван Иванов')
  .setSiteName('Мой Сайт')
  .setLocale('ru_RU')
`})})]})}function a(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{a as default};
